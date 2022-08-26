// import React from 'react';

import "./app.css";
//Components
import Header from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import React from "react";
export default class App extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        data: [
          {label:'Yappy',important:true, like:false, id:1},
          {label:'()=-=()', important:false, like:false, id:2},
          {label:'just',important:false, like:false, id:3},
          
      ],
      term: '',
      filter:'all',
      }
      this.addItem = this.addItem.bind(this);
      this.onToggleImportant = this.onToggleImportant.bind(this);
      this.onToggleLiked = this.onToggleLiked.bind(this);
      this.onUpdateSearch = this.onUpdateSearch.bind(this);
      this.onFilterSelect = this.onFilterSelect.bind(this);
      this.maxId = 4;
    }
  render() {
    let allCount = (this.state.data.length);
    let liked = this.state.data.filter(item => item.like).length;

    let visiblePosts = this.filterPost(this.searchPost(this.state.data,this.state.term),this.state.filter); 
    console.log(this.state.term);

  return (
    <div className="app">
      
        <Header allCount={allCount} liked={liked} />

        <div className="d-flex search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter filter={this.state.filter} onFilterSelect={this.onFilterSelect}/>
        </div>

        <PostList
         posts={visiblePosts}
          onDelete={(id) => {this.onDelete(id)}}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
          />
        <PostAddForm onAdd={this.addItem}/>
    </div>
  );
  }

  // Function's
  onFilterSelect(filter) {
    this.setState(state => {
      state.filter = filter;
      return state;
    })
  }

  onUpdateSearch(term) {
    this.setState(state => {
      state.term = term;
      return state;
    }) 
  }

  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.like);
    }
    else {
      return items;
    }
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

   return items.filter(item => item.label.indexOf(term) > -1)

  }

  onToggleImportant(id) {
    this.onToggle('important', id);
  }

  onToggleLiked(id) {
    this.onToggle('like', id);
    
  }

  onToggle = (prop, id) => {

    this.setState(state => {
    let oldObj = state.data.find((obj) => (obj.id === id));

    let newArr = state.data.filter((obj) => obj.id !== id);

    let newObj = {...oldObj, [prop]: !oldObj[prop]};
    state.data = [...newArr,newObj].sort((a,b) => a.id - b.id);
    return state;
     

  })
  }

  addItem(body) {
    const newItem = {
        label: body,
        important: false,
        id: this.maxId++,
    }
    this.setState((state) => {
      const newArr = [...state.data, newItem]
      state.data = newArr;
      return state;
    })
  }

  onDelete(id) {
    this.setState(state => {
       let updatedData = state.data.filter(obj => {

            if (obj.id !== id) return obj;

          }) 
          console.log(updatedData);
          state.data = updatedData;
          return state;

    });
  }

}
