import React from "react";
import IconBar from "./IconBar";

function Header() {
    return <div id="header">
    <div className="logo">
    <h1 className="logo-1">道</h1>
    <h3 className="logo-2">和</h3>
    <h3 className="logo-3">牛</h3></div>
    <div className="videodiv">
			<video width="1200px" height="750px" preload="auto" autoPlay="autoplay" loop="loop">
				<source type="video/mp4" src="https://exzerone1.s3-us-west-1.amazonaws.com/cover+video.mp4"/>
			</video>
		</div>
    <IconBar />
    </div>
}

export default Header;