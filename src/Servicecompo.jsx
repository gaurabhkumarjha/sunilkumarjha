import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './servicecompo.css'


const Servicecompo = (props) => {


    return (

        <>
                        <div class="card" style={{ width: '18rem' }}>
                            <img src={props.cimg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{props.cname}</h5>
                                <p class="card-text">{props.cdescription}</p>
                                <a href= "/Details" class="btn btn-warning newbtn">Get More Details</a>
                            </div>
                        </div>
        </>
    );
};

export default Servicecompo;