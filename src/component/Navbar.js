import React from 'react';
import ReactDOM from 'react-dom';
import HNTB from '../img/HNTB.png';

class Navbar extends React.Component{


    render(){
        return (
             <nav className="navbar navbar-light bg-light">
                <a href="https://www.hntb.com/">
                    <img src={HNTB} width="70" height="40" alt="hntb"/>
                </a>
                <span id="tick"></span>
            </nav>
        )
    }
}

function tick(){
    const elem = <div>{new Date().toLocaleTimeString()}</div>;
        ReactDOM.render(elem, document.getElementById("tick"));
    }

setInterval(tick, 1000);

export default Navbar;