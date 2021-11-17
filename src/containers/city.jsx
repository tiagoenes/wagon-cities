import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';


class City extends Component {
  handleClick = (event)=>{
    console.log(this.props.city);
    this.props.selectCity(this.props.city);
  }
  render = (props) => {
    return (
      <div className="" onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
  { selectCity: selectCity },
  dispatch
  );
 }

 function mapStateToProps(reduxState) {
  return {
  selectedCity: reduxState.selectedCity
  };
 } 


export default connect(mapStateToProps,mapDispatchToProps)(City);