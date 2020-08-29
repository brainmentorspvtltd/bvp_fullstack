import React from 'react';
import { Login } from '../components/login';
export class ToDo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='container'>
                <Login/>
            </div>
        )
    }
}