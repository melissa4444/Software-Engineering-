import React, {Component} from 'react'
import {Container} from "react-bootstrap";
import './clientaap.css'
import '../pages/landcss.css'
import Header from "semantic-ui-react/dist/commonjs/elements/Header";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import Progress from "semantic-ui-react/dist/commonjs/modules/Progress";

import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from "mdbreact";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import axios from "axios";

import { Redirect, Route } from 'react-router-dom'


//Amir

let signupValues = {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    password: undefined,
    street: undefined,
    city: undefined,
    zipCode: undefined,
    userName: undefined,
    agreed: 'false'

}


const onChange = (event)=>{ 
    if(event.target.name === 'agreed') {
        signupValues[event.target.name] = 'true'
    }else{
    signupValues[event.target.name] = event.target.value
    console.log(event.target.name)
    console.log(signupValues[event.target.name])
    }
}



//Amir


class SignUP extends Component{


    
    state = { percent: 45,
        errors: '',
        redirect: ''
}

    increment = () =>
        this.setState((prevState) => ({
            percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
        }))


     onSubmit = (event)=>{
            event.preventDefault();
            const values = Object.values(signupValues)
            for(let value of values){
                if(value ===  undefined || value === '') {this.setState({errors: 'Please Fill out the Form Completely'})
                return;
            }}
            if(signupValues.agreed === 'false') {
                this.setState({
                    errors: 'Please Accept the Agreement'
                })
                return;
            }
            axios.post('/api/db/addClient', signupValues).then((result) => {
                    // if(result.request.response) this.setState({
                    //     errors: result.request.response
                    // })
                    if(result.status === 201)  {this.setState({
                        redirect: `/petInfo?user=${signupValues.userName}`
                    })
                    localStorage.setItem('user',signupValues.userName)
                    localStorage.setItem('loggedIn', true)
                   
                   
                    this.props.history.push(this.state.redirect)
                
                }
                    if(result.status === 200) {this.setState({errors: 'Username Already Taken' })}
                
            })
        }




    render(){
        console.log(this.state.errors)
       
        

       
        return(
            <div>




                <Container centered>
                    <div className={"header-text"}>
                        <Header as='h2' icon textAlign='center'>
                            <Icon name='paper plane outline' circular />
                            <Header.Content>Let's Sign Up !</Header.Content>
                            <h3>As Our Client We Strive to Make the Registration Processes Easy Peasy</h3>

                        </Header>
                        <p>First the Basics</p>
                        <p><font color="red"  >{ this.state.errors ? this.state.errors : '' }</font></p>

                    </div>


                            <Form onChange={event => onChange(event)} onSubmit={this.onSubmit} >
                                

                                <Form.Group >

                                     <Form.Control  type="userName" name="userName"  placeholder="userName" />

                                </Form.Group>

                                <Form.Group >

                                    <Form.Control  type="firstName" name="firstName"  placeholder="First Name" />

                                </Form.Group>

                                <Form.Group >

                                    <Form.Control type="lastname" name="lastName" placeholder="Last name" />

                                </Form.Group>


                                <Form.Group controlId="formBasicEmail">

                                    <Form.Control type="email" name="email" placeholder="Email" />

                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">

                                    <Form.Control type="password" name="password" placeholder="Password" />
                                </Form.Group>

                               {/* <Button variant="primary" type="submit">
                                    Submit
                                </Button>*/}

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address 1</Form.Label>
                                    <Form.Control type="street" name="street" placeholder="1234 Main St, Apartment, studio, or floor" />
                                </Form.Group>

                                

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="city" name="city" placeholder="City" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control name="state" as="select">
                                            <option>Choose a Option</option>
                                            <option>CA</option>
                                            <option>WA</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control type="zipCode" name="zipCode" placeholder="Zip" />

                                    </Form.Group>
                                </Form.Row>

                                <Form.Group id="formGridCheckbox">
                                    <Form.Check name="agreed" type="checkbox" label="Agree to the Terms and Conditions" />
                                </Form.Group>

                                <MDBContainer >
                                    <MDBRow className={"col"}>
                                        <MDBCol md="4">

                                            <MDBBtn rounded className={"button-color"} href={"clientApp"}><MDBIcon icon="angle-double-left" /></MDBBtn>
                                        </MDBCol>
                                        <MDBCol md="4">
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <MDBBtn rounded color="yellow" type="submit" >Continue
                                           
                                            </MDBBtn>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>



                            </Form>Container







                </Container>

             {/*   <Container >
                    <div class="md-stepper-horizontal center-step">
                        <div class="md-step active done">
                            <div class="md-step-circle"><span>1</span></div>
                            <div class="md-step-title">The Basics</div>
                            <div class="md-step-bar-left"></div>
                            <div class="md-step-bar-right"></div>
                        </div>
                        <div class="md-step active editable">
                            <div class="md-step-circle"><span>2</span></div>
                            <div class="md-step-title">Pet Info</div>
                            <div class="md-step-bar-left"></div>
                            <div class="md-step-bar-right"></div>
                        </div>
                        <div class="md-step active">
                            <div class="md-step-circle"><span>3</span></div>
                            <div class="md-step-title">Profile</div>
                            <div class="md-step-bar-left"></div>
                            <div class="md-step-bar-right"></div>
                        </div>

                    </div>

                </Container>*/}

                <Container></Container>


                <Container>
                    <div>
                        <Progress percent={this.state.percent} indicating />


                    </div>
                </Container>






            </div>
        )
    }
}
export default SignUP;