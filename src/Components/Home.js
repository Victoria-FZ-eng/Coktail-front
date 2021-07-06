import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios  from 'axios';
import CardsAll from './CardsAll.js';


require('dotenv').config();

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            allArr:[],
            favArr:[],
        }
    }

    componentDidMount=()=>{

      // console.log(process.env.REACT_APP_URL);
        axios
        .get(`${process.env.REACT_APP_URL}/all`)
        .then(results=>{
            //console.log(results.data);
            this.setState({
                allArr: results.data,
            })
        })
        .catch(err=>console.log(err));
    }

    addFav=(event)=>{
        event.preventDefault();
        const idx = event.target.value;
         const obj ={
             name:this.state.allArr[idx].strDrink,
             url:this.state.allArr[idx].strDrinkThumb
         };

        // console.log(obj);

        axios
        .post(`${process.env.REACT_APP_URL}/fav` , obj)
        .then(results=>{
            console.log(results.data);
        })
        .catch(err=>console.log(err));
    }



  render(){
    return(
      <CardsAll arr={this.state.allArr} fav={this.addFav}/>
    )
  }
}

export default Home;