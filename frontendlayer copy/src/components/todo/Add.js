import React, { Component } from 'react'
import { constants } from '../../utils/config';

export default class Add extends Component {
    constructor(props) {
        super(props)

        this.state = {
                message :''
        }


    }

    componentDidMount() {

    }

    addNote(){
        let name = this.refs.name.value;
        let desc = this.refs.desc.value;
        const noteObject = {
            "name":name,
            "desc":desc
        };
        const options = {
            mode:'cors',
            method:'POST',
            headers:{
             'Content-Type':'application/json'
            },
            body:JSON.stringify(noteObject)
        }
        const promise = fetch(constants.ADD_NOTES_URL,options);
        promise.then(response=>{
            response.json().then(data=>{
                    this.setState({message:data.message});
            }).catch(err=>{

            });
        }).catch(err=>{

        });

    }




    render() {
        return (
            <>
               <h1>Add Notes..</h1>
        <h3>{this.state.message}</h3>
               <div className='row'>
               <div className='form-group'>
                <label>Name</label>
                <input ref="name" className='form-control' type='text' placeholder='Type Name of the Note'/>
               </div>
               </div>
               <div className='row'>
               <div className='form-group'>
                <label>Name</label>
                <textarea ref="desc" className='form-control' placeholder='Desc of the Note' rows="5" cols="30"/>
               </div>
               </div>
               <div className='row'>
               <div className='form-group'>
                <button onClick={this.addNote.bind(this)} className='btn btn-primary'>Add Notes</button>
               </div>
               </div>
            </>
        )
    }
}
