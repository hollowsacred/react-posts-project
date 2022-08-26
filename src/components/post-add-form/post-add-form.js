
import React from "react";
import "./post-add-form.css";

export default class PostAddForm  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text:'',
        }
        this.onValueChange = this.onValueChange.bind(this);
    }
   
    render() {
        let {onAdd} = this.props;
        return (
            <form className="bottom-panel d-flex"
                    onSubmit={(e) => this.onSubmit(e)}
            >
                <input
                type="text"
                placeholder="Write something"
                className="form-control new-post-label"
                onChange={this.onValueChange}
                />
                <button
                     className="btn btn-outline-secondary"
                 
                >Click</button>
            </form>
        );
    }

    onValueChange(e) {
        this.setState(state => {
            state.text = e.target.value;
            return state;
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        e.target.firstElementChild.value = '';
    }
  
}