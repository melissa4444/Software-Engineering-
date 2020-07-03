import React, {Component} from "react";

import '../signupClient/clientaap.css';
import sparkles from '../images/sparkles1.png';
import pit from '../images/dogAvatar.png';
import {
    MDBBtn,
    MDBIcon
}from "mdbreact";
import julio from '../images/julio.png';
import './clientprofcss.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Divider, Grid, Header, Segment, Table } from 'semantic-ui-react'
import Card from "semantic-ui-react/dist/commonjs/views/Card";

import Label from "semantic-ui-react/dist/commonjs/elements/Label";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

import { TabStrip, TabStripTab, PanelBar, PanelBarItem, PanelBarUtils, Menu, MenuItem, MenuItemModel, MenuItemLink, MenuItemArrow, Splitter } from '@progress/kendo-react-layout'
import '@progress/kendo-react-intl'
import '@progress/kendo-react-dropdowns'
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import {DateTimePicker} from "@progress/kendo-react-dateinputs";
import { Upload } from '@progress/kendo-react-upload';
import {Calendar} from "@progress/kendo-react-dateinputs/dist/es/calendar/components/Calendar";
import {provideIntlService} from "@progress/kendo-react-intl/dist/es/intlUtils";

import loginnva from "../layout/LoginNavBar"




import axios from "axios";
import queryString from 'query-string'



const postRequest = {
    type: '',
    start: '',
    end: '',
    location: '',
    user: '',
    petName: ''
}

const onChange = (event) => {
    postRequest[event.target.name] = event.target.value
    console.log(postRequest[event.target.name])
    console.log(event.target)
    console.log(event.target.name)
}



class clientprof extends Component{




