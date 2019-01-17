import React,{Component} from 'react';
import AppHeader from '../app-header'
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-from';


import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component {
    maxId = 100;
    state = {
        date: [
                {label:'Проверка', important:  true, like: false, id: 1},
                {label:'Второй элемент',  important:  false, like: false, id: 2},
                {label:'Третий элемент',  important:  false, like: false, id: 3}],
        term:'',
        filter:'all'
      // isOpen: false        
    }

    deleteID = (id) => {
        this.setState(({date})=>{
            const index = date.findIndex(elem => elem.id === id);
            const newArray = [...date.slice(0,index),...date.slice(index+1)];
            return {date: newArray}
        });
    }

    editItem = (id, label) => {
        this.setState(({date})=> {
            const index = date.findIndex(elem => elem.id === id);
            const newArray = [...date.slice(0,index),{id, label},...date.slice(index+1)];
            return {date: newArray}
        });
    }

    onToggle = (id,eventAction) => {
        this.setState(({date})=> {
            const index = date.findIndex(elem => elem.id === id);
            const old = date[index];
            const newItem = {...old, [eventAction]:!old[eventAction]}
            const newArray = [...date.slice(0,index), newItem,...date.slice(index+1)];
            return {date: newArray}
        });
    }

    searchPost = (data, text) => {
        const reg = new RegExp(text,'i');
         return  text ? data.filter(({label}) => reg.test(label)) : data;        
    }



    addItem = (body) => {
        const generateKey = (pre) => {
            return `${ pre }_${ new Date().getTime() }`;
        }
        const newItem = {
            label: body,
            important: false,
            id: generateKey(body)
        }
        
        this.setState(({date})=>{
            const newArr = [...date, newItem];
            return {date:newArr};
        })
    }

    onUpdateSearch = (term) => {
        this.setState(({term}));
    }

    filterPost = (items, filter) => {
        return filter==='like' ? items.filter(item=>item.like) : items;
    }

    onFilterSelect = (filter) => {
        this.setState(({filter}));
    }

    render(){
        const {date:data, term, filter} = this.state;
        const allPost = data.length;
        const likedPost = data.filter(item=>item.like).length;
        const visablePost = this.filterPost(this.searchPost(data, term), filter);
        return(
            <AppBlock>
                <AppHeader all={allPost} like={likedPost}/>
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter 
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                    posts={visablePost}  
                    OnDelete={this.deleteID} 
                    OnEdit={this.editItem}
                    onToggle={this.onToggle}/>
                <PostAddForm 
                    onAdd={this.addItem}/>                          
            </AppBlock>            
        )
    }
}
