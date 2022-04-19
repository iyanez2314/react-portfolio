import React from "react";
import {Github, Linkedin} from 'react-bootstrap-icons'

function Footer () {
    return (
        <div>
            <footer className="text-center py-3">
                <div className="p-3 d-flex justify-content-evenly">
                 <Github size={40} />
                 Made by Isaac Yanez
                 <Linkedin size={40}/>
                 </div>
                 
            </footer>
        </div>
    )
}

export default Footer;