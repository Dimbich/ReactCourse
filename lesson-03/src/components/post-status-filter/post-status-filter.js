import React, {Component} from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';

export default class PostStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'Все'},
        {name: 'like', label: 'Понравилось'},
    ]

    render(){
        const {filter, onFilterSelect} = this.props;
        const buttons = this.buttons.map(({name,label})=>{
            const active = filter === name;
            let color;
            let outline;
            if (active) {
                color = 'info';
                outline = false;   
            } else {
                color ='secondary';
                outline = true;   
            }
            return (
                <Button 
                    key={name} 
                    outline={outline} 
                    color={color}
                    onClick ={()=>{onFilterSelect(name)}}>
                    {label}
                </Button>    
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>      
         )
         
    }
}
