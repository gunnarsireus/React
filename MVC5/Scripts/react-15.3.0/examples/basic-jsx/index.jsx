﻿if ($("#counter-div").text() !== "") {
    var ExampleApplication = React.createClass({
        render: function () {
            var elapsed = Math.round(this.props.elapsed / 100);
            var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
            var message =
                'React has been successfully running for ' + seconds + ' seconds.';
            if ($("#counter-div").text() === "") {
                return null;
            }
            return <p>{message}</p>;
        }
    });
    var start = new Date().getTime();
    setInterval(function () {
        ReactDOM.render(
                <ExampleApplication elapsed={new Date().getTime() - start} />,
                document.getElementById("counter-div")
            );
        },
        50);
}
