import React from 'react';
import { Login } from '../components/login';
import { Register } from '../components/register';
import Dashboard from './dashboard';
export class ToDo extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            show:0
        }
    }
    showHide(val){
        this.setState({show:val});
    }
    showDashBoard(result){
        this.setState({...this.state,result:result});
        console.log('State Update ',result);
    }
    render(){
        const mystyle = {
            color:'red',
            backgroundColor:'green'
        }
        if(this.state.result){
            return (<Dashboard/>);
        }
        let jsx ;
        if(this.state.show==1){
            jsx = <Login isSuccess={this.showDashBoard.bind(this)}/>;
        }
        else
        if(this.state.show == 2){
            jsx = <Register/>;
        }
        else{
            jsx = <></>;
        }
        return (
            <div className='container'>
                <button onClick={()=>{
                    this.showHide(1);
                }} className='btn btn-primary mr-2'>Login</button>

                <button onClick={()=>{
                    this.showHide(2);
                }} className='btn btn-success'>Create Account</button>
                <br/>
                {jsx}


            </div>
        )
    }
}