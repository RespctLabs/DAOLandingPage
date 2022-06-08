import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import classnames from "classnames";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import What from "./what";
function whts(){
    return(
        <>
        <div className=" text-7xl text-[#aaaaaa] mr-10 text-center mt-[15%]">Our Offerings</div>
        <div className="flex flex-col h-[66.66%] items-center justify-center mt-[12%]">
            <div className="flex flex-row items-center justify-center  h-[25%] ml-[10%] mt-[6%] ">
                <div className="w-[44%] h-[100%] overflow-hidden bg-[#17181e] ml-15">
                    <iframe src='https://my.spline.design/untitled-277535cee14ae47e52e10ea156e8e816/' frameBorder='0' width='115%' height='100%'></iframe>
                </div>
                <div className="relative w-[50%] mt-20  h-[100%] ml-20">
                    <h1 className=" text-6xl text-[#aaaaaa] mr-10">Game<br></br> Discovery</h1>
                    <p className="mt-[3%] w-[70%]">Discover the trending metaverse projects and become a part of the community.</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center  h-[25%] ml-[10%] mt-[6%] ">
                <div className="relative w-[50%] mt-20  h-[100%] ml-20">
                    <h1 className=" text-6xl text-[#aaaaaa]  mr-10">Respct<br></br>Id</h1>
                    <p className="mt-[3%] w-[70%]">One click login and your passport to any game on any chain. Access INOs, NFTs, and more from any game</p>
                </div>
                <div className="w-[44%] h-[100%] overflow-hidden bg-[#17181e] mr-[16%] mb-[10%]">
                    <iframe src='https://my.spline.design/daftpunkcopy-4e88a64f9e5fe23d51fbb965f89e1a48/' frameBorder='0' width='110%' height='100%'></iframe>
                    
                </div>
                
            </div>
            <div className="flex flex-row items-center justify-center  h-[25%] ml-[10%] mt-[6%] ">
                <div className="w-[44%] h-[100%] overflow-hidden bg-[#17181e] ml-15 mb-20">
                    <iframe src='https://my.spline.design/untitled-fe48e256a216b95475e8a081d06c8038/' frameBorder='0' width='110%' height='100%'></iframe>
             
                </div>
                <div className="relative w-[50%] mt-20  h-[100%] ml-20">
                    <h1 className=" text-6xl text-[#aaaaaa] mr-10">NFT<br></br> Marketplace</h1>
                    <p className="mt-[3%] w-[70%]">Cross game NFT marketplace where anyone can lend and borrow game assets. Get access to INO from early metaverse projects.</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center  h-[25%] ml-[10%] mt-[6%] ">
                <div className="relative w-[50%] mt-20  h-[100%] ml-20">
                    <h1 className=" text-6xl text-[#aaaaaa]  mr-10">Platform<br></br> Missions</h1>
                    <p className="mt-[3%] w-[70%]">Easy yet engaging Missions and Challenges for players to complete and get rewarded from games & guilds</p>
                </div>
                <div className="w-[44%] h-[100%] overflow-hidden bg-[#17181e] ml-15">
                    <iframe src='https://my.spline.design/untitled-277535cee14ae47e52e10ea156e8e816/' frameBorder='0' width='110%' height='100%'></iframe>
                </div>
                
            </div>
        </div>        

        </>
    );
}
export default whts;

