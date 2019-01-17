import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PostList = ({posts,  OnDelete, OnEdit, onToggle}) => {
    
    const elem = posts.filter(item=>{return typeof(item)=="object" && !!item}).map(item=>{
        const {...itemProps}=item;        
        const {id} = itemProps;

        return(
            <ListGroupItem key={id}>
                <PostListItem  {...itemProps}
                OnDelete={()=>OnDelete(id)}
                OnEdit={OnEdit}
                onToggleImportant={()=>onToggle(id, 'important')}
                onToggleLiked={()=>onToggle(id ,'like')}/>
            </ListGroupItem>
        )}   
        );
    return (
        <ListGroup className="app-list">
            {elem}
        </ListGroup>
    ) 
}

export default PostList;