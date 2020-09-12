import React, { Component } from 'react'
import { constants } from '../../utils/config';

export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
          notes:[]
        }


    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes(){
      const options = {
        mode:'cors',
        method:'GET'


    };
      const promise = fetch(constants.LIST_NOTES_URL+"?token="+localStorage.token,options);
      promise.then(response=>{
        console.log('Response is ',response);
        const p = response.json();
        p.then(data=>{
          console.log('Data is ::::: ',data);
          let arr = data.result;
          this.setState({notes:arr});
        }).catch(err=>{
          this.setState({err:err});
          console.log('Error in JSON :::',err);
        }).catch(err=>{
          this.setState({err:err});
          console.log('Error in Call::: ',err);
        })
      })
    }





    render() {
      let jsx = '';
      if(this.state.notes.length==0){
        jsx = <h1>No Notes found...</h1>;
      }
      else{
        jsx = this.state.notes.map((note,index)=>{
        return (<tr key={index}>
                  <td>{index+1}</td>
                  <td>{note.name}</td>
                  <td>{note.desc}</td>
                  </tr>)
        })
      }
        return (
            <>
              <h1>List of Notes</h1>
              <table class="table">
  <thead class="thead-dark">
    <tr>

      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Desc</th>
    </tr>
  </thead>
  <tbody>
            <>
            {jsx}
            </>
  </tbody>
</table>
            </>
        )
    }
}
