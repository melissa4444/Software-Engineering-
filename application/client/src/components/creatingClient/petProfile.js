import React, {Component} from "react";

import '../signupClient/clientaap.css';
import sparkles from '../images/sparkles1.png';
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


class petProfile extends Component{



    petInfo ={
        name: ' ',
        weight: ' ',
        color: ' ',
        diet: ' ',
        size: ' '
    }

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


    render(){
        const {expandMode}=this.state;


        return(

            <div>

                <Container style={{ padding: '6em 0em' }}>
                    <Header as='h2'>pet user profile</Header>
                    <MDBBtn color="yellow" href={"publicClientPro"}>
                        public profile
                    </MDBBtn>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Segment>
                                    <Segment.Group horizontal>
                                        <Segment>
                                            <Card
                                                image={sparkles}
                                            />
                                        </Segment>
                                        <Segment>
                                            <Card>
                                                <Label as='a' image>
                                                    Sparkles
                                                </Label>
                                            </Card>

                                        </Segment>
                                    </Segment.Group>
                                </Segment>
                            </Grid.Column>

                            <Grid.Column width={10}>
                                <Segment>

                                    Pet Personality Test
                                    <Segment.Group horizontal>

                                        <Segment>
                                            <PanelBar expandMod={expandMode}>

                                                <PanelBarItem  title={"Q/A"} expanded={false}>
                                                    <PanelBarItem title={"Get Started"}>
                                                        <Segment>
                                                            <div className={"row example-wrapper"}>
                                                                <div className="col-xs-12 col-sm-6 offset-sm-3 example-col">
                                                                    <div className="card">
                                                                        <div className="card-block">
                                                                            <form className="k-form" onSubmit={this.handleSubmit} width={"100%"}>
                                                                                <fieldset>
                                                                                    <legend>Simple Questions </legend>
                                                                                    <label className="k-form-field">
                                                                                        <span>Start Form</span>


                                                                                        <div className="k-form-field">
                                                                                            <span>Special Needs</span>

                                                                                            <input type="radio" name="specialneeds"
                                                                                                   id="yes" className="k-radio"/>
                                                                                            <label className="k-radio-label"
                                                                                                   htmlFor="yes">yes</label>


                                                                                            <input type="radio" name="specialneeds"
                                                                                                   id="no" className="k-radio"
                                                                                                   checked="checked"/>
                                                                                            <label className="k-radio-label"
                                                                                                   htmlFor="no">no</label>


                                                                                        </div>

                                                                                        <label className="k-form-field">
                                                                                            <span>Daily Meals</span>
                                                                                            <NumericTextBox
                                                                                                name="number"
                                                                                                width={"100%"}
                                                                                                format="n0"
                                                                                                min={1}
                                                                                                required={true}
                                                                                            />
                                                                                        </label>

                                                                                    </label>
                                                                                    <div className="k-form-field">
                                                                                        <span>Afraid of Loud Noise</span>

                                                                                        <input type="radio" name="noise"
                                                                                               id="yes" className="k-radio"/>
                                                                                        <label className="k-radio-label"
                                                                                               htmlFor="yes">yes</label>


                                                                                        <input type="radio" name="noise"
                                                                                               id="no" className="k-radio"
                                                                                               checked="checked"/>
                                                                                        <label className="k-radio-label"
                                                                                               htmlFor="no">no</label>


                                                                                    </div>
                                                                                    <div className="k-form-field">
                                                                                        <span>Gets along with others</span>

                                                                                        <input type="radio" name="others"
                                                                                               id="yes" className="k-radio"/>
                                                                                        <label className="k-radio-label"
                                                                                               htmlFor="yes">yes</label>


                                                                                        <input type="radio" name="others"
                                                                                               id="no" className="k-radio"
                                                                                               checked="checked"/>
                                                                                        <label className="k-radio-label"
                                                                                               htmlFor="no">no</label>


                                                                                    </div>


                                                                                </fieldset>
                                                                                <Button type="submit" primary={true}>Post</Button>

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
                                            <Table definition>
                                                <Table.Body>
                                                    <Table.Row>
                                                        <Table.Cell> well behaved</Table.Cell>
                                                    </Table.Row>
                                                </Table.Body>
                                            </Table>



                                    </Segment>
                                    <Segment>
                                        <Divider horizontal>
                                            <Header as='h4'>

                                                Medical <Icon name='plus square outline' size='large'/>

                                            </Header>

                                        </Divider>

                                        <Table definition>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell> medication after third meal</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>

                                    </Segment>

                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Segment>

                                    {/*here is the expantion for the the drop downs */}

                                    <PanelBar expandMod={expandMode}>

                                        <PanelBarItem  title={"Pet Bio"} expanded={false}>
                                            <PanelBarItem title={"Bio" }>



                                            </PanelBarItem>
                                        </PanelBarItem>



                                    </PanelBar>

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
export default petProfile;