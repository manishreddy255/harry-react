import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class About extends Component {



    constructor() {
        super();
        this.state = {
            style: {
                color: 'black',
                backgroundColor: 'white',

            },
            btnText: 'Enable dark mode',
            btnClass: 'btn btn-dark'

        }

    }

    toggleStyle = () => {
        if (this.state.style.color === "black") {
            this.setState({
                style: {
                    color: 'white',
                    backgroundColor: 'black',
                    border: '1px solid white'
                },
                btnText: 'Enable dark mode',
                btnClass: 'btn btn-light'
            })
        } else {
            this.setState({
                style: {
                    color: 'black',
                    backgroundColor: 'white'
                },
                btnText: 'Enable light mode',
                btnClass: 'btn btn-light'
            })
        }
    }

    render() {
        return (
            <>
                <div className="container my-3" style={this.state.style}>

                    <h2 className='my-3'>About me </h2>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button style={this.state.style} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div style={this.state.style} className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button style={this.state.style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div style={this.state.style} className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button style={this.state.style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div style={this.state.style} className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container my-3'>
                        <button onClick={this.toggleStyle} className={this.state.btnClass}>{this.state.btnText}</button>
                    </div>

                </div>


            </>
        )
    }
}
