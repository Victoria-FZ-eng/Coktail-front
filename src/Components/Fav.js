import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardsfav from './Cardsfav.js';
import UpdatingForm from './UpdatingForm.js';
require('dotenv').config();

class Fav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            set:false,
            favArr:[],
            index: -1,
            name: "",
            url: "",
            show:false,
        }
    }

    componentDidMount=()=>{
          console.log("inside func")
        axios
        .get(`${process.env.REACT_APP_URL}/favOnly`)
        .then(results=>{
            console.log(results.data);
            this.setState({
                set:true,
                favArr: results.data
            })
        })
        .catch(err=>console.log(err));


    }

    deleteD=(event)=>{
        event.preventDefault();
        const id= this.state.favArr[event.target.value]._id;
        //console.log(id);
        axios
        .delete(`${process.env.REACT_APP_URL}/del?id=${id}`)
        .then(results=>{
            this.setState({
                favArr: results.data,
            })
        })
        .catch(err=>console.log(err));
    }

    selectUp=(event)=>{
        event.preventDefault();
        this.setState({
            show:true,
            index: event.target.value,

        })


    }

    hide=(event)=>{
        event.preventDefault();
        this.setState({
            show:false,
        })
    }

    update=(event)=>{
        event.preventDefault();

        const obj = {
            name: event.target.name.value,
            url: event.target.url.value,
            id: this.state.favArr[this.state.index]._id
        }

        //console.log(obj);
        axios
        .put(`${process.env.REACT_APP_URL}/update`, obj)
        .then(results=>{
            this.setState({
                favArr: results.data
            })
        })
        .catch(err=>console.log(err));
    }


  render(){
    return(
        <>
        <UpdatingForm show={this.state.show} hide={this.hide} up={this.update}/>
          <Cardsfav arr={this.state.favArr} del={this.deleteD} up={this.selectUp}/>
        </>
    
    )
  }
}

export default Fav;