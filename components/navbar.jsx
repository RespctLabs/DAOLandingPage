export default function NavBar() {
	return (
		<>
			<style jsx>{`
				#nav {
					position: absolute;
					z-index: 100;
					display: flex;
					margin-top: 2%;
					align-items: center;
					justify-content: space-between;
					width: 100%;
				}

				#testnet {
					font-weight: regular;
					font-family: "Mulish", sans-serif;
					color: #04afd0;
					font-weight: bold;
					border-radius: 3px;
					border: 1px solid #04afd0;
					display: flex;
					align-items: center;
					height: 3vh;
					padding: 0.2em;
					margin-right: 1em;
				}

				#login {
					margin-right: 2em;
					font-weight: regular;
					font-family: "Mulish", sans-serif;
					color: #04afd0;
					font-weight: bold;
				}
			`}</style>
			<div id="nav">
				<img src={"/images/respct.svg"} style={{ marginLeft: "2em" }} />
				<div style={{ display: "flex", alignItems: "center" }}>
					<div id="testnet">
						<div
							style={{
								backgroundColor: "#00FF29",
								borderRadius: "5em",
								width: "1em",
								height: "1em",
							}}
						></div>
						<p>Testnet</p>
					</div>
					<div>
						<p id="login">Login</p>
					</div>
				</div>
			</div>
		</>
	);
}
