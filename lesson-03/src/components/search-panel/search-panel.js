import React from 'react';
import './search-panel.css'
import {Input} from 'reactstrap';

const SearchPanel = ()=>{
    return (
        <Input
            className="form-control search-panel"
            placeholder="Поиск по записям" />
    )
}

export default SearchPanel;
