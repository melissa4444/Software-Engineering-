import React, {Component} from 'react'
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import axios from "axios";
import sitterone from "../images/sitterone.png";
import sittertwo from "../images/sittertwo.png";
import sitterthree from "../images/sitterthree.png";
import sitterfour from "../images/sitterfour.png";
import { Divider, Header, Image, Segment, Grid } from 'semantic-ui-react';
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import { Rating } from 'semantic-ui-react';
import {Container} from "react-bootstrap";


let forThisClass = {
    firstName: '',
    lastName: '',
    email: '',
    searchValue: ''
}

class showingSearch extends Component{
    constructor(){
        super();
        this.state={
            form: {
                searchValue: '',
                valid: ''
                // firstName: '',
                // lastName: '',
                // valid: '',
                // email: ''
            }
        };
    }
    onChange=(event)=>{
        this.setState({[event.target.name]: event.target.value});
        const values = event.target.name
        forThisClass[values] = event.target.value
        //forThisClass = event.target.value
    }
    onSubmit=(event)=>{
        event.preventDefault();
        //get our form data
        const {searchValue,firstName,lastName,email,valid}=this.state;
        axios.post('/api/db/search',{searchValue})
            .then((result)=>{
                //access the results here
                console.log(result.data[0])
               
                forThisClass.firstName = result.data[0].firstName.replace(/^./, result.data[0].firstName[0].toUpperCase()) 
                console.log(forThisClass.firstName)
                console.log(this.state.searchValue)
                console.log(forThisClass.searchValue)
                this.setState({
                    valid: 'true'
                })
                // this.setState({
                //     firstName: result.data[0].firstName.replace(/^./, result.data[0].firstName[0].toUpperCase()),
                //     lastName: result.data[0].lastName.replace(/^./, result.data[0].lastName[0].toUpperCase()),
                //     valid: 'true',
                //     email: result.data[0].email 
                // })
                //console.log(this.state.firstName)
            }).catch((e) => {
                this.setState({
                    firstName: 'Does Not Exist',
                    lastName: 'Does Not Exist',
                    email: 'Does Not Exist',
                    valid: 'false' 
                })
            })
    }
    render(){
        const{searchValue}=this.state;
        //const{firstName} = forThisClass
        const first = <p>{forThisClass.firstName}</p>;
        const last = <p>{this.state.lastName}</p>
        const email = <p>Email: {this.state.email}</p>;
        console.log(forThisClass.firstName)
        const show =  <Container>
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
                                                           
                                                            <Icon name={'map pin'}/>
                                                        </Card.Description>
                                                    </Card.Content>
                                                </Card>
                                            </Grid.Column>
                                            <Grid.Column width={13}>
                                                <Segment as={'h1'} textAlign={'center'} icon>
                                                   Name:  {first}  {this.state.lastName ? last : ''}
                                                    <Rating icon='star' defaultRating={4} maxRating={5} />
                                                </Segment>
                                                <Segment>
                                                {this.state.email ? email : ''} 
                                                </Segment>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                       
                            
                       
                    </Grid>
                </Container>;
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
                        {this.state.valid ? show : ''}
                       
                    </Container>
                </div>
               
            </div>
        )
    }
}
export default showingSearch;