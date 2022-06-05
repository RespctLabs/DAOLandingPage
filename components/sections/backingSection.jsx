import React from "react";
function Backing() {
	return (
		<>
			<div id="backingImage" />
			<div id="backingBody">
				<div id="backingContent">
					<h id="backingTitle">
						Backed by the
						<br />
						Giants
					</h>
					<p id="backingDescp">
						Respct is a creator token platform where you
						<br />
						become a shareholder in the journey of your favorite
						<br />
						creator
					</p>
				</div>
				<div id="backings">
					<img src={"/images/mesh.png"} style={{ marginTop: "20%" }} />
					<img src={"/images/protocol.png"} style={{ marginTop: "20%" }} />
					<img src={"/images/tachyon.png"} style={{ marginTop: "20%" }} />
				</div>
			</div>
		</>
	);
}

export default Backing;
