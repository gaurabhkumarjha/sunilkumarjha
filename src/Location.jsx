import React from "react";
import './loc.css';
import Footer from './Footer'
import Navbar from "./Navbar";
const Location=()=>{
 
     return (
       <>
        <Navbar />
        <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=531&amp;height=526&amp;hl=en&amp;q=shankar market connaught place &amp;t=h&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://formatjson.org/">format json</a></div></div>
        <Footer/>
        </>
     );
};

export default Location;