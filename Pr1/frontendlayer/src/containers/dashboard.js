import React from 'react';
export default class DashBoard extends React.Component{
    constructor(props){
        super(props);
    }
render(){
    return (
        <div>
            <h1>DashBoard- Welcome {this.props.userid}</h1>
        </div>
    );
}
}