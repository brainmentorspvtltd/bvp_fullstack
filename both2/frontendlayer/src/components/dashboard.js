import React from 'react';
export class DashBoard extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return (
        <div>
            <h1>DashBoard- Welcome {props.userid}</h1>
        </div>
    )
}
}