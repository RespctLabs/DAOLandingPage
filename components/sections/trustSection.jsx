import React from "react";

function trustSection() {
	return (
		<>
			<div id="trustBody">
				<img
					id="moveLeft"
					src={"/images/panel.png"}
					style={{ width: "70%", marginTop: "5%" }}
				/>
				<div style={{ display: "flex" }}>
					<span id="titleColor" style={{ marginRight: "0.3em", fontSize: "1.2rem" }}>
						Trusted by the industry
					</span>
					
				</div>
				<img
					src={"/images/Games.png"}
					style={{ position: "absolute", right: "2vw", top: "5vw", opacity:"0.8" }}
				></img>
				<img
					src={"/images/Guilds.png"}
					style={{
						position: "absolute",
						left: "2vw",
						bottom: "5vw",
						zIndex: "10",
						opacity: "0.8"
					}}
				></img>
				<p id="descp" style={{ fontSize: "1.2rem" }}>
					We are a decentralized autonomous organization on a mission to
					revolutionize gaming.
					<br />
					Let&apos;s build the metaverse by empowering people to be a part of
					it.
				</p>
				<div id="btn" style={{fontSize: "1.2rem"}}>Early Access</div>
				<img
					id="moveRight"
					src={"/images/panel.png"}
					style={{ width: "70%", marginBottom: "5%" }}
				/>
			</div>
		</>
	);
}

export default trustSection;
