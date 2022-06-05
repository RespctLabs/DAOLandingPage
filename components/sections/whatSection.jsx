import React from "react";
import "../styles/landing.css";
import el from "../images/el.png";
import guild from "../images/guilds.png";

function fadeOut() {
	document.getElementById("head1").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("head1").style.opacity = 1;
	document.getElementById("head2").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("head2").style.opacity = 1;
	document.getElementById("txt").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("txt").style.opacity = 1;
	document.getElementById("ele").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("ele").style.opacity = 0;
	document.getElementById("elem").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("elem").style.opacity = 0;
}
function fadeIn() {
	document.getElementById("head1").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("head1").style.opacity = 0;
	document.getElementById("head2").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("head2").style.opacity = 0;
	document.getElementById("txt").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("txt").style.opacity = 0;
	document.getElementById("ele").style.transition = "opacity 1.5s linear 0s";
	document.getElementById("ele").style.opacity = 1;
	document.getElementById("elem").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("elem").style.opacity = 0;
}
function fade() {
	document.getElementById("ele").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("ele").style.opacity = 0;
	document.getElementById("head1").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("head1").style.opacity = 0;
	document.getElementById("head2").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("head2").style.opacity = 0;
	document.getElementById("txt").style.transition = "opacity 0.5s linear 0s";
	document.getElementById("txt").style.opacity = 0;

	document.getElementById("elem").style.transition = "opacity 1.5s linear 0s";
	document.getElementById("elem").style.opacity = 1;
}
function what() {
	return (
		<div className="main">
			<div id="cont">
				<h2 id="head2">WHAT IS</h2>
				<h1 id="head1">RESPCT</h1>
				<p id="txt">
					For P2E gamers who want to identify and play games
					<br /> with the highest yields, Respct is a platform that enables
					<br /> permissionless entry into different games with 1 click,
					<br /> unlike guilds which take 7-12 days to onboard gamers.
					<br /> retention in games.
				</p>
				<img src={el} id="ele" />
				<img src={guild} id="elem" />
			</div>
			<div className="controller">
				<img src="../images/tri.png" onClick={() => fadeOut()} className="im" />
				<img
					src="../images/circle.png"
					onClick={() => fadeIn()}
					className="im"
				/>
				<img src="../images/square.png" className="im" onClick={() => fade()} />
				<img src="../images/cross.png" className="im" />
			</div>
		</div>
	);
}

export default what;
