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


class login extends Component{
    state = {
        user: '',
        password: '',
        error: '',
        type: ''
    }
    componentDidMount() {
        if(localStorage.loggedIn && localStorage.type){
            if(localStorage.type === "client"){
                this.props.history.push(`/clientprof?user=${localStorage.user}`)
            }else{
                this.props.history.push(`/sitterpro?user=${localStorage.user}`)
            }
        }
        console.log('Localstorage')
        console.log(localStorage)
        console.log("Done")
    }
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.name)
        console.log(event.target.value)
    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log('Submit Login')
        axios.post('/api/login',this.state).then((result) => {
            if(result.status === 201){
                localStorage.setItem('user',this.state.user)
                localStorage.setItem('loggedIn', true)
                localStorage.setItem('type', this.state.type)
                if(this.state.type === "client"){
                    window.location = `/clientprof?user=${this.state.user}`
                    //this.props.history.push(`/clientprof?user=${this.state.user}`)
                }else{
                    window.location = `/sitterpro?user=${this.state.user}`
                    // this.props.history.push(`/sitterpro?user=${this.state.user}`)
                }
            }else if(result.status === 200){
                this.setState({error: result.data})
            }
            
        })
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
                                        <p><font color="red"  >{ this.state.error ? this.state.error : '' }</font></p>
                                    </Header>
                                    <Form.Group controlId="formBasicEmail">

                                        <Form.Control name="user"type="username" placeholder="User Name" />

                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                       
                                        <Form.Control name="password" type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridState">
                                        <Form.Label>Service</Form.Label>
                                        <Form.Control name="type" as="select">
                                            <option>Choose a Option</option>
                                            <option value="client">Client</option>
                                            <option value="worker">Sitter</option>
                                        </Form.Control>
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
export default login;