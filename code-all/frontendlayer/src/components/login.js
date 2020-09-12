import React from 'react';
export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

   async doLogin(){
        let userid = this.refs.userid.value;
        let password = this.refs.pwd.value;
        let obj = {userid:userid, pwd:password};
        const url = 'http://localhost:1234/reactlogin';
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
        if(data && data.result.message && data.result.message.includes('Welcome')){
            localStorage.token = data.token;
            this.props.isSuccess(true);
            console.log('With true call');
        }
        else{
            this.props.isSuccess(false);
            console.log('With false call');
        }
        this.setState({'message':data.message});
    }

    render(){
        return (
            <>
            <h2 className='alert-info text-center'>Login {this.state.message}</h2>
            <div className='form-group'>
                <label>Userid</label>
                <input ref="userid" className='form-control' type='text' placeholder='Type Userid Here'/>
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input ref="pwd" className='form-control' type='password' placeholder='Type Password Here'/>
            </div>
            <div className='form-group'>
                <button onClick={this.doLogin.bind(this)} className='btn btn-primary'>Login</button>
            </div>
            </>
        )
    }
}