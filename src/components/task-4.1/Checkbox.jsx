import React from "react";

class Checkbox extends React.Component {

    state = {
        checkboxValue: true,
    };

    onChangeCheckbox = () => {
        this.setState({ checkboxValue: !this.state.checkboxValue });
    };

    render() {
        return (
        <p className="checkbox" onClick = { () => this.onChangeCheckbox() }>
            { this.state.checkboxValue ? "✔" : "✖" }
        </p>
        );
    }
}

export default Checkbox;
