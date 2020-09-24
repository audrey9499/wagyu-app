import React from "react";
import IconBar from "./IconBar";

function Header() {
    return <div id="header">
    <div className="logo">
    <h1 className="logo-1">道</h1>
    <h3 className="logo-2">和</h3>
    <h3 className="logo-3">牛</h3></div>
    <div className="videodiv">
    <video src="cover video.mp4" width="1200px" height="750px" autoPlay></video></div>
    <IconBar />
    </div>
}

export default Header;