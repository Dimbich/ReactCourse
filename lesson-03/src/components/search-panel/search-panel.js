import React, {Component
} from 'react';
import './search-panel.css'
import {Input} from 'reactstrap';

export default class SearchPanel extends Component {
    state ={
        term:''
    }

    onUpdateSearch = ({target:{value}}) => {
        this.setState(({term:value}));
        this.props.onUpdateSearch(value);
    }

    render (){
        return (
            <Input
                className="form-control search-panel"
                placeholder="Поиск по записям" 
                onChange = {this.onUpdateSearch}
                value={this.state.term}/>
        )
    }
}

