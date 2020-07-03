import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import '../signupClient/clientaap.css';
import Header from "semantic-ui-react/dist/commonjs/elements/Header";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import logo from '../images/logo.png';
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdbreact";
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";


class adminLogin extends Component{
    state = {
        user: '',
        password: '',
        error: ''
    }
    componentDidMount() {
       
    }
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.user === 'admin' && this.state.password === 'catdog'){
            this.props.history.push('/adminpage')
        }
        
    }
    render(){
        return(
            <div>
                <Container className={"header-text"}>
                <div>

                        <Container>
                        <Card centered>
                            <Card.Content>

                                <Form onChange={this.onChange} onSubmit={this.onSubmit}>
                                    <Header as='h2' icon textAlign='center'>
                                        <img src={logo} circular />
                                        <Header.Content>Welcome Back !</Header.Content>
                                        <p><font color="red"  ></font></p>
                                    </Header>
                                    <Form.Group controlId="formBasicEmail">

                                        <Form.Control name="user"type="username" placeholder="User Name" />

                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                       
                                        <Form.Control name="password" type="password" placeholder="Password" />
                                    </Form.Group>
                                    

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>




                            </Card.Content>

                        </Card>
                        </Container>

                </div>
            </Container>









            </div>
        )
    }
}
export default adminLogin;