import React, {Component} from "react";

import '../signupClient/clientaap.css';
import girl from '../images/girl.png';
import './clientprofcss.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container, Divider, Grid, Header, Menu, Message, Segment, Table } from 'semantic-ui-react'
import Card from "semantic-ui-react/dist/commonjs/views/Card";

class userPage extends Component{

    render(){
        return(

            <div>
                <Container style={{ padding: '7em 0em' }}>
                    <Header as='h2'>Attached Content</Header>
                    <Grid columns={3}>
                        <Grid.Column>
                            <Segment.Group>

                                <Segment.Group>
                                    <Segment>
                                        <Card
                                            image={girl}
                                            header='name'
                                        />
                                    </Segment>
                                    <Segment>
                                        <p>Contact Info: </p>
                                    </Segment>
                                    <Segment>
                                        <p>Nested Bottom</p>
                                    </Segment>
                                </Segment.Group>
                                <Segment>
                                    <p>Middle</p>
                                </Segment>
                                <Segment.Group horizontal>
                                    <Segment>
                                        <p>Top</p>
                                    </Segment>
                                    <Segment>
                                        <p>Middle</p>
                                    </Segment>
                                    <Segment>
                                        <p>Bottom</p>
                                    </Segment>
                                </Segment.Group>
                                <Segment>
                                    <p>Bottom</p>
                                </Segment>
                            </Segment.Group>

                            <Segment.Group>
                                <Segment>
                                    <p>Top</p>
                                </Segment>
                                <Segment.Group>
                                    <Segment>
                                        <p>Nested Top</p>
                                    </Segment>
                                    <Segment>
                                        <p>Nested Middle</p>
                                    </Segment>
                                    <Segment>
                                        <p>Nested Bottom</p>
                                    </Segment>
                                </Segment.Group>
                                <Segment>
                                    <p>Middle</p>
                                </Segment>
                                <Segment.Group horizontal>
                                    <Segment>
                                        <p>Top</p>
                                    </Segment>
                                    <Segment>
                                        <p>Middle</p>
                                    </Segment>
                                    <Segment>
                                        <p>Bottom</p>
                                    </Segment>
                                </Segment.Group>
                                <Segment>
                                    <p>Bottom</p>
                                </Segment>
                            </Segment.Group>
                        </Grid.Column>

                        <Grid.Column>
                            <Table attached='top' basic verticalAlign='top'>
                                <Table.Header>
                                    <Table.HeaderCell>Header</Table.HeaderCell>
                                    <Table.HeaderCell>Header</Table.HeaderCell>
                                    <Table.HeaderCell>Header</Table.HeaderCell>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            <Table attached>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            <Table attached celled selectable>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            <Table attached='bottom' celled>
                                <Table.Header>
                                    <Table.HeaderCell>Header</Table.HeaderCell>
                                    <Table.HeaderCell>Header</Table.HeaderCell>
                                    <Table.HeaderCell>Header</Table.HeaderCell>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                        <Table.Cell>Cell</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>

                        <Grid.Column>
                            <Menu attached='top' compact widths={3}>
                                <Menu.Item as='a'>Item</Menu.Item>
                                <Menu.Item as='a'>Item</Menu.Item>
                                <Menu.Item as='a'>Item</Menu.Item>
                            </Menu>
                            <Menu attached compact widths={3}>
                                <Menu.Item as='a'>Item</Menu.Item>
                                <Menu.Item as='a'>Item</Menu.Item>
                                <Menu.Item as='a'>Item</Menu.Item>
                            </Menu>
                            <Menu attached compact widths={3}>
                                <Menu.Item as='a'>Item</Menu.Item>
                                <Menu.Item as='a'>Item</Menu.Item>
                                <Menu.Item as='a'>Item</Menu.Item>
                            </Menu>
                            <Menu attached='bottom' compact widths={3}>
                                <Menu.Item as='a'>Item</Menu.Item>
                                <Menu.Item as='a'>Item</Menu.Item>
                                <Menu.Item as='a'>Item</Menu.Item>
                            </Menu>

                            <Menu attached tabular widths={3}>
                                <Menu.Item active as='a'>
                                    Active Item
                                </Menu.Item>
                                <Menu.Item as='a'>Item</Menu.Item>
                                <Menu.Item as='a'>Item</Menu.Item>
                            </Menu>
                            <Segment attached>Segment</Segment>
                            <Menu attached compact widths={3}>
                                <Menu.Item active as='a'>
                                    Active Item
                                </Menu.Item>
                                <Menu.Item as='a'>Item</Menu.Item>
                                <Menu.Item as='a'>Item</Menu.Item>
                            </Menu>
                            <Segment attached='bottom'>Segment</Segment>
                        </Grid.Column>
                    </Grid>
                </Container>

                <Container style={{ paddingBottom: '5em' }} text>
                    <Header as='h2'>Header Groups</Header>

                    <Header as='h4' attached='top' block>
                        Top Block Header
                    </Header>
                    <Segment attached>Segment</Segment>

                    <Divider section />

                    <Segment attached>Segment</Segment>
                    <Header as='h4' attached='bottom' block>
                        Bottom Block Header
                    </Header>

                    <Divider section />

                    <Header as='h4' attached='top' block>
                        Top Block Header
                    </Header>
                    <Segment attached>Segment</Segment>
                    <Header as='h4' attached block>
                        Middle Block Header
                    </Header>
                    <Segment attached>Segment</Segment>
                    <Header as='h4' attached='bottom' block>
                        Bottom Block Header
                    </Header>

                    <Header as='h2'>Mixed Attached Content</Header>

                    <Segment attached='top'>Segment</Segment>
                    <Menu attached compact widths={3}>
                        <Menu.Item as='a'>Item</Menu.Item>
                        <Menu.Item as='a'>Item</Menu.Item>
                        <Menu.Item as='a'>Item</Menu.Item>
                    </Menu>
                    <Segment attached>1</Segment>
                    <Message attached content='Message' icon='help circle' info />
                    <Table attached='bottom'>
                        <Table.Header>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    <Divider section />

                    <Message attached='top' content='Message' icon='attention' warning />
                    <Table attached>
                        <Table.Header>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Menu attached='bottom' compact widths={3}>
                        <Menu.Item as='a'>Item</Menu.Item>
                        <Menu.Item as='a'>Item</Menu.Item>
                        <Menu.Item as='a'>Item</Menu.Item>
                    </Menu>

                    <Divider section />

                    <Menu attached='top' compact inverted widths={3}>
                        <Menu.Item as='a'>Item</Menu.Item>
                        <Menu.Item as='a'>Item</Menu.Item>
                        <Menu.Item as='a'>Item</Menu.Item>
                    </Menu>
                    <Table attached inverted>
                        <Table.Header>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                            <Table.HeaderCell>Header</Table.HeaderCell>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Segment attached='bottom' inverted>
                        Segment
                    </Segment>
                </Container>
            </div>
        );
    }
}
export default userPage;