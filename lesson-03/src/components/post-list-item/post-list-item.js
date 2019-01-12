import React from 'react';
import './post-list-item.css';

 const PostListItem = () => {

     const [day, month] = new Date().toLocaleDateString("ru",{month:"short", day:"numeric"}).split(' ');
     //console.log(newDate);
     
     return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">Запись твита</span>
            
            <div className="d-flex justifu-content-center align-items-center">
            <span className="date">
                <span className="month">{month}</span>
                <span className="day">{day}</span>
            </span>
                <button 
                    type="button"
                    className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button 
                    type="button"
                    className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>                  
            </div>
        </li>
     )
 }

 export default PostListItem;