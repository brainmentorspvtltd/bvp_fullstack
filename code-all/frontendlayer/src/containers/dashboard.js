import React from "react";
import "./dashboard.css";
import { NavBar } from "./widgets/navbar";
import { SideBar } from "./widgets/sidebar";
import { Route, Switch } from "react-router-dom";
import { Home } from "../components/todo/Home";
import Add from "../components/todo/Add";
import List from "../components/todo/List";
import Search from "../components/todo/Search";
import Delete from "../components/todo/Delete";
import { Error } from "./widgets/error";

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <main role="main" className="col-md-12 ml-sm-auto col-lg-10 px-md-4">

<div >
            <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={Add} />
          <Route path="/list" component={List} />
          <Route path="/search" component={Search} />
          <Route path="/delete" component={Delete} />
          <Route component={Error} />
        </Switch>
        </div>
        </main>
          </div>
        </div>


      </div>
    );
  }
}
