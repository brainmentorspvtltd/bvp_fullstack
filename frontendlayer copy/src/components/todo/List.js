import React, { Component } from 'react'

export default class List extends Component {
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

  </tbody>
</table>
            </>
        )
    }
}
