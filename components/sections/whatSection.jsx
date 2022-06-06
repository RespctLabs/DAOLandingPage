import jquery from "jquery";
import React from "react";
import $ from "jquery";

// import el from "../images/el.png";
// import guild from "../images/guilds.png";

function fadeOut() {
	
	// document.getElementById("ele").style.transition = "opacity 0.5s linear 0s";
	// document.getElementById("ele").style.opacity = 0;
	// document.getElementById("elem").style.transition = "opacity 0.5s linear 0s";
	// document.getElementById("elem").style.opacity = 0;
	document.getElementById("txt").innerHTML="One click login & your passport to any game on any chain. Access INOs, NFTs, and more from any game"
	document.getElementById("head1").innerHTML="ID"
	document.getElementById("head2").innerHTML="Respct"
	document.getElementById("head1").style="background-image: linear-gradient(90deg, #03AFD0 5.2%, #812DC1 50%);"
	document.getElementById("gamedis").src="/images/gd.png";
	document.getElementById("gamedis").style="width: 80%";
	document.getElementById("txt").style="margin-bottom: 0";
	
}


function fadeI() {
	
	// document.getElementById("ele").style.transition = "opacity 1.5s linear 0s";
	// document.getElementById("ele").style.opacity = 1;
	// document.getElementById("elem").style.transition = "opacity 0.5s linear 0s";
	// document.getElementById("elem").style.opacity = 0;
	document.getElementById("txt").innerHTML="Cross game NFT marketplace where anyone can lend and borrow game assets. Get access to INO from early metaverse projects."
	document.getElementById("head1").innerHTML="Marketplace"
	document.getElementById("head2").innerHTML="NFT"
	document.getElementById("head1").style="background-image: linear-gradient(90deg, #03AFD0 5.2%, #812DC1 50%);"
	document.getElementById("gamedis").src="/images/reflect.png";
	document.getElementById("gamedis").style="width: 70%"
	document.getElementById("txt").style="margin-bottom: 0";
	
	
	// $("#gamedis").fadeOut("slow");
	
	
	// $("#gamedis").fadeIn("slow");
	
	

	
	

	

}


function fade() {
	// document.getElementById("ele").style.transition = "opacity 0.5s linear 0s";
	// document.getElementById("ele").style.opacity = 0;
	

	// document.getElementById("elem").style.transition = "opacity 1.5s linear 0s";
	// document.getElementById("elem").style.opacity = 1;
	document.getElementById("txt").innerHTML="Easy yet engaging Missions & Challenges for players to complete and get rewarded from games & guilds"
	document.getElementById("head1").innerHTML="Platform"
	document.getElementById("head2").innerHTML="Missions"
	document.getElementById("head1").style="background-image: linear-gradient(90deg, #03AFD0 5.2%, #812DC1 50%);"
	document.getElementById("gamedis").src="/images/el.png";
	document.getElementById("gamedis").style="width: 60%";
	
	
}
function fadeit(){
	document.getElementById("txt").innerHTML="Discover the trending metaverse projects and become a part of the community"
	document.getElementById("head1").innerHTML="Discovery"
	document.getElementById("head2").innerHTML="Game"
	document.getElementById("head1").style="background-image: linear-gradient(90deg, #03AFD0 5.2%, #812DC1 10%);"
	document.getElementById("gamedis").src="/images/idd.png";
	document.getElementById("gamedis").style="width: 40%";
	document.getElementById("txt").style="margin-bottom: 10%";


}
function what() {
	return (
		<div className="main">
			<div id="cont">
				<h2 id="head2">Respct</h2>
				<h1 id="head1">ID</h1>
				<div className="resize">
				<p id="txt">
					One click login and your passport to any game on any chain. Access INOs, NFTs, and more from any game
				</p>

				</div>
				<img src="/images/gd.png" alt="" id="gamedis"/>
				
				{/* <img src={"/images/el.png"} id="ele" />
				<img src={"/images/gg.png"} id="elem" /> */}
			</div>
			<div className="controller">
				<img src="../images/tri.png" onClick={() => fadeOut()} className="im" />
				<img
					src="../images/circle.png"
					onClick={() => fadeI()}
					className="im"
				/>
				<img src="../images/square.png" className="im" onClick={() => fade()} />
				<img src="../images/cross.png" className="im" onClick={() => fadeit()} />
			</div>
		</div>
	);
}

export default what;
