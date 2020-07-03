import React, {Component} from "react";

import '../signupClient/clientaap.css';
import { Rating } from 'semantic-ui-react';

import joe from '../images/joe.png';
import sparkles from '../images/sparkles1.png';
import '../creatingClient/clientprofcss.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Divider, Grid, Header, Segment, Table, Image } from 'semantic-ui-react'
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
import List from "semantic-ui-react/dist/commonjs/elements/List";
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

class sitterPublicPro extends Component{

    servicesState = {
        services: ' ',
        rate: ' ',
        hostingPref: ' ',
        availability: ' '

    }

    sitterState = {
        name: ' ',
        phone: ' '
    }


    render(){



        return(

            <div>
                <Container style={{ padding: '6em 0em' }}>
                    <Header as='h2'>Sitter profile</Header>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Segment>
                                    <Divider horizontal>
                                        <Header as='h4'>
                                           Sitter
                                        </Header>
                                    </Divider>
                                    <Segment.Group horizontal>
                                        <Segment>
                                            <Card
                                                image={joe}

                                            />

                                        </Segment>
                                        <Segment>
                                            <Card>
                                                <Label as='a' image>
                                                    <Icon name='user' size='large'/>
                                                    Joe
                                                </Label>
                                            </Card>
                                            <Card>
                                                <Label as='a' image>
                                                    <Icon name='phone' size='large'/>
                                                    Contact
                                                </Label>
                                            </Card>
                                            <Card>
                                                <Label as='a' image>
                                                    <Icon name='location arrow' size='large'/>
                                                    Location
                                                </Label>
                                            </Card>
                                            <Card>
                                            <Label as='a' image>
                                                BOOK!
                                            </Label>
                                            </Card>


                                        </Segment>
                                    </Segment.Group>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={10} >
                                <Segment >

                                    <Divider horizontal>
                                        <Header as='h4'>
                                            Bio
                                        </Header>
                                    </Divider>


                                    <h3>Response Rate 100%</h3>
                                    <h4> Overal Review State:
                                        <Rating icon='star' defaultRating={5} maxRating={5} />
                                    </h4>


                                </Segment>
                            </Grid.Column>


                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Segment>
                                    <Divider horizontal>
                                        <Header as='h4'>
                                            Services
                                        </Header>
                                    </Divider>

                                    <List>
                                        <List.Item>

                                            <List.Content ><Icon name='moon outline' />Boarding</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content ><Icon name='home' />House Sitting</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content ><Icon name='bath' />Boarding</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content ><Icon name='photo' />Photo Updates</List.Content>
                                        </List.Item>
                                    </List>

                                </Segment>


                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Segment>
                                    <Divider horizontal>
                                        <Header as='h4'>
                                            Hosting Preferences
                                        </Header>
                                    </Divider>
                                    <Table striped>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Pets</Table.HeaderCell>
                                                <Table.HeaderCell>Behavior</Table.HeaderCell>
                                                <Table.HeaderCell>Grooming</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>

                                        <Table.Body>
                                            <Table.Row verticalAlign='top'>
                                                <Table.Cell>Cats</Table.Cell>
                                                <Table.Cell>All Behaviors</Table.Cell>
                                                <Table.Cell verticalAlign='top'>
                                                    Nail cliping only

                                                </Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Dogs</Table.Cell>
                                                <Table.Cell verticalAlign='bottom'>Active</Table.Cell>
                                                <Table.Cell>
                                                    Baths

                                                </Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>


                                </Segment>


                            </Grid.Column>
                        </Grid.Row>


                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Segment>
                                    <Divider horizontal>
                                        <Header as='h4'>
                                            Availablity
                                        </Header>
                                    </Divider>
                                    <Segment.Group horizontal>
                                        <Segment>
                                            <List>
                                                <List.Item>

                                                    <List.Content >Monday: available</List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Content >Tuesday: available </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Content >Wednsday: available </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Content >Thursday: available</List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Content >Friday: available</List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Content >Saturday: available</List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Content >Sunday: available</List.Content>
                                                </List.Item>
                                            </List>


                                        </Segment>
                                    </Segment.Group>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={8} >

                                <Segment>

                                    <Divider horizontal>
                                        <Header as='h4'>
                                            Rates
                                        </Header>
                                    </Divider>

                                    <Segment.Group>
                                    <List>
                                        <List.Item>

                                            <List.Content >Monday - Friday </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content >Daily Rate: $20 </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content >Weekends and Holidays </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content >Daily Rate: $50</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content >Added Over Night Stay</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content > + $10</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content >Pick up and Drop Off Rate</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content > + $5 </List.Content>
                                        </List.Item>
                                    </List>
                                    </Segment.Group>



                                </Segment>
                            </Grid.Column>


                        </Grid.Row>



                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Segment>
                                    <Divider horizontal>
                                        <Header as='h4'>
                                            Photos
                                        </Header>
                                    </Divider>
                                    <Segment.Group horizontal>
                                        <Segment>



                                            <MDBMedia list className="mt-3">
                                                <MDBMedia tag="li">
                                                    <MDBMedia left href="#">
                                                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg"  />
                                                    </MDBMedia>
                                                    <MDBMedia body>
                                                        <MDBMedia heading>
                                                            Cat and dog
                                                        </MDBMedia>
                                                    </MDBMedia>
                                                </MDBMedia>
                                                <MDBMedia tag="li">
                                                    <MDBMedia left href="#">
                                                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg"  />
                                                    </MDBMedia>
                                                    <MDBMedia body>
                                                        <MDBMedia heading>
                                                            Dog Sitting
                                                        </MDBMedia>


                                                    </MDBMedia>
                                                </MDBMedia>
                                                <MDBMedia tag="li">
                                                    <MDBMedia left href="#">
                                                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg"/>
                                                    </MDBMedia>
                                                    <MDBMedia body>
                                                        <MDBMedia heading>
                                                            Cat Sitter
                                                        </MDBMedia>
                                                    </MDBMedia>
                                                </MDBMedia>
                                            </MDBMedia>


                                        </Segment>
                                    </Segment.Group>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={8}>
                                <Segment>
                                    <Divider horizontal>
                                        <Header as='h4'>
                                            Reviews
                                        </Header>
                                    </Divider>
                                    <Segment.Group horizontal>
                                        <Segment>

                                            <MDBMedia list className="mt-3">
                                                <MDBMedia tag="li">
                                                    <MDBMedia left href="#">
                                                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min1.jpg" alt="Generic placeholder image" />
                                                    </MDBMedia>
                                                    <MDBMedia body>
                                                        <MDBMedia heading>
                                                            Anna Smith
                                                        </MDBMedia>
                                                        <p> "best sitter"</p>
                                                        <Rating icon='star' defaultRating={5} maxRating={5} />

                                                    </MDBMedia>
                                                </MDBMedia>
                                                <MDBMedia tag="li">
                                                    <MDBMedia left href="#">
                                                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min2.jpg" alt="Generic placeholder image" />
                                                    </MDBMedia>
                                                    <MDBMedia body>
                                                        <MDBMedia heading>
                                                            Anna Smith
                                                        </MDBMedia>
                                                        <p> "best sitter"</p>
                                                        <Rating icon='star' defaultRating={4.5} maxRating={5} />

                                                    </MDBMedia>
                                                </MDBMedia>
                                                <MDBMedia tag="li">
                                                    <MDBMedia left href="#">
                                                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/avatar-min3.jpg" alt="Generic placeholder image" />
                                                    </MDBMedia>
                                                    <MDBMedia body>
                                                        <MDBMedia heading>
                                                            Natalie Doe
                                                        </MDBMedia>
                                                        <p> "best sitter"</p>
                                                        <Rating icon='star' defaultRating={4} maxRating={5} />
                                                    </MDBMedia>
                                                </MDBMedia>
                                            </MDBMedia>

                                        </Segment>
                                    </Segment.Group>
                                </Segment>
                            </Grid.Column>


                        </Grid.Row>

                    </Grid>

                </Container>


            </div>
        );
    }
}
export default sitterPublicPro;