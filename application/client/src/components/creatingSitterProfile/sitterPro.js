import React, {Component} from "react";

import '../signupClient/clientaap.css';
import sparkles from '../images/sparkles1.png';
import {
    MDBBtn,
    MDBIcon
}from "mdbreact";
import joe from '../images/joe.png';
import '../creatingClient/clientprofcss.css';
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
import axios from "axios";
import queryString from 'query-string'



class sitterPro extends Component{
   

    constructor(props){
        super(props);
        this.state={
           
           
            name: 'Ivan',
            user: '',
            infoWorker: '',
            email: '',
            addy: '',
            certif: '',
            phone: '',
            jobs: [],
            acceptedJobs: [],
            acceptedActive: 0,
            jobsActive: 0



        };
       
    }
    //-------------------------------------------------------------
      
    componentDidMount() {
        let values = queryString.parse(this.props.location.search) 
        values = values.user
        console.log(values)
        this.setState({
            user: values
        })
        axios.post('/api/db/workerInfo', {user: values}).then((result) => {
            console.log(result.data[0].firstName)
            this.setState({
                infoWorker: result.data[0].firstName + '' + result.data[0].lastName,
                email: result.data[0].email,
                addy: result.data[0].address,
                certif: result.data[0].certification,
                phone: result.data[0].phone
            })
            axios.post('/api/db/acceptedJobs',{worker: this.state.user}).then((result) => {
                this.setState({
                    acceptedJobs: result.data,
                    acceptedActive: 1
                })
                console.log(this.state.acceptedJobs)
            })  
            
        })
        axios.post('/api/db/jobs',{}).then((result) => {
            this.setState({
                jobs: result.data,
                jobsActive: 1
            })
        })
        

        
    }   
      
    acceptJob = async (event)=>{
        const id = event.target.value
        console.log(this.state.user)
        const call = await axios.post('/api/db/booking',{id: id, user: this.state.user})
        console.log(call)
        window.location.reload(false)

        

    }



    render(){
     
        
        const jobs = this.state.jobs.map((item) => <Card > <p className="pendingPost" align="left">
        Pet Name: {item.name.charAt(0).toUpperCase() + item.name.slice(1)} 
        <br/>Pet Type: {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
        <br/>Owner: {item.clientUser.charAt(0).toUpperCase() + item.clientUser.slice(1)}
        <br></br>Booking Date:
        <br></br> {new Date(Date.parse(item.datePosted)).toDateString()} 
        <br></br> To <br/>{new Date(Date.parse(item.dateRequested)).toDateString()}
        <br></br> Booking Time: {new Date(item.datePosted).toISOString().slice(11, -5)}
        <br></br>Location:  {item.location}

        <br/>
        <br></br><Button onClick={this.acceptJob} value={item.id} className="btamir" primary={true}><Icon name='clipboard list' size='large'/>Accept Job</Button>
        <br></br><br></br>
        </p></Card>)



        const accepted = this.state.acceptedJobs.map((item) => <Card > <p className="pendingPost" align="left">
        <p className="spacee">Pet Name: {item.name.charAt(0).toUpperCase() + item.name.slice(1)}                 Owner: {item.clientUser.charAt(0).toUpperCase() + item.clientUser.slice(1)} </p>    
        <br/>Pet Type: {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
        <br/>Pick-Up Time:    <Icon name='clock' size='large'/> {new Date(item.datePosted).toISOString().slice(11, -5)}
        <br/><br/>Date:<br/>    <Icon name='calendar' size='large' />{new Date(Date.parse(item.datePosted)).toDateString()} <br/>
        To <br/><Icon name='calendar' size='large' />{new Date(Date.parse(item.dateRequested)).toDateString()}
        <br></br> 
        <br></br>Location:  {item.location}
        <br/>Contact Info: <Icon name="comment" size="small" /> {item.email}
        <br/>Address: {item.useraddy}
        </p></Card>)





        return(

            <div>

                <Container style={{ padding: '6em 0em' }}>

                    <Header as='h2'>Welcome to your Sitter Profile</Header>



                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Segment>
                                    <Segment.Group horizontal>
                                        <Segment>
                                            <Card
                                                image={joe}
                                            />
                                        </Segment>
                                        <Segment>
                                            <br/>
                                            <Card>
                                                <Label as='a' image>
                                                    <Icon name='user' size='large'/>
                                                    {this.state.infoWorker}
                                                 

                                                </Label>
                                            </Card>
                                            <br/>
                                            <Card>
                                                <Label as='a' image>
                                                    <Icon name='phone' size='large'/>
                                                    Contact
                                                </Label>
                                                Phone:  {this.state.phone}
                                                <br/>
                                                
                                            </Card>
                                        </Segment>
                                    </Segment.Group>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={10}>
                                <Segment>

                                    <Divider horizontal>
                                        <Header as='h4'>
                                             Your Profile
                                        </Header>
                                    </Divider>
                                    <Segment.Group horizontal>

                                        <Segment>
                                         
                                            <Card>
                                                <Label as='a' image>
                                                    <Icon name='phone' size='large'/>
                                                    Private Info
                                                </Label>
                                                Email:  {this.state.email}
                                                <br/>
                                                Address: {this.state.addy}
                                            </Card>
                                            </Segment>
                                            <Segment>
                                            <Card>
                                            <Label as='a' image>
                                                <Icon name='phone' size='large'/>
                                                Public Info
                                            </Label>
                                            <p>Certification Number: {this.state.certif}</p>
                                            <p>Phone Number: {this.state.phone} </p>
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
                                        <a href={"#inbox1"}>Avaliable Jobs </a>
                                        <Icon name='envelope outline' size='large'/>
                                        <j className="amir-class">{this.state.jobsActive ? this.state.jobs.length : ''}
                                        <Icon className="amir-class" name={this.state.jobsActive ? 'bell' : '' }  size='large'/></j>
                                    </Segment>
                                    <Segment>
                                        <a href={"#request2"}>Accepted Jobs </a>
                                        <Icon name='folder open outline' size='large'/>
                                        <j className="amir-class">{this.state.acceptedActive ? this.state.acceptedJobs.length : ''}
                                        <Icon className="amir-class" name={this.state.acceptedActive ? 'bell' : '' }  size='large'/></j>


                                    </Segment>
                                    <Segment>
                                        <a href={"#booking3"}>Change Password </a>
                                        <Icon name='calendar alternate outline' size='large'/>
                                    </Segment> 
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Segment>

                                    {/*here is the expantion for the the drop downs */}

                                    <PanelBar>

                                        <PanelBarItem id={"inbox1"} title={"Avaliable Jobs"} expanded={false}>
                                            
                                                <Segment>

                                                <Card>{this.state.jobsActive ? jobs : 'No Avaliable Jobs'}</Card>

                                                </Segment>
                                            
                                            



                                        </PanelBarItem>



                                    </PanelBar>

                                </Segment>

                                <Segment>
                                    <PanelBar>

                                        <PanelBarItem id={"#request2"}  title={"Accepted Jobs"} expanded={false}>
                                                <Segment>
                                                    
                                                <Card>{this.state.acceptedActive ? accepted : 'No Active Jobs'}</Card>

                                                </Segment>
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
export default sitterPro;