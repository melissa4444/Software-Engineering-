import React, {Component} from "react";

import '../signupClient/clientaap.css';

import julio from '../images/julio.png';
import sparkles from '../images/sparkles1.png';
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
import List from "semantic-ui-react/dist/commonjs/elements/List";


class publicClientPro extends Component{

    userState = {

    }

    petState = {

    }

    render(){



        return(

            <div>
                <Container style={{ padding: '6em 0em' }}>
                    <Header as='h2'>Public profile</Header>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>

                                <Segment>
                                    <Divider horizontal>
                                        <Header as='h4'>
                                            Client
                                        </Header>
                                    </Divider>
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
                                                    Julio
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
                                                    <Icon name='bell outline' size='large'/>
                                                    Request
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
                                            Pets
                                        </Header>
                                    </Divider>
                                    <Segment.Group horizontal className={"size-contain"}>
                                            <Card
                                                        centered
                                                        className={"sparkles-style"}
                                                        image={sparkles}

                                            />

                                    </Segment.Group>

                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Segment>
                                    <Segment>
                                        <Divider horizontal>
                                            <Header as='h4'>
                                                <Icon name='paw' />
                                                Needed Services
                                            </Header>
                                        </Divider>

                                        <p>
                                           Sparkles is an amazing cat that needs lots of attention and has a special diet
                                        </p>

                                        <Divider horizontal>
                                            <Header as='h4'>

                                                Specifications
                                            </Header>
                                        </Divider>

                                        <Table definition>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell width={2}>Size</Table.Cell>
                                                    <Table.Cell> 3 ft long</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Weight</Table.Cell>
                                                    <Table.Cell> 8 pounds</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Color</Table.Cell>
                                                    <Table.Cell>Grey and white</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Diet</Table.Cell>
                                                    <Table.Cell>Every two hours</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Segment>
                                    <Segment>
                                        <Divider horizontal>
                                            <Header as='h4'>

                                                Behavior <Icon name='smile outline' size='large'/>
                                            </Header>
                                        </Divider>
                                        <p>
                                            Well behaved loves to cuddle
                                        </p>

                                    </Segment>
                                    <Segment>
                                        <Divider horizontal>
                                            <Header as='h4'>

                                                Medical <Icon name='plus square outline' size='large'/>

                                            </Header>
                                        </Divider>
                                        <p>
                                            medication every two hours
                                        </p>

                                    </Segment>

                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Segment>

                                    {/*here is the expantion for the the drop downs */}

                                    <Divider horizontal>
                                        <Header as='h4'>
                                            Pet Bio
                                        </Header>
                                    </Divider>

                                </Segment>

                                <Segment>

                                    <Divider horizontal>
                                        <Header as='h4'>
                                            Pet Q&A
                                        </Header>
                                    </Divider>

                                </Segment>


                            </Grid.Column>

                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Segment></Segment>
                            </Grid.Column>
                        </Grid.Row>


                    </Grid>

                </Container>


            </div>
        );
    }
}
export default publicClientPro;