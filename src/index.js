import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// components
import App from './components/app';



const root = ReactDOM.createRoot(document.getElementById('root'));

class WhoAmIOnClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        years:26,
      }
      // this.nextYear = this.nextYear.bind(this);
    }
    render() {
      const {name,surname,link} = this.props;
      let {years} = this.state;
      return (
        <React.Fragment>
          <button onClick={() => {this.nextYear(); console.log(this)}}>++</button>
           <h1>My Name is {name}, surname -{surname}, years - {years} </h1>
          <a href={link}>My profile</a>
        </React.Fragment>
       
      );
    }

    nextYear() {
     console.log(1);
     this.setState(state => ({
      years: ++state.years,
     
    }));
     
    }
}

function WhoAmI(props) {
  return (
    <React.Fragment>
       <h1>My Name is {props.name}, surname -{props.surname} </h1>
      <a href={props.link}>My profile</a>
    </React.Fragment>
   
  );
} 
// const elema = <h2>pudge</h2>;
// // ReactDOM.render(elema,document.getElementById('root'));
// const keka = React.createElement('h5',null,'pudgemegaultra');



function All() {
  return (
    <>
      <WhoAmI name="sdfsdf" surname="fsdfsd" link="#fsdfsdfsd" />
      <WhoAmI name="99999" surname="jjjjjjj" link="#sdfsdfsd" />
      <WhoAmI name="you are desire" surname="we are" link="#ysdffgfff" />
    </>
  );
}



root.render(
   <>
    <App/>
   </>
   
  
  
  // <React.StrictMode>
  //   elema
  //   <h2>Hello world!</h2>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

