import React from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';

 const PostStatusFilter = () => {
     return (
        <div className="btn-group">
            <Button color="info">Все посты</Button>
            <Button outline color="secondary">Понравилось</Button>
        </div>      
     )
 }

 export default PostStatusFilter;