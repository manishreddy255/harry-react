import React, { Component } from "react";

class Alert extends Component {

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        return (
            <>{this.props.alert &&
                <div className={`alert alert-${this.props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{this.capitalize(this.props.alert.type)}</strong> {this.props.alert.msg}
                </div>
            }


            </>
        )
    }
}

export default Alert;