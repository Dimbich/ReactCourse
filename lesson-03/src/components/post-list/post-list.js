import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts,  showForm}) => {
    
    const elem = posts.filter(item=>{return typeof(item)=="object" && !!item}).map(item=>{
        const {id,...itemProps}=item;
        return(
            <li key={id} className="list-group-item">
                <PostListItem  {...itemProps}
                showForm={()=>{showForm(id)}}/>
            </li>
        )}   
        );
    return <ul className="app-list list-group">
        {elem}
    </ul>
}

export default PostList;