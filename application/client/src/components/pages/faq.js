import React, { Component } from 'react'


import { Container } from "react-bootstrap";
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBMedia, MDBRow } from "mdbreact";
import boarding from '../images/boarding.png';
import sitting from '../images/sitting.png';
import daycare from '../images/daycare.png';
import { Divider, Header, Image, Segment, Grid } from 'semantic-ui-react';
import Message from "semantic-ui-react/dist/commonjs/collections/Message";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";


class Bio extends Component {
    render() {
        return (
            <div>

                <div className={"header-text"}>
                    <Container fluid >
                        <Header as='h1' textAlign={'center'} >How It Works! </Header>
                    </Container>
                </div>

                <Container style={{ padding: '5em 5m' }}>
                    <Grid cell centered>
                        <Grid.Row columns={2}>
                            <Grid.Column floated='left' width={8}>
                                <Segment>
                                    <Header as='h2' textAlign='center' icon>
                                        <Icon name={'paw'} className={'icon-color'} />

                                        I am a Client
                                    </Header>
                                    {/*  Step 1  */}
                                    <MDBMedia>
                                        
                                        <MDBMedia body>
                                            <MDBMedia heading>
                                                <Message
                                                    icon={'signup'}
                                                    header='First: Create a Client account'
                                                    content='Create an account in our website and provide adresse and other informations'
                                                />
                                            </MDBMedia>
                                        </MDBMedia>
                                    </MDBMedia>

                                    {/*  Step 2  */}
                                    <MDBMedia>
                                       
                                        <MDBMedia body>
                                            <MDBMedia heading>
                                                <Message
                                                    icon={'paw'}
                                                    header='Second: Create a Profile for your Pet '
                                                    content='Create a Profile for each of your pets and answer some inquires that will help our sitters take care of them'
                                                />
                                            </MDBMedia>
                                        </MDBMedia>
                                    </MDBMedia>
                                    {/*  Step 3  */}
                                    <MDBMedia>
                                        <MDBMedia body>
                                            <MDBMedia heading>
                                                <Message
                                                    icon={'hand pointer outline'}
                                                    header='Third: Create a Sitting request '
                                                    content='Create a booking/sitting request with the date you want your pet to be sitted'
                                                />
                                            </MDBMedia>
                                        </MDBMedia>
                                    </MDBMedia>

                                    {/*  Step 4  */}
                                    <MDBMedia>
                                        <MDBMedia body>
                                            <MDBMedia heading>
                                                <Message
                                                    icon={'address book outline'}
                                                    header='Fourth: Select a sitter from the booking requests'
                                                    content='Review and Select a sitter from the list of sitters that booked your posts'
                                                />
                                            </MDBMedia>
                                        </MDBMedia>
                                    </MDBMedia>
                                    {/*  Step 5  */}
                                    <MDBMedia>
                                        <MDBMedia body>
                                            <MDBMedia heading>
                                                <Message
                                                    icon={'handshake'}
                                                    header='Fifth: meet your sitter the D-Day'
                                                    content='meet your sitter at a specific location and land him your pet'
                                                />
                                            </MDBMedia>
                                        </MDBMedia>
                                    </MDBMedia>
                                    <MDBBtn rounded floating className={"button-color"} href={"clientApp"}>
                                            <MDBIcon icon="cat" /> SignUP
                                        </MDBBtn>  

                                </Segment>
                            </Grid.Column>


                            <Grid.Column floated='right' width={8}>
                                <Segment>

                                    <Header as='h2' textAlign='center' icon>
                                        <Icon name={'blind'} className={'icon-color'} />
                                        I am a Sitter
                           </Header>
                            {/*  Step 1  */}
                            <MDBMedia>
                                        
                                        <MDBMedia body>
                                            <MDBMedia heading>
                                                <Message
                                                    icon={'signup'}
                                                    header='First: Start by creating a Sitter account'
                                                    content='Create a Sitter account in our website and provide adresse and other information.'
                                                />
                                            </MDBMedia>
                                        </MDBMedia>
                                    </MDBMedia>

                                    {/*  Step 2  */}
                                    <MDBMedia>
                                       
                                        <MDBMedia body>
                                            <MDBMedia heading>
                                                <Message
                                                    icon={'address card outline'}
                                                    header='Second: Provide a Pet Sitter Credentials'
                                                    content='Our sitters offer a secure boarding services making sure your pet receives the proper treatment'
                                                />
                                            </MDBMedia>
                                        </MDBMedia>
                                    </MDBMedia>
                                    {/*  Step 3  */}
                                    <MDBMedia>
                                        <MDBMedia body>
                                            <MDBMedia heading>
                                                <Message
                                                    icon={'book'}
                                                    header='Third: Book a client post from the post feed'
                                                    content='Access your post-feed and book a client post that suits your work schedule '
                                                />
                                            </MDBMedia>
                                        </MDBMedia>
                                    </MDBMedia>

                                    {/*  Step 4  */}
                                    <MDBMedia>
                                        <MDBMedia body>
                                            <MDBMedia heading>
                                                <Message
                                                    icon={'columns'}
                                                    header='Fourth: Confirm the booking'
                                                    content='Access notifications to have to confirm that the clients that booked you and confirm the booking'
                                                />
                                            </MDBMedia>
                                        </MDBMedia>
                                    </MDBMedia>
                                    {/*  Step 5  */}
                                    <MDBMedia>
                                        <MDBMedia body>
                                            <MDBMedia heading>
                                                <Message
                                                    icon={'handshake'}
                                                    header='Fifth: meet the client the D-Day'
                                                    content='Our sitters offer a secure boarding services to make you happy'
                                                />
                                            </MDBMedia>
                                        </MDBMedia>
                                    </MDBMedia>  
                                    <MDBBtn rounded floating className={"button-color"} href={"sitterApplication"} >

                                            <MDBIcon icon="heart"  /> Apply Now!
                                        </MDBBtn>
                                </Segment>
                            </Grid.Column>




                        </Grid.Row>



                    </Grid>
                </Container>


            </div >

        )
    }
}
export default Bio;