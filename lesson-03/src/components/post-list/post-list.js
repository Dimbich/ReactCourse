import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PostList = ({posts,  OnDelete, OnEdit}) => {
    
    const elem = posts.filter(item=>{return typeof(item)=="object" && !!item}).map(item=>{
        const {...itemProps}=item;
        return(
            <ListGroupItem key={item.id}>
                <PostListItem  {...itemProps}
                OnDelete={()=>OnDelete(item.id)}
                OnEdit={OnEdit}/>
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