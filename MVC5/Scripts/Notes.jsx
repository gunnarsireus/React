 var Note = React.createClass({

    getInitialState: function(){
    return {editing:false}

    },
    componentWillMount: function(){
    this.style = {
    right: this.randomBetween(0, window.innerWidth - 150) + 'px',
    top: this.randomBetween(0, window.innerHeight - 150) + 'px',
    rotate : 'rotate('+ this.randomBetween(-15,15) + 'deg)'
    }
    },

    componentDidMount: function(){
    $(this.getDOMNode()).draggable();
    },

    randomBetween: function(min, max){
    return (min + Math.ceil(Math.random()*max));
    },

    edit : function(){
    this.setState({editing: true});
    },

    remove: function(){
    this.props.onRemove(this.props.index);
    },

    save: function() {
    this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);
    this.setState({editing: false});
    },

    renderDisplay: function() {
    return (
    <div className="note" style={this.style}>
        <p>{this.props.children}</p>
        <span>
            <button onClick={this.edit}
                    className="btn btn-primary glyphicon glyphicon-pencil" />
            <button onClick={this.remove}
                    className="btn btn-danger glyphicon glyphicon-trash" />
        </span>
    </div>
    );
    },

    renderForm: function() {
    return (
    <div className="note" style={this.style}>
        <textarea ref="newText" defaultValue={this.props.children}
                  className="form-control"></textarea>
        <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
    </div>
    );
    },

    render: function() {
    if (this.state.editing) {
    return this.renderForm();
    }
    else {
    return this.renderDisplay();
    }
    }
    });


    var Board = React.createClass({
    getInitialState: function() {
    return {
    notes: []
    };
    },

    nextId : function(){
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId ++;
    },

    add: function(text){
    var arr = this.state.notes;
    arr.push({
    id: this.nextId(),
    note:text
    });

    this.setState({notes:arr});
    },

    update: function(newText, i) {
    var arr = this.state.notes;
    arr[i].note = newText;
    this.setState({notes:arr});
    },

    remove: function(i) {
    var arr = this.state.notes;
    arr.splice(i, 1);
    this.setState({notes: arr});
    },

    eachNote: function(note, i) {
    return (
    <Note key={note.id}
          index={i}
          onChange={this.update}
          onRemove={this.remove}>{note.note}</Note>
    );
    },

    render: function(){
    return (
    <div className="board">{this.state.notes.map(this.eachNote)}
        <button onClick={this.add.bind(null,"New note")} className="btn btn-sm glyphicon glyphicon-plus"></button>
    </div>
    );
    }
    });


    React.render(
    <Board />,
    document.getElementById('react-container'));