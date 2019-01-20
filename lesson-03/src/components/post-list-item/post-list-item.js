import React, {Component} from 'react';
import './post-list-item.sass';
import ModalForm from '../modal-form';
//import DeleteModalForm from '../delete-modal-form';


export default class PostListItem extends Component {
    state = {
        important: this.props.important,
        like: false
    }

    onImporatant = () => {
        this.setState(({important})=>({important:!important}))
    }

    onLike = () => {
        this.setState(({like})=>({like:!like}))
    }

    render() {
        const {id, label, OnDelete, OnEdit} = this.props;
        const {important, like} = this.state;
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
                    onClick={this.onLike}>
                    {label}
                </span>
                
                <div className="d-flex justifu-content-center align-items-center">
                <span className="date">
                    <span className="month">{month}</span>
                    <span className="day">{day}</span>
                </span>                   
                    <ModalForm type="edit" label={label}  id={id} onAction={OnEdit}/>
                    <button 
                        type = "button"
                        className = "btn-star btn-sm"
                        onClick = {this.onImporatant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <ModalForm type="delete" label={label}  id={id} onAction={OnDelete}/>
                    {/*<DeleteModalForm onDelete={()=>{OnDelete(id)}}/>*/}
                    <i className="fa fa-heart"></i>                  
                </div>
            </div>
        )        
    }
}

