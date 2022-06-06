import React from "react";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import Footer from "../components/footer.jsx";
import NavBar from "../components/navbar.jsx";
import BackingSection from "../components/sections/backingSection.jsx";
import IntroSection from "../components/sections/introSection.jsx";
import TrustSection from "../components/sections/trustSection.jsx";
import WhatSection from "../components/sections/whatSection.jsx";



function Index() {
	console.log({ "process?.title": process?.title });
	return (
		<>
			<style global jsx>{`
				
				#backingBody {
					display: flex;
					height: 100vh;
					width: 100vw;
					background-color: #151F2C;
					overflow: hidden;
				}

				#backingContent {
					display: flex;
					flex-direction: column;
					margin-left: 12%;
					margin-top: 30%;
				}
				.backingTitle {
					text-align: left;
					font-weight: 700;
					font-size: 6rem;
					background: -webkit-linear-gradient(
						-50deg,
						rgba(3, 174, 208, 0.112),
						rgba(3, 174, 208, 0.112),
						#a658e1,
						#a658e1,
						rgba(3, 174, 208, 0.112),
						rgba(3, 174, 208, 0.112)
					);
					background-clip: text;
					-webkit-text-fill-color: transparent;
					font-family: "Mulish", sans-serif;
					
				}
				#bt{
					margin-top:-5%;
				}
				#backingDescp {
					text-align: left;
					font-size: 1.2rem;
					font-family: "Mulish", sans-serif;
					color: #c9c9c9;
					font-weight: 200;
				}
				#backings {
					margin-left: 20%;
					display: flex;
					justify-content: center;
					flex-direction: column;
					width: 20%;
				}
				#backingImage {
					transform: rotate(14deg);
					position: absolute;
					width: 100vw;
					left: -15vw;
					top: -15vw;
					height: 100vh;
					background-image: url("../images/starsBG.png");
					background-size: cover;
					background-position: center;

					mask-image: url("../images/bigF.svg");
					mask-size: 80%;
					mask-repeat: no-repeat;

					background-position-x: 0;
					animation: clip-fade 50s infinite alternate;
				}

				@keyframes clip-fade {
					100% {
						background-position: 100vh;
					}
				}

				#trustBody {
					display: flex;
					align-items: center;
					flex-direction: column;
					justify-content: space-between;
					height: 100vh;
					width: 100vw;
					background-color: #17181e;
					overflow: hidden;
				}
				#movingTitle {
					position: relative;
					min-width: 100%;
					left: -100vw;
					animation: moveSide 10s infinite alternate;
				}
				#moveLeft {
					position: relative;
					right: 50vw;
					animation: moveLeft 50s linear infinite;
					
				}
				#moveRight {
					position: relative;
					left: -50vw;
					animation: moveRight 50s linear infinite;
					
				}
				@keyframes moveRight {
					100% {
						left: -100vw;
					}
				}
				@keyframes moveLeft {
					100% {
						right: -100vw;
					}
				}
				body{
					background-color: #151F2C;
					font-family: 'Mulish', sans-serif;
		
				}
				#cont{
					position: relative;
					/* display: flex; */
					/* border: 2px solid red; */
					/* flex-direction: column; */
					width: 50%;
					margin-left: 10%;
					
				}
				h1{
				   
					font-size: 6rem;
					background-image: linear-gradient(90deg, #03AFD0 5.2%, #812DC1 50%);
					background-size: 100%;
					-webkit-background-clip: text;
					-moz-background-clip: text;
					-webkit-text-fill-color: transparent; 
					-moz-text-fill-color: transparent;
					background-color: #f3ec78;
					margin-top: -8%;
					
		
					
					
					font-weight: 700;
		
				}
				h2{
				 
					
					color: #ffffff;
					font-size: 6rem;
					
				   
					
				   
		
					font-family: 'Mulish';
					font-style: normal;
					font-weight: 700;
				  
				 
				  
				}
				p{
					color: #ADADAD;
					margin-top: -2%;
					font-size: 1.2rem;
					font-weight: 300;
				}
				.main{
					/* border: 2px solid red; */
					width:85%;
					margin: auto;
					margin-top:4%;
					display: flex;
					max-width: 1500px;
				}
				.im{
					width:20%;
					-webkit-transition: -webkit-transform 1.2s;
					margin-top: 18px;
				   
				}
				.controller{
					position: relative;
					width:50%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				
				}
				.im:hover{
					-webkit-transform: rotate(360deg) translateZ(0) scale(1.5);
					
				   
		
				}
				#introtxt{
					font-size: 1.2rem;
					width:50%;
					line-height: 25px;
					
					
				}
				#mainI{
					height: 100%;
				}
				
				
				.resize{
					width:80%;
				}
				#ele{
					width:100%;
					margin-top: -100%;
					opacity: 0;
		
				}
				#elem{
					width:200%;
					margin-top: -100%;
					position: relative;
					right:40%;
					bottom: 10%;
				   
					
				   
					opacity: 0;
		
				}
				
				.main{
					overflow: hidden;
					box-sizing: border-box;
					
				}
				#gamedis{
					width:80%;
				}
				@media only screen and (max-width: 1145px) {
					.controller{
						flex-direction: row;
						
					}
					h1{
						font-size: 3rem;
					}
					h2{
						font-size: 2rem;
						
					}
					#cont{
						max-width: 250px;
		
					}
				}
				@media only screen and (max-width: 600px) {
					.controller{
						flex-direction: row;
						opacity: 0;
						
					}
					
				}
				@media only screen and (max-width: 450px) {
					.controller{
						flex-direction: row;
						opacity: 0;
						
					}
					h1{
						font-size: 2rem;
					}
					h2{
						font-size: 1rem;
		
					}
					p{
						font-size: 0.6rem;
					}
				
					
				}
			   
			`}</style>
			{typeof window !== "undefined" && (
				<ScrollContainer>
					<NavBar />
					<ScrollPage page="0">
						<IntroSection />
					</ScrollPage>
					<ScrollPage page="1">
						<WhatSection />
					</ScrollPage>
					
					
					<ScrollPage page="2">
						<TrustSection />
					</ScrollPage>
					<ScrollPage page="3">
						<BackingSection />
					</ScrollPage>
					

					<Footer />
				</ScrollContainer>
			)}
		</>
	);
}

export default Index;
