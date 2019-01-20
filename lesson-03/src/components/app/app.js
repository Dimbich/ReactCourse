import React,{Component} from 'react';
import AppHeader from '../app-header'
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-from';
import keygen from 'keygenerator';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component {
    maxId = 100;
    state = {
        date: [
                {label:'Проверка', important:  true, id: 1},
                {label:'Второй элемент',  important:  false, id: 2},
                {label:'Третий элемент',  important:  false, id: 3}],
      // isOpen: false        
    }

    // toggleModal = (id) => {
    //     this.setState(state=>({isOpen: !state.isOpen}));
    // }

    deleteID = (id) => {
        this.setState(({date})=>{
            const index = date.findIndex(elem => elem.id === id);
            const newArray = [...date.slice(0,index),...date.slice(index+1)];
            return {date: newArray}
        });
    }

    editItem = (id, label) =>{
        this.setState(({date})=>{
            const index = date.findIndex(elem => elem.id === id);
            const newArray = [...date.slice(0,index),{id, label},...date.slice(index+1)];
            return {date: newArray}
        });
    }

    addItem = (body) => {
        // const generateKey = (pre) => {
        //     return `${ pre }_${ new Date().getTime() }`;
        // }

        //Генерация ключа с помощью подключенного пакета
        const newItem = {
            label: body,
            important: false,
            id: keygen._()
        }
        
        this.setState(({date})=>{
            const newArr = [...date, newItem];
            return {date:newArr};
        })
    }

    render(){
        const {date:data} = this.state;
        return(
            <AppBlock>
                <AppHeader all={data.length}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter />
                </div>
                <PostList posts={data}  OnDelete={this.deleteID} OnEdit={this.editItem}/>
                <PostAddForm 
                    onAdd={this.addItem}/>                          
            </AppBlock>            
        )
    }
}
