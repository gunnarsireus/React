var isRegistered = function (name) {
    return document.createElement(name).constructor !== HTMLElement;
}
var proto = Object.create(HTMLElement.prototype, {
    attachedCallback: {
        value: function () {
            var mountPoint = document.createElement("span");
            this.createShadowRoot().appendChild(mountPoint);

            var name = this.getAttribute("name");
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
            ReactDOM.render(<a href={url }>{name}</a>, mountPoint);
        }
    }
});
if (!isRegistered("x-search")) {
    document.registerElement("x-search", { prototype: proto });
}

// Define React Component
class HelloMessage extends React.Component {
    render() {
        return <div>Hello <x-search name={this.props.name } />!</div>;
    }
}

// Mount React Component (which uses WebComponent which uses React)
var container = document.getElementById("container");
ReactDOM.render(<HelloMessage name="Jim Sproch" />, container);