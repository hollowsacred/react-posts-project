import React from "react";
import "./search-panel.css";

export default class SearchPanel extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            term:'',
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }
    render () {
        return (
            <input
            className="form-control search-input"
            type='text' name="search" placeholder="Search"
            onInput={this.onUpdateSearch}
            />
        );
    } 
    async onUpdateSearch(e) {
        const term = e.target.value;
        await this.setState({term}); 
        this.props.onUpdateSearch(this.state.term);
        
    }
   
}