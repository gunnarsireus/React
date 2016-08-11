var RandomMessage = React.createClass({

    incrementCounter: function () {
        if (this.refs != null) return this.refs.incrementCount();
        return 0;
    },
        getInitialState: function() {
            return { message: 'Hello, Universe Start' };
        },
        onClick: function () {
            OldMessage = this.state.message;
            Count++;
            var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
            var randomMessage = messages[Math.floor((Math.random() * 3))];

            while (randomMessage === OldMessage) {
                randomMessage = messages[Math.floor((Math.random() * 3))];
            }

            this.setState({ message: randomMessage });
        },
        render: function () {
            return (
            <div>
                <MessageView  message={ Count + ":  "+   this.state.message + ", old: " + OldMessage } />
            <p><input type="button" onClick={ this.onClick } value="Change Message" /></p>
    </div>
    );
    }
    });

    var MessageView = React.createClass({
        render: function() {
            return (
            <p>{ this.props.message}</p>
            );
        }
    });
   var Count=0;
   var OldMessage;
   ReactDOM.render(<RandomMessage/>, document.getElementById('greeting-div') );
