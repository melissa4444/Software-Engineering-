import React, {Component} from "react";

import '../signupClient/clientaap.css';
import './postcss.css'
import { List } from 'semantic-ui-react'
import girl from '../images/girl.png';
import girltwo from '../images/girltwo.png';
import man from '../images/man.png';
import {
    MDBBtn,
    MDBIcon
}from "mdbreact";
import julio from '../images/julio.png';
import '../creatingClient/clientprofcss.css';

import {Container, Divider, Grid, Header, Rating, Segment, Table} from 'semantic-ui-react'
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import '@progress/kendo-react-intl'
import '@progress/kendo-react-dropdowns'
import {provideIntlService} from "@progress/kendo-react-intl/dist/es/intlUtils";


class postpage extends Component{
    constructor(props){
        super(props);
        this.state={
            expandMode: 'multiple',
            success: false

        };
        setTimeout(()=>{
            const date='2019-11-18';
            this.setState({value: provideIntlService(this).parseDate(date)});
        },1000);
    }



    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({success:true});
        setTimeout(()=>{this.setState({success:false});},3000);
    }

    onChange=(event)=>{
        this.setState({value:event.value});
    }

    userState = {
        dateJoined: ' ',
        name: ' '
    }

    render(){
        const {expandMode}=this.state;


        return(

            <div>

                <Container style={{ padding: '7em 0em' }}>
                    <Header as='h2'>post page</Header>
                    <MDBBtn color="yellow" href={"publicClientPro"}>
                        post page
                    </MDBBtn>
                    <Grid divided={"vertically"}>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Segment >
                                <Grid celled centered>
                                    <Grid.Row>
                                        <Grid.Column width={3}>
                                            <Card>

                                                <Card
                                                    className={"sparkles-style"}
                                                    image={julio}
                                                />

                                                <Card.Content>

                                                    <Card.Meta>Joined in <p>{this.userState.dateJoined}</p></Card.Meta>
                                                    <Card.Description icon>
                                                        Julio Cruz
                                                    </Card.Description>
                                                </Card.Content>

                                            </Card>

                                        </Grid.Column>
                                        <Grid.Column width={13}>
                                            <Segment as={'h1'} textAlign={'center'} icon>
                                                <MDBBtn href={"publicClientPro"}>Our Profile</MDBBtn>
                                            </Segment>
                                            <Segment>
                                                <List>
                                                    <List.Item>
                                                        <List.Icon name='paw' />
                                                        <List.Content>Looking for a Cat Sitter</List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='marker' />
                                                        <List.Content>San Francisco, CA</List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='mail' />
                                                        <List.Content>
                                                            <a >REQUEST</a>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='money' />
                                                        <List.Content>
                                                            <a> Rates: $15/hr</a>
                                                        </List.Content>
                                                    </List.Item>
                                                </List>

                                            </Segment>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                            </Grid.Column>
                        </Grid.Row>




                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Segment >
                                <Grid celled centered>
                                    <Grid.Row>
                                        <Grid.Column width={3}>
                                            <Card>

                                                <Card
                                                    className={"sparkles-style"}
                                                    image={girl}
                                                />

                                                <Card.Content>

                                                    <Card.Meta>Joined in 2019</Card.Meta>
                                                    <Card.Description icon>
                                                        Sam Smith
                                                    </Card.Description>
                                                </Card.Content>

                                            </Card>

                                        </Grid.Column>
                                        <Grid.Column width={13}>
                                            <Segment as={'h1'} textAlign={'center'} icon>
                                                <MDBBtn href={"publicClientPro"}>Our Profile</MDBBtn>
                                            </Segment>
                                            <Segment>
                                                <List>
                                                    <List.Item>
                                                        <List.Icon name='paw' />
                                                        <List.Content>Looking for a Dog Sitter</List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='marker' />
                                                        <List.Content>San Francisco, CA</List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='mail' />
                                                        <List.Content>
                                                            <a color={"blue"}>REQUEST</a>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='money' />
                                                        <List.Content>
                                                            <a> Rates: $15/hr</a>
                                                        </List.Content>
                                                    </List.Item>
                                                </List>

                                            </Segment>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Segment >
                                <Grid celled centered>
                                    <Grid.Row>
                                        <Grid.Column width={3}>
                                            <Card>

                                                <Card
                                                    className={"sparkles-style"}
                                                    image={girltwo}
                                                />

                                                <Card.Content>

                                                    <Card.Meta>Joined in 2019</Card.Meta>
                                                    <Card.Description icon>
                                                        Vannessa
                                                    </Card.Description>
                                                </Card.Content>

                                            </Card>

                                        </Grid.Column>
                                        <Grid.Column width={13}>
                                            <Segment as={'h1'} textAlign={'center'} icon>
                                                <MDBBtn href={"publicClientPro"}>Our Profile</MDBBtn>
                                            </Segment>
                                            <Segment>
                                                <List>
                                                    <List.Item>
                                                        <List.Icon name='paw' />
                                                        <List.Content>Looking for a Dog Sitter</List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='marker' />
                                                        <List.Content>San Francisco, CA</List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='mail' />
                                                        <List.Content>
                                                            <a >REQUEST</a>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='money' />
                                                        <List.Content>
                                                            <a> Rates: $15/hr</a>
                                                        </List.Content>
                                                    </List.Item>
                                                </List>

                                            </Segment>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Segment>
                                <Grid celled centered>
                                    <Grid.Row>
                                        <Grid.Column width={3}>
                                            <Card>

                                                <Card
                                                    className={"sparkles-style"}
                                                    image={man}
                                                />

                                                <Card.Content>

                                                    <Card.Meta>Joined in 2019</Card.Meta>
                                                    <Card.Description icon>
                                                        John Brown
                                                    </Card.Description>
                                                </Card.Content>

                                            </Card>

                                        </Grid.Column>
                                        <Grid.Column width={13}>
                                            <Segment as={'h1'} textAlign={'center'} icon>
                                                <MDBBtn href={"publicClientPro"}>Our Profile</MDBBtn>
                                            </Segment>
                                            <Segment>
                                                <List>
                                                    <List.Item>
                                                        <List.Icon name='paw' />
                                                        <List.Content>Looking for a Cat Sitter</List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='marker' />
                                                        <List.Content>San Francisco, CA</List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='mail' />
                                                        <List.Content>
                                                            <a >REQUEST</a>
                                                        </List.Content>
                                                    </List.Item>
                                                    <List.Item>
                                                        <List.Icon name='money' />
                                                        <List.Content>
                                                            <a> Rates: $15/hr</a>
                                                        </List.Content>
                                                    </List.Item>
                                                </List>

                                            </Segment>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                            </Grid.Column>
                        </Grid.Row>


                    </Grid>









                </Container>


            </div>
        );
    }
}
export default postpage;