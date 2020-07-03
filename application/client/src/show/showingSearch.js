import React, {Component} from 'react'
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import axios from "axios";
import sitterone from "../components/images/sitterone.png";
import sittertwo from "../components/images/sittertwo.png";
import sitterthree from "../components/images/sitterthree.png";
import sitterfour from "../components/images/sitterfour.png";
import { Divider, Header, Image, Segment, Grid } from 'semantic-ui-react';
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import { Rating } from 'semantic-ui-react';
import {Container} from "react-bootstrap";

class showingSearch extends Component{

    constructor(){
        super();
        this.state={
            form: {
                searchValue: '',
                firstName: '',
                lastName: '',
                email: ''
            }
        };
    }

    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit=(event)=>{
        event.preventDefault();
        //get our form data
        const {searchValue,firstName,lastName,email}=this.state;
        axios.post('/api/search',{searchValue})
            .then((result)=>{
                //access the results here
                console.log(result.data[0])
                this.setState({
                    firstName: result.data[0].firstName,
                    lastName: result.data[0].lastName,
                    email: result.data[0].email
                })
                console.log(this.state.firstName)

            })
    }



    render(){

        const{searchValue}=this.state;
        const first = <p>First Name: {this.state.firstName}</p>;
        const last = <p>Last Name: {this.state.lastName}</p>
        const email = <p>Email: {this.state.email}</p>;

        return(
            <div>
                <div className={"header-text"}>
                    <Container fluid >
                        <Header  as='h1' textAlign={'center'} >Search Sitters </Header>
                        <Icon name={'heart outline'}/>

                        <p>
                            Find the best sitters

                        </p>

                        <div >
                            <form onSubmit={this.onSubmit}>
                                <input
                                    type="text"
                                    id="defaultFormCardNameEx"
                                    className="form-control"
                                    data-parse={"uppercase"}
                                    name={"searchValue"}
                                    value={searchValue}
                                    onChange={event => this.onChange(event)}
                                />
                                <button type="submit" > search
                                </button>
                            </form>
                        </div>
                        <div>

                            {this.state.firstName ? first : ''}
                            {this.state.lastName ? last : ''}
                            {this.state.email ? email : ''}


                        </div>
                    </Container>
                </div>

                <Container>
                    <Grid>
                        <Grid.Row >
                            <Grid.Column>
                                <Segment>
                                    <Grid celled centered>
                                        <Grid.Row>
                                            <Grid.Column width={3}>
                                                <Card>
                                                    <Image src={sitterone} wrapped ui={false} />
                                                    <Card.Content>
                                                        <Card.Meta>Joined in 2019</Card.Meta>
                                                        <Card.Description icon>
                                                            Megan is a comedian living in Nashville
                                                            <Icon name={'map pin'}/>
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>
                                            </Grid.Column>
                                            <Grid.Column width={13}>
                                                <Segment as={'h1'} textAlign={'center'} icon>
                                                    Megan Smith
                                                    <Rating icon='star' defaultRating={4} maxRating={5} />
                                                </Segment>
                                                <Segment>
                                                    <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                                                </Segment>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                            <Grid.Column>
                                <Segment>
                                    <Grid celled>
                                        <Grid.Row>
                                            <Grid.Column width={3}>
                                                <Card>
                                                    <Image src={sittertwo} wrapped ui={false} />
                                                    <Card.Content>
                                                        <Card.Meta>Joined in 2019</Card.Meta>
                                                        <Card.Description>
                                                            Joan is a student living in Orange County
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>                   </Grid.Column>
                                            <Grid.Column width={13}>
                                                <Segment as={'h1'} textAlign={'center'} icon>
                                                    Joan Cruz
                                                    <Rating icon='star' defaultRating={4} maxRating={5} />
                                                </Segment>
                                                <Segment>
                                                    <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                                                </Segment>                   </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                            <Grid.Column>
                                <Segment>
                                    <Grid celled>
                                        <Grid.Row>
                                            <Grid.Column width={3}>
                                                <Card>
                                                    <Image src={sitterthree} wrapped ui={false} />
                                                    <Card.Content>
                                                        <Card.Meta>Joined in 2019</Card.Meta>
                                                        <Card.Description>
                                                            Jenny Sanchez is a mom living in the Mission SF
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>                   </Grid.Column>
                                            <Grid.Column width={13}>
                                                <Segment as={'h1'} textAlign={'center'} icon>
                                                    Jenny Sanchez
                                                    <Rating icon='star' defaultRating={4} maxRating={5} />
                                                </Segment>
                                                <Segment>
                                                    <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                                                </Segment>                   </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                            <Grid.Column>
                                <Segment>
                                    <Grid celled>
                                        <Grid.Row>
                                            <Grid.Column width={3}>
                                                <Card>
                                                    <Image src={sitterfour} wrapped ui={false} />
                                                    <Card.Content>
                                                        <Card.Meta>Joined in 2019</Card.Meta>
                                                        <Card.Description>
                                                            John is a student living in the Tenderloin SF
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>
                                            </Grid.Column>
                                            <Grid.Column width={13}>
                                                <Segment as={'h1'} textAlign={'center'} icon>
                                                    John Warken
                                                    <Rating icon='star' defaultRating={4} maxRating={5} />
                                                </Segment>
                                                <Segment>
                                                    <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
                                                </Segment>                   </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>




            </div>
        )
    }
}
export default showingSearch;