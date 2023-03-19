import React from "react";
import PropTypes from "prop-types";

const Imgstyles={
    minwidth: "500px",
	minheight: "325px",
}
const Cardstyles={
    minwidth: "500px",
}
const Card=(props)=>{
    return(
<div className="card" style={Cardstyles}>
  <img className="card-img-top img-fluid" style={Imgstyles} src="https://upload.wikimedia.org/wikipedia/commons/4/42/Bajada_Armendariz_Lima%2C_Peru_Skyline_02.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title
     and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">{props.button}</a>
  </div>
</div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,

}; 

export default Card;