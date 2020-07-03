import React, {Component} from "react";
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import "./style.css"


class Contact extends Component {

    constructor(){
        super();
        this.state={
            form: {
                firstName: '',
                lastName: '',
                email: '',
                data: ''
            }
        };
    }
    componentDidMount() {
        localStorage.clear()
    }
    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.name)
    }

    onSubmit=(event)=>{
        event.preventDefault();
        //get our form data
        const {firstName, lastName, email}=this.state;

        axios.post('/api/db/addSub',{firstName,lastName,email})

            .then((result)=>{
              
                this.setState({data: result.data})

            })
    }


   render() {
    const{firstName, lastName, email}=this.state;
    console.log(firstName)

        return (
            <MDBContainer className="flex-center">

                <MDBRow>
                    <MDBCol md="100">
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={this.onSubmit}>
                                    <p className="h4 text-center py-4">Subscribe</p>
                                    <label
                                        htmlFor="defaultFormCardNameEx"
                                        className="grey-text font-weight-light"
                                    >
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="defaultFormCardNameEx"
                                        className="form-control"
                                        data-parse={"uppercase"}
                                        name={"firstName"}
                                        value={firstName}
                                        onChange={event => this.onChange(event)}

                                    />
                                    <br/>
                                    <label
                                        htmlFor="defaultFormCardNameEx"
                                        className="grey-text font-weight-light"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        id="defaultFormCardNameEx"
                                        className="form-control"
                                        data-parse={"uppercase"}
                                        name={"lastName"}
                                        value={lastName}
                                        onChange={event => this.onChange(event)}
                                    />
                                    <br/>
                                    <label
                                        htmlFor="defaultFormCardEmailEx"
                                        className="grey-text font-weight-light"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="text"
                                        id="defaultFormCardNameEx"
                                        className="form-control"
                                        name={"email"}
                                        value={email}
                                        onChange={event => this.onChange(event)}

                                    />
                                     <br/>
                                    <label
                                        htmlFor="defaultFormCardEmailEx"
                                        className="grey-text font-weight-light"
                                    >
                                        write the Message 
                                    </label>
                                    <input
                                        type="text"
                                        id="defaultFormCardNameEx"
                                        className="form-control"
                                      

                                    />

                                    
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn className="btn btn-outline-grey" type="submit">
                                            Send
                                            <MDBIcon far icon="paper-plane" className="ml-2"/>

                                        </MDBBtn>


                                    </div>
                                    <div><h1>{this.state.data}</h1></div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>

        );
    };
}

export default Contact;