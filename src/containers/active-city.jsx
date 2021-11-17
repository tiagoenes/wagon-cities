import React, { Component } from 'react';
import { connect } from 'react-redux';
class ActiveCity extends Component {
  render = (props) => {
    console.log(this.props.selectedCity);
    if(this.props.selectedCity){
      const image = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;
      console.log(image)
      return (
        <div className="active-city">
          <div style={{color:'white'}}>{this.props.selectedCity.name}</div>
          <div style={{color:'white'}}>{this.props.selectedCity.address}</div>
          <div><img width="100%" src={image} alt=""/></div>
        </div>
      );
    }else{
      return(
      <div className="active-city">
        <div></div>
        <div></div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
 }  

export default connect(mapStateToProps)(ActiveCity);

