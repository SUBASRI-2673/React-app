import Reactimage from "../data/assets/React.png";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Course(props) {
    const [registerd, setRegisterd] = useState(false);


    function RegisterCourse() {
  console.log(props.name, "Registered the course");
  setRegisterd(true);
  console.log(registerd);
}

useEffect(() => {
    console.log("inside the course component");
     console.log(registerd);
});//ithu ovvoru module layum exicute aagum so totaly 3 times exicute aagum

  // delete inga function add panna mudiyathu because namakku data courselist la irunthu thaa varuthu so anga poi thaa pannanum
    return (
        <div className="module">
            <img src={Reactimage} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <span>{props.rating}</span>
            <br /> <br />
            <button onClick={RegisterCourse}>Register Now</button> <br /><br />
            <button onClick={()=>props.delete(props.id)}>Delete</button>
            <p>{registerd ? "Already registered" : "Register Now"}</p>
        </div>
    );
}

Course.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.string,
    image: PropTypes.string
};

export default Course;




