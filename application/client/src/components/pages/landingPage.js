import React, {Component} from 'react';
import axios from 'axios';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer, MDBIcon, MDBMedia,
    MDBRow
} from "mdbreact";
import './landcss.css';


import '../images/WelcometoCatDog.png';

import {Container} from "react-bootstrap";

import {Header, Image, Segment} from "semantic-ui-react";
import logo from "../images/logo.png";

import test from "../layout/NavBar"

import queryString from 'query-string'

console.log(this)

class landingPage extends Component {
    constructor(){
        super();
        this.state={
            form: {
                searchValue: '',
                firstName: '',
                lastName: '',
                email: ''
            }
        };
    }

    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit=(event)=>{
        event.preventDefault();
        //get our form data
        const {searchValue,firstName,lastName,email}=this.state;
        axios.post('/api/search',{searchValue})
            .then((result)=>{
                //access the results here
                console.log(result.data[0])
                this.setState({
                    firstName: result.data[0].firstName,
                    lastName: result.data[0].lastName,
                    email: result.data[0].email
                })
                console.log(this.state.firstName)

            })
    }
    /**
     *  <div >
                <form onSubmit={this.onSubmit}>
                                <input
                                    type="text"
                                    id="defaultFormCardNameEx"
                                    className="form-control"
                                    data-parse={"uppercase"}
                                    name={"searchValue"}
                                    value={searchValue}
                                    onChange={event => this.onChange(event)}
                                />
                                <button type="submit" > search
                                </button>
                            </form>
                </div>
     */
    componentDidMount() {
        const values = queryString.parse(this.props.location.search)// "?filter=top&origin=im"
        console.log(values.user)
        console.log(values)
        console.log(this)
        console.log(this.props)
    }

    render(){
        const{searchValue}=this.state;
        const first = <p>First Name: {this.state.firstName}</p>;
        const last = <p>Last Name: {this.state.lastName}</p>
        const email = <p>Email: {this.state.email}</p>;
        return(
            <div >

               
                <div>

                    {this.state.firstName ? first : ''}
                    {this.state.lastName ? last : ''}
                    {this.state.email ? email : ''}


                </div>


                <MDBContainer>
                    <MDBRow>
                        <MDBCol xl="6" className={"head-text"}> <br/><Image
                            className={"logo-align"}
                            size='small'
                            src={logo}
                            circular />
                            Welcome to CatDog!



                         <p className={"under-text"}> Find the Care Your Pet Deserves {test}</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>



                <Container centered>

                    <MDBRow className={"cards-center"}>
                        <MDBCol >
                            <MDBCard
                                className="card-image  "
                                style={{

                                    backgroundImage:
                                        "url('https://static.wixstatic.com/media/592aa7e6b8044e2299b90a76ec709c07.jpg/v1/crop/x_799,y_0,w_933,h_955/fill/w_514,h_532,al_c,q_80,usm_0.66_1.00_0.01/592aa7e6b8044e2299b90a76ec709c07.webp')"
                                }}
                            >
                                <div className=" text-white text-center d-flex align-items-center rgba-brown-strong py-5 px-4">
                                    <div>
                                        <h5 >
                                            <MDBIcon icon="heart" size="3x"/>
                                        </h5>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <h1 >How it Works</h1>
                                        </MDBCardTitle>
                                        <h4 className="white-text ">
                                            Take a look around and youll see what youre missing
                                        </h4>
                                        <MDBBtn rounded floating className={"button-color"} href={"faq"}>
                                            <MDBIcon icon="dog"/> How it Works
                                        </MDBBtn>
                                    </div>
                                </div>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard
                                className="card-image center"
                                style={{
                                    backgroundImage:
                                        "url('https://images.wallpaperscraft.com/image/dog_cat_poster_white_background_friendship_78745_800x1200.jpg')"
                                }}
                            >
                                <div className="text-green text-center d-flex align-items-center rgba-white-light py-5 px-4">
                                    <div>
                                        <h5 >
                                            <MDBIcon icon="hands-helping" size="3x"/>
                                        </h5>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <h1 className="black-text">Get Started</h1>
                                        </MDBCardTitle>
                                        <h4 className="black-text ">
                                            we love making the process easy! Just take a look around!

                                        </h4>
                                        <MDBBtn color="yellow" href={"clientApp"}>
                                            <MDBIcon icon="cat" /> SignUP
                                        </MDBBtn>
                                    </div>
                                </div>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard
                                className="card-image"
                                style={{
                                    backgroundImage:
                                        "url('https://irp-cdn.multiscreensite.com/f5d9a948/dms3rep/multi/mobile/RS574811_shutterstock_196673558-lpr%20%281%29-1887x859.jpg')"
                                }}
                            >
                                <div className="text-green text-center d-flex align-items-center rgba-white-slight py-5 px-4">
                                    <div>
                                        <h5 >
                                            <MDBIcon icon="users" size="3x" />
                                        </h5>
                                        <MDBCardTitle tag="h3" className="pt-2">
                                            <h1 className="black-text">Become a Sitter</h1>
                                        </MDBCardTitle>
                                        <h4 className="black-text">
                                            join our team of animal lovers work and play
                                            its good
                                            find out more
                                        </h4>
                                        <MDBBtn href={"sitterApplication"} color="yellow" >

                                            <MDBIcon icon="heart"  /> Apply Now!
                                        </MDBBtn>
                                    </div>
                                </div>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>

                </Container>

            </div>







        )
    }
}
export default landingPage;