import React,{Component} from 'react';
import AppHeader from '../app-header'
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-from';
import style from './App.module.css';

export default class App extends Component {
    state = {
        date: [
                {label:'Проверка', id:'dfg'},
                {label:'Второй элемент', id:'gdfd'},
                {label:'Третий элемент', id:'324'}],
      // isOpen: false        
    }

    // toggleModal = (id) => {
    //     this.setState(state=>({isOpen: !state.isOpen}));
    // }

    render(){
        const {date:data} = this.state;
        return(
            <div className={style.app}>
                <AppHeader all={data.length}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter />
                </div>
                <PostList posts={data}  showForm={this.toggleModal}/>
                <PostAddForm />                          
            </div>            
        )
    }
}
