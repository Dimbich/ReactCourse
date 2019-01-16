import React from 'react';
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

 const PostAddForm = ({onAdd}) => {
     return (
        <BottomPanel>
            <Input
                placeholder="О чем вы думаете сейчас"
                className="form-control new-post-label"/>
            <Button 
                outline color="secondary"
                onClick = {()=>{onAdd('fgfdgfd')}}>
                Добавить
            </Button>
        </BottomPanel>
     )
 }

 export default PostAddForm;