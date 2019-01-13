import React,{Component} from 'react';
import AppHeader from '../app-header'
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-from';
import EditModalForm from '../edit-modal-form';
import './app.css';

export default class App extends Component {
    state = {
        date: [
                {label:'Проверка', id:'dfg'},
                {label:'Второй элемент', id:'gdfd'},
                {label:'Третий элемент', id:'324'}],
       isOpen: false        
    }

    toggleModal = (id) => {
        console.log(id, this.state.isOpen);
        this.setState(state=>({isOpen: !state.isOpen}));
        return id;
    }

    render(){
        const {date:data, isOpen} = this.state;
        return(
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter />
                </div>
                <PostList posts={data}  showForm={this.toggleModal}/>
                <PostAddForm />
                <EditModalForm visable={isOpen} onClose={this.toggleModal} title="Редактирование твита"/>           
            </div>            
        )
    }
}
