import React, {Component} from 'react';
import './post-add-form.css';
import {Button, Input} from 'reactstrap';

import styled from 'styled-components';

const BottomPanel = styled.form`
    display: flex;
    margin-top: 20px;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
      }
`

export default class PostAddForm extends Component{
    state = {
        text:''
    }

    handleChange = ({target:{value}}) => {
        this.setState({ text: value })     
     }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({ text: '' });
    }
    
    render(){
        return (
            <BottomPanel onSubmit = {this.onSubmit}>
                <Input
                    placeholder="О чем вы думаете сейчас"
                    className="form-control new-post-label"
                    onChange ={this.handleChange}
                    value={this.state.text}/>
                <Button outline color="secondary">
                    Добавить
                </Button>
            </BottomPanel>
         )
    }
}