    constructor(props){
        super(props);
        this.state={
            expandMode: 'multiple',
            firstName: 'ivan',
            bookingDayEnd: 'mm/dd',
            bookingDayStart: 'mm/dd',
            bookingTime: '00:00:00',
            bookingDay: 'mm/dd',
            contactNumber: '000-000-000',
            contactEmail: 'example@gmail.com',
            success: false,
            bookingLocation: 'CA',
            image: ' ',
            workerName: 'ivan',
            workerNumber: ' ',
            petName: '',
            petBio: '',
            postInfo: [],
            bookinfo: [],
            pending: 0,
            booking: 0

        };





        setTimeout(()=>{
            const date='2019-11-18';
            this.setState({value: provideIntlService(this).parseDate(date)});
        },1000);
    }

    
    componentDidMount() {
        
            let values = queryString.parse(this.props.location.search) 
            values = values.user
            this.setState({
                user: values
            })
            // if(localStorage.user != values){this.props.history.push('/login')}
            postRequest.user = values
            axios.post('/api/db/clientInfo',{user: values}).then((result) => {
                this.setState({
                    //const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
                    firstName: result.data[0].firstName.charAt(0).toUpperCase() + result.data[0].firstName.slice(1) + ' ' 
                    + result.data[0].lastName.charAt(0).toUpperCase() + result.data[0].lastName.slice(1),
                    contactNumber: result.data[0].City,
                    contactEmail: result.data[0].email
                })
                axios.post('/api/db/petInfo',{user: values}).then((result) => {
                    if(result.data[0].type === 'cat') {
                        this.setState({
                            image: sparkles
                        })
                    }else{
                        console.log("here in dog")
                        this.setState({
                            image: pit
                        })
                    }
                    this.setState({
                        petName: result.data[0].name,
                        petBio: result.data[0].description
                    })
                    console.log("Here")
                    axios.post('/api/db/getPost', {user: postRequest.user}).then((result) =>{
                            if(!result.data[0]){
                           console.log("Here")
                            this.setState({
                                
                                
                                pending: 0
                            })
                            
                        }else{
                            this.setState({
                                postInfo: result.data,
                                pending: 1
                            })
                        }

                    }) 
                   
                })
                axios.post('/api/db/getBooking',{user: this.state.user}).then((result) => {
                    console.log(result.data)
                    this.setState({
                        bookinfo: result.data,
                        booking: 1
                    })
                })
                
            })
           
            
    
        
    }


    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({success:true});
        setTimeout(()=>{this.setState({success:false});},3000);
    }

    submitPost =(event) => {
        event.preventDefault();
        console.log(postRequest)
        postRequest.petName = this.state.petName
        axios.post('/api/db/createPost',postRequest).then((result) => {
           if(result.status === 201){
               alert('Booking Was Made')
               this.setState({
                   pending: 1
               })
                window.location.reload()
           }

        })

    }



    onChange=(event)=>{
        this.setState({value:event.value});
    }


    render(){
        const {expandMode}=this.state;
        const contactInfoEmail = <p>Email: {this.state.contactEmail }</p>
        const contactInfoNumber = <p>City:<br></br> {this.state.contactNumber}</p>
        const bookingStartDate = <p>{this.state.bookingDayStart}</p>
        const bookingEndDate = <p><br></br> {this.state.bookingDayEnd}</p>
        const bookTime = <p>{this.state.bookingTime}</p>
        const bookLocations = <p>Location: {this.state.bookingLocation}</p>
        const nameWorker = <p>Your Sitter: {this.state.workerName}</p>

        const postArray = this.state.postInfo
        const pendingPost = postArray.map((item) => <Card> <p className="pendingPost" align="left">
        Pet Name: {item.name}
        <br></br>Booking Date:
        <br></br> {new Date(Date.parse(item.datePosted)).toDateString()} 
        <br></br> To {new Date(Date.parse(item.dateRequested)).toDateString()}
        <br></br> Booking Time: {new Date(item.datePosted).toISOString().slice(11, -5)}
        <br></br>Location:  {item.location}
        <br></br>{item.active ? '' : <Icon name='x icon' size='large'/>}
        <br></br>
    </p></Card>)

        const bookings = this.state.bookinfo.map((item) => <Card> <p className="pendingPost" align="left">
        Pet Name: {item.name}
        <br></br>Booking Date:
        <br></br> {new Date(Date.parse(item.datePosted)).toDateString()} 
        <br></br> To {new Date(Date.parse(item.dateRequested)).toDateString()}
        <br></br> Booking Time: {new Date(item.datePosted).toISOString().slice(11, -5)}
        <br></br>Location:  {item.location}
        <br></br>Worker UserName: {item.active ? item.worker : '' }
        <br></br>{item.active ? <Icon name='thumbs up outline' size='large'/> : '' }
        

    </p></Card>)




        return(
            

            <div>
            
                <Container style={{ padding: '6em 0em' }}>
                    <Header as='h2'><br></br>Welcome to your Profile</Header>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Segment>
                                    <Segment.Group horizontal>
                                        <Segment>
                                            <Card
                                                image={julio}
                                            />
                                        </Segment>
                                        <Segment>
                                            <Card>
                                                <Label as='a' image>
                                                    <Icon name='user' size='large'/>
                                                    {this.state.firstName}
                                                </Label>
                                            </Card>
                                            <Card>
                                                <Label as='a' image>
                                                    <Icon name='phone' size='large'/>
                                                    Contact
                                                </Label>
                                                {this.state.contactEmail ? contactInfoEmail : ' '}
                                                {this.state.contactNumber ? contactInfoNumber : ' '}
                                            </Card>
                                        </Segment>
                                    </Segment.Group>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={10}>
                                <Segment>
                                    Your Pet Profile
                                    <Segment.Group horizontal>
                                        <Segment>
                                            <Card className={'sparkles-name'}>
                                                <p>Name: {this.state.petName}</p>
                                                <p>Bio: {this.state.petBio}</p>
                                                <Segment className={"size-contain"}>

                                                    <Card
                                                        className={"sparkles-style"}
                                                        image={this.state.image}
                                                    />
                                                </Segment>
                                            </Card>
                                        </Segment>

                                    </Segment.Group>
                                </Segment>
                            </Grid.Column>

                        </Grid.Row>
                        <Grid.Row>

                            <Grid.Column width={6}>
                                <Segment>
                                    <Segment>
                                    <a href={"#request2"}> Create Post </a>
                                    <Icon name='envelope outline' size='large'/>
                                    </Segment>
                                <Segment>
                                     <a href={"#request3"}>Pending Post </a>
                                    <Icon name='folder open outline' size='large'/>
                                    <j className="amir-class">{this.state.pending ? this.state.postInfo.length : ''}
                                    <Icon className="amir-class" name={this.state.pending ? 'bell' : '' }  size='large'/></j>


                                </Segment>
                                <Segment>
                                    <a href={"#history4"}>Bookings </a>
                                    <Icon name='clock outline' size='large'/><p className="amir-class">{this.state.booking ? this.state.bookinfo.length : ''}<Icon className="amir-class" name={this.state.pending ? 'bell' : '' }  size='large'/></p>

                                </Segment>
                                <Segment>
                                    <a href={`/changePass?user=${this.state.user}&type=Client`}>Change Password </a>
                                    <Icon name='edit outline' size='large'/>
                                </Segment>

                                </Segment>
                            </Grid.Column>



                            <Grid.Column width={10}>


                                <Segment>
                                    <PanelBar expandMod={expandMode}>

                                        <PanelBarItem id={"request2"}  title={"Create Post"} expanded={false}>
                                            <PanelBarItem title={"Start A Booking"}>
                                                <Segment>
                                                <div className={"row example-wrapper"}>
                                                    <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                                                        <div className="card">
                                                            <div className="card-block">
                                                                <form className="k-form" onChange={onChange}  onSubmit={this.submitPost} width={"100%"}>
                                                                    <fieldset>
                                                                        <legend>Lets Get that Post Request In! </legend>
                                                                        <label className="k-form-field">
                                                                            <span>Start Form</span>
                                                                            <spann>Pet Name</spann>
                                                                            <input
                                                                                type="text"
                                                                                id="defaultFormCardNameEx"
                                                                                className="form-control"
                                                                                data-parse={"uppercase"}
                                                                                name="petName"
                                                                                value={this.state.petName}
                                                                                
                                                                                onChange={event => this.onChange(event)}

                                                                            />
                                                                            
                                    
                                                                            <div className="k-form-field">
                                                                            Pet Type: <br></br>
                                                                            <select name="type">
                                                                            <option>Choose a Option</option>
                                                                             <option>cat</option>
                                                                             <option>dog</option>
                                                                             </select>
                                                                            </div>


                                                                        </label>
                                                                        <label className="k-form-field" name="start">
                                                                            <span>Date of Pick Up</span>

                                                                            <DateTimePicker name="start" onChange={onChange} focusedDate={new Date(2019, 12, 12)}
                                                                            width={"100%"}
                                                                            required={true}
                                                                            />

                                                                        </label>
                                                                        <label className="k-form-field" name="end">
                                                                            <span>Date of Drop off</span>

                                                                            <DateTimePicker name="end" onChange={onChange}focusedDate={new Date(2019, 12, 12)}
                                                                                            width={"100%"}
                                                                                            required={true}
                                                                            />

                                                                        </label>

                                                                        <label className="k-form-field">
                                                                            Location: <br></br>
                                                                        <select name="location" >
                                                                            <option>Choose a Option</option>
                                                                             <option>San Francisco</option>
                                                                             <option>More locations to come ...</option>
                                                                             </select>
                                                                        </label>
                                                                    </fieldset>
                                                                    <button type="submit" >Post</button>

                                                                </form>
                                                               
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {this.state.success && (
                                                        <div
                                                            className="alert alert-success"
                                                            style={{ position: 'absolute' }}
                                                        >
                                                            Form submitted!
                                                        </div>)}

                                                </div>

                                                </Segment>
                                            </PanelBarItem>
                                        </PanelBarItem>

                                    </PanelBar>
                                </Segment>


                                <Segment>
                                    <PanelBar expandMod={expandMode}>

                                        <PanelBarItem id={"request3"} title={"Pending Post"} expanded={false}>

                                            <PanelBarItem title={"Pending Booking"}>
                                                
                                                
                                                    <p>{this.state.pending ? pendingPost : 'No Pending Post'}</p>    
                                            </PanelBarItem>
                                            <PanelBarItem title={"Current Booking"}>
                                                <p>{this.state.workerName ? nameWorker : ' '}</p>
                                                <p>{this.state.bookingLocation ? bookLocations : ' '}</p>

                                        </PanelBarItem>
                                        </PanelBarItem>

                                    </PanelBar>
                                </Segment>

                                <Segment>
                                    <PanelBar expandMod={expandMode}>

                                        <PanelBarItem id={"history4"} title={"Bookings"} expanded={false}>
                                            <PanelBarItem title={"All Bookings"}>
                                                All Bookings
                                                <p>{this.state.booking ? bookings : 'No Booking'}</p>

                                                                                       </PanelBarItem>
                                        </PanelBarItem>

                                    </PanelBar>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>



                       
                    </Grid>

                </Container>


            </div>
        );
    }
}
export default clientprof;