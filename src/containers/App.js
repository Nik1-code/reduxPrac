import "../App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fruits_list, juice_list } from "../actions";
import { bindActionCreators } from "redux";
import FruitsList from "../components/FruitsList";
import JuiceList from "../components/JuiceList";

class App extends Component {
  componentWillMount() {
    this.props.fruits_list();
    this.props.juice_list();
  }

  render() {
    console.log(this.props.data.fruits);
    console.log(this.props.data.juice);
    return (
      <div className="App">
        <FruitsList {...this.props} />
        <JuiceList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.fruits,
    data1: state.juice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fruits_list,
      juice_list,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
