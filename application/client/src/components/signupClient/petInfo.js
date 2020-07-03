import React, {Component} from "react";
import {Container} from "react-bootstrap";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import './clientaap.css'
import Progress from "semantic-ui-react/dist/commonjs/modules/Progress";
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

import {MDBBtn, MDBIcon, MDBCol, MDBRow, MDBContainer} from "mdbreact";
import Checkbox from "semantic-ui-react/dist/commonjs/modules/Checkbox";

import queryString from 'query-string'

import axios from "axios";


const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]


let petInfoValues = {
    user: '',
    name: '',
    description: '',
    type: 'cat'
}

const onChange = (event)=>{
   
    petInfoValues[event.target.name] = event.target.value
    console.log(event.target.name)
    console.log(petInfoValues[event.target.name])
    
}




class petInfo extends Component{
    state = { percent: 95,
    error:'', }

    increment = () =>
        this.setState((prevState) => ({
            percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
        }))

        componentDidMount() {
            const values = queryString.parse(this.props.location.search)   // "?user=userInput"
            petInfoValues.user = values.user
            if(!localStorage.loggedIn) this.props.history.push('/')
            console.log('Localstorage')
            console.log(localStorage)
            console.log("Done")
        }

    onSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/db/addPet',petInfoValues).then((result) => {
            if(result.status === 201){
                this.props.history.push(`/clientprof?user=${petInfoValues.user}`)
            }else{
                this.setState({
                    error: `You Already have a Pet Named: ${petInfoValues.name}`
                })
            }
        })
    }    






    render(){


        return(

            <div className={"header-text"}>
                <MDBContainer>
                <Form onChange={event => onChange(event)} onSubmit={this.onSubmit}>
                    <Container centerec className={"header-text"}>
                        <div>
                            <Header as='h2' icon textAlign='center'>
                                <Icon name='paw' circular />
                                <Header.Content>Tell us About Your Furry Friend!</Header.Content>
                                <h3> The Main Event</h3>
                                <h1><font  color='red'>{ this.state.error ? this.state.error : '' }</font></h1>

                            </Header>

                        </div>
                    </Container>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Furry Friend Name'
                            placeholder='Furry Name'
                            name= 'name'
                        />

                        <Form.Field
                            control={Select}
                            options={genderOptions}
                            label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                            placeholder='Gender'
                            name="type"
                            search
                            searchInput={{ id: 'form-select-control-gender' }}
                            
                        />
                    </Form.Group>
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Let Us Know Anything Else'
                        placeholder='Info'
                        name="description"
                    />


                    <MDBRow>
                        <MDBCol md="4">
                            <MDBBtn rounded className={"button-color"} href={"SignUp"}><MDBIcon icon="angle-double-left" /></MDBBtn>
                        </MDBCol>
                        <MDBCol md="4">.

                        </MDBCol>
                        <MDBCol md="4">
                            <MDBBtn rounded color="yellow" type="submit" >Submit</MDBBtn>
                        </MDBCol>
                    </MDBRow>



                </Form>

                </MDBContainer>

                <Container>
                    <div>
                        <Progress percent={this.state.percent} indicating />


                    </div>
                </Container>
            </div>

        )
    }
}
export default petInfo;