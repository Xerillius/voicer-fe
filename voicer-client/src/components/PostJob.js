import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

class PostJob extends React.Component {

    state = {
        title: "",
        description: "",
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("Submit!")
    }

    render() {
        return(
            <div className="PostJob">
                <h1>Post a Job</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input type="text" name="title" placeholder="Enter a Title" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="textarea" name="description" placeholder="Describe the Job" onChange={this.handleChange}/>
                    </FormGroup>
                    <Button>Post Job</Button>
                </Form>
            </div>
        )
    }
}

export default PostJob;