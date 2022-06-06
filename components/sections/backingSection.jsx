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
						They are not just the backers, but believers of what 
						<br />
						we do, and how we aim to change the ecosystem
						<br />
						become the part of the change.
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
