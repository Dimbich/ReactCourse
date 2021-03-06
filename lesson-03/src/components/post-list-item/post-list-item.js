import React, {Component} from 'react';
import './post-list-item.sass';
import EditModalForm from '../edit-modal-form';


export default class PostListItem extends Component {
    render() {
        const {id, label, OnDelete, OnEdit, onToggleImportant, onToggleLiked, important, like} = this.props;
        const [day, month] = new Date().toLocaleDateString("ru",{month:"short", day:"numeric"}).split(' ');
        //console.log(newDate);
        let classNames ='app-list-item d-flex justify-content-between';
        if (important) {
            classNames +=' important';
        }

        if (like) {
            classNames +=' like';
        }

        return (
            <div className={classNames}>
                <span 
                    className="app-list-item-label"
                    onClick={onToggleLiked}>
                    {label}
                </span>
                
                <div className="d-flex justifu-content-center align-items-center">
                <span className="date">
                    <span className="month">{month}</span>
                    <span className="day">{day}</span>
                </span>                   
                    <EditModalForm label={label}  id={id} OnEdit={OnEdit}/>
                    <button 
                        type = "button"
                        className = "btn-star btn-sm"
                        onClick = {onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={OnDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>                  
                </div>
            </div>
        )        
    }
}

