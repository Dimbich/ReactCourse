import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    state = {
        important: false,
        like: false
    }

    onImporatant = () => {
        this.setState(state=>({important:!state.important}))
    }

    onLike = () => {
        this.setState(state=>({like:!state.like}))
    }

    render() {
        const {label, showForm} = this.props;
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
                    <button
                        type="button"
                        className="btn-edit btn-sm"
                        onClick={showForm}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button 
                        type = "button"
                        className = "btn-star btn-sm"
                        onClick = {this.onImporatant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type="button"
                        className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>                  
                </div>
            </div>
        )        
    }
}

