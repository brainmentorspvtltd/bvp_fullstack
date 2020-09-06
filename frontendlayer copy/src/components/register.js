import React from 'react';
import { constants } from '../utils/config';
export class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

   async doRegister(){
        let userid = this.refs.userid.value;
        let password = this.refs.pwd.value;
        let obj = {userid:userid, pwd:password};
        const url = constants.REGISTER;
        const options = {
            mode:'cors',
            method:'POST',
            headers:{
             'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        }
        let response = await fetch(url,options);
        let data = await response.json();
        console.log('Response is ',data);
        this.setState({'message':data.message});
    }

    render(){
        return (
            <>
            <h2 className='alert-info text-center'>Register {this.state.message}</h2>
            <div className='form-group'>
                <label>Userid</label>
                <input ref="userid" className='form-control' type='text' placeholder='Type Userid Here'/>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input ref="pwd" className='form-control' type='password' placeholder='Type Password Here'/>
            </div>
            <div className='form-group'>
                <button onClick={this.doRegister.bind(this)} className='btn btn-primary'>Register</button>
            </div>
            </>
        )
    }
}