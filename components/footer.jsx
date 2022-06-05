import React from "react";

export default function Footer() {
	return (
		<>
			<style jsx>{`
				#footer {
					position: absolute;
					display: flex;
					align-items: center;
					flex-direction: column;
					justify-content: center;
					height: 50vh;
					width: 100%;
					background-color: #151f2c;
					z-index: 100;
				}

				#icons {
					position: absolute;
					border-radius: 10em;
					padding: 3em;
					top: -10vh;
					background: #212a37;
					display: flex;
					align-items: center;
				}
			`}</style>
			<div id="footer">
				<div id="icons">
					<img src={"/images/twitter.png"} />
					<img src={"/images/insta.png"} style={{ marginLeft: "5em" }} />
					<img src={"/images/linkedin.png"} style={{ marginLeft: "5em" }} />
					<img src={"/images/facebook.png"} style={{ marginLeft: "5em" }} />
				</div>
				<p id="titleColor" size="2vw">
					Reach out to Us
				</p>
				<div
					id="descp"
					style={{
						border: "2px solid #03AFD0",
						borderRadius: "10em",
						padding: "1em",
						width: "20%",
					}}
				>
					Enter your email address{" "}
				</div>
			</div>
		</>
	);
}
