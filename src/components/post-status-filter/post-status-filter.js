import React from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props)
        this.buttons = [
            {name:'all',label:'All'},
            {name:'like',label:'Liked'},
        ];
    }
    createButton() {
        return this.buttons.map(btn => {
            const active = this.props.filter === btn.name;
            const className = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button key={btn.name} type='button' className={`btn ${className}`} name={btn.name}
                        onClick={() => {
                            this.props.onFilterSelect(btn.name);
                        }}
                >{btn.label}
                </button>
            )
        })
      
    }
    render() {
        return (
            <div className="btn-group">
                {this.createButton()}
                {/* <button type='button' className="btn  btn-info">Все</button>
                <button type='button' className="btn  btn-outline-secondary">Понравилось</button> */}
            </div>
        );
    }
  
    
}