import React from 'react';
import { Link } from "react-router-dom";

function Header(props){
    
    return(
        <div>
        <nav class="navbar navbar-default">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarI">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarI">
            <ul class="nav navbar-nav navbar-left">
                <li role="presentation">
                <Link to="/">Insert Data</Link>
                </li>
                <li role="presentation">
                <Link to="/search">Search Data</Link>
                </li>
                
                <li role="presentation">
                <Link to="/delete">Delete Data</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
    )
}
export default Header;