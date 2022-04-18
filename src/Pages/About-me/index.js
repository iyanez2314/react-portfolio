import React from "react";
import Image from '../../Assets/isaac-yanez-background.png'


function AboutMe () {
    return (
        <div className="container-lg">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5 text-center text-md-start">
                    <h1>
                        <div className="display-2">About Me</div>
                    </h1>
                    <p className="lead my-4">I am a dedicated software engineer always striving to to provide the best work imaginable. On my free time i enjoy building legos, watching anime, working out as well as spend time with my family. </p>
                </div>
                <div className="col-md-5 text-center d-none d-md-block">
                    <img src={Image} alt="" className="img-fluid"></img>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe;