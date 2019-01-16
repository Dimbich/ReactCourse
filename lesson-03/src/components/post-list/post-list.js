import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';
import { ListGroup } from 'reactstrap';

const PostList = ({posts,  showForm}) => {
    
    const elem = posts.filter(item=>{return typeof(item)=="object" && !!item}).map(item=>{
        const {id,...itemProps}=item;
        return(
            <li key={id} className="list-group-item">
                <PostListItem  {...itemProps}
                showForm={id}/>
            </li>
        )}   
        );
    return (
        <ListGroup className="app-list">
            {elem}
        </ListGroup>
    ) 
}

export default PostList;