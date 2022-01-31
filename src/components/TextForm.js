import React, { Component } from 'react';

export default class TextForm extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            text: "",
        }
    }


    handleUpclick = () => {
        this.setState({
            text: this.state.text.toUpperCase(),
        })
    }

    handleOnChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleCamelClick = (event) => {
        this.setState({
            text: this.state.text.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
        })
    }

    handleLowerClick = (event) => {
        this.setState({
            text: this.state.text.toLowerCase()
        })
    }

    handleClear = () => {
        this.setState({
            text: "",
        })
    }

    handleChainCase = () => {
        this.setState({
            text: this.state.text.split(" ").join("_")
        })
    }



    render() {
        return (
            <>
                <div className="container my-3">
                    <div className="mb-3">
                        <h1 className={`text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>{this.props.heading}</h1>
                        <textarea style={{ backgroundColor: this.props.mode === "light" ? 'white' : 'grey', color: this.props.mode === "light" ? "black" : "white" }} value={this.state.text} onChange={this.handleOnChange} className="form-control" id="mybox" rows="8"></textarea>
                    </div>

                    <button className={`btn btn-${this.props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={this.handleUpclick}>
                        convert to upper case
                    </button>
                    <button className={`btn btn-${this.props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={this.handleCamelClick}>
                        convert to camel case
                    </button>
                    <button className={`btn btn-${this.props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={this.handleLowerClick}>
                        convert to lower case
                    </button>
                    <button className={`btn btn-${this.props.mode === 'light' ? 'dark' : 'light'} my-2 mx-2`} onClick={this.handleClear}>
                        clear
                    </button>
                    <button className={`btn btn-${this.props.mode === 'light' ? 'dark' : 'light'} my-2`} onClick={this.handleChainCase}>
                        chaincasing
                    </button>

                    <div className={`container my-3 text-${this.props.mode === "light" ? 'dark' : "light"}`}>
                        <h1>your Text summary</h1>
                        <p>{this.state.text.split(" ").length} word , {this.state.text.length} characters</p>
                        <p>{0.008 * this.state.text.split(" ").length} minutes are taken to read this</p>
                        <h3> Preview </h3>
                        <p> {this.state.text.length > 0 ? this.state.text : "enter something"} </p>
                    </div>
                </div>
            </>
        )
    }
}

