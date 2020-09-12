import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }


    }

    componentDidMount() {

    }





    render() {
        return (
            <>
            <h1>Search Notes</h1>
            <input className='form-control' type='text' placeholder='Type to Search Notes'/>
            <table class="table">
<thead class="thead-dark">
  <tr>

    <th scope="col">Id</th>
    <th scope="col">Name</th>
    <th scope="col">Desc</th>
  </tr>
</thead>
<tbody>

</tbody>
</table>
          </>
        )
    }
}
