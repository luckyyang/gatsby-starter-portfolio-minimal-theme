import React from "react";
import "./global.css";
import "./indexpage.css";
import logo from "../../content/images/antalpha/antalphalogo.svg"
import logo2 from "../../content/images/antalpha/antalphalogo2.svg"
import nextpage from "../../content/images/hackerhouse/nextpage.png"
import mianlogo from "../../content/images/antalpha/mainlogo.svg"
import {Seo} from "gatsby-theme-portfolio-minimal";

import check from "../../content/images/antalpha/check.svg"
import arrow from "../../content/images/antalpha/arrow-up-right.svg"
import chatbot from "../../content/images/antalpha/chatbot.jpg"
import geolink from "../../content/images/antalpha/geolink.png"
import produceart from "../../content/images/antalpha/produceart.png"
import didmove from "../../content/images/antalpha/didmove.png"
import dagora from "../../content/images/antalpha/dagora.png"
import lunswap from "../../content/images/antalpha/lunswap.png"
import graphene from "../../content/images/antalpha/graphene.png"
import daospacenft from "../../content/images/antalpha/daospacenft.png"
import daoverselink from "../../content/images/antalpha/daoverselink.png"
import owlad from "../../content/images/antalpha/owlad.png"
import meow from "../../content/images/antalpha/meow.png"

import arrow2 from "../../content/images/antalpha/arrow-up-right -blue.svg"
import arrow3 from "../../content/images/antalpha/arrow-up-right -white.svg"

export default function IndexPage() {
    const imglist = [
        {
            id: '1',
            projectlink: 'https://hackerhouses.notion.site/Chatbot-Trainer-DAO-e4d3e2787c6d4dd18b4914332e04c169',
            imgurl: chatbot,
            text: 'Chatbot Trainer DAO'
        },
        {
            id: '2',
            projectlink: 'https://hackerhouses.notion.site/DAO-Space-NFT-Pass-eff16e60221c4d71b2da0a92778b37b2',
            imgurl: daospacenft,
            text: 'DAO Space NFT Pass'
        },
        {
            id: '3',
            projectlink: 'https://hackerhouses.notion.site/dAgora-4c9cef54885844faa7f1daa550b61497',
            imgurl: dagora,
            text: 'dAgora 协同写作'
        },
        {
            id: '4',
            projectlink: 'https://hackerhouses.notion.site/Graphene-25cef4dd00f74d7ea5b21904afbdebcd',
            imgurl: graphene,
            text: 'Graphene云钱包'
        }, {
            id: '5',
            projectlink: 'https://hackerhouses.notion.site/LunSwap-b1f6a55bf7dd45e78b200e7fb1948cf6',
            imgurl: lunswap,
            text: 'LUNSWAP'
        }, {
            id: '6',
            projectlink: 'https://hackerhouses.notion.site/MOVE-DID-19fbe4cba1cb4f82b302b06fe7836071',
            imgurl: didmove,
            text: 'Move DID'
        }, {
            id: '7',
            projectlink: 'https://hackerhouses.notion.site/GA-06a9da2ff00c4483a11695427b1b615c',
            imgurl: produceart,
            text: 'GA生成艺术首发平台'
        }, {
            id: '8',
            projectlink: 'https://hackerhouses.notion.site/Geolink-5968bae0e3e84b609ed6d402976b4f5c',
            imgurl: geolink,
            text: 'GeoLink'
        }, {
            id: '9',
            projectlink: 'https://hackerhouses.notion.site/DAOVerse-005cd13de6194eff9963de6e7d9246b5',
            imgurl: daoverselink,
            text: 'DAOVERSE.link'
        }, {
            id: '10',
            projectlink: 'https://hackerhouses.notion.site/e61a580f5886494ebe3f441807970f63',
            imgurl: owlad,
            text: 'AD DELIVERY METHODS'
        }, {
            id: '11',
            projectlink: 'https://hackerhouses.notion.site/Meow-Metaverse-a47c6c542e964c4d9e694ca2fcc1dfd6',
            imgurl: meow,
            text: 'Meow Metaverse'
        }
    ]
    let arrowImg = arrow
    const viewAllOnchange =(type)=>{
        if (type="focus") {
       arrowImg = arrow2     
    }else if(type="click"){
        arrowImg = arrow3     
        
        }
    }
    return (
        <>
            <Seo title="Antalpha Labs-Web3 developers community"/> {/* 1、首页 */}
            <div className="antalpha-container">
                {/* 顶部导航 */}
                <div className="antalpha-container1">
                    <div className="antalpha-navigator">
                        <div className="antalpha-logo">
                            <img src={logo}
                                alt=""
                                className="Icon"/>
                            <img src={logo2}
                                alt=""
                                className="Icon"/>
                        </div>
                        <div className="antalpha-navi">
                            <a href="https://labs.antalpha.com/hackerhouse" className="hackerhouse-navi">
                                <span>HackerHouse</span>
                                <div className="line"></div>
                            </a>
                            <a href="#showcase" className="showcase-navi">
                                <span>Showcase</span>
                                <div className="line"></div>
                            </a>
                        </div>
                    </div>
                    {/* 主要内容 */}
                    <div className="antalpha-mianlogo">
                        <img src={mianlogo}
                            alt=""
                            className="Icon"/>
                    </div>

                    <div className="antalpha-intro">
                        <div>Antalpha Labs is a web3 developer community...</div>
                        <a href="https://discord.gg/fhhecXWh">
                            <button className="botton">Join us</button>
                        </a>
                    </div>

                    <a href="#aboutus" className="nextpage">
                        <img src={nextpage}
                            alt=""></img>
                    </a>
                </div>

                {/* 2、关于我们 */}
                <div id="aboutus">
                    <div className="antalpha-containe1">
                        <div className="about-antalpha">
                            <div className="about-antalpha-box">
                            <div className="antalpha-title antalpha-bigtitle">About Antalpha Labs</div>
                            <div className="antalpha-title antalpha-detailintro">Antalpha Labs is a web3 developer community dedicated to helping developers build open source software to promote innovation and application of web3 technology.</div>
                            <div className="antalpha-title antalpha-aboutus">We are here to:</div>
                            <ul className="antalpha-title antalpha-aboutuslist">
                                <li><img src={check} alt=""></img>Learn web3 technology.</li>
                                <li><img src={check} alt=""></img>Build open source projects.</li>
                                <li><img src={check} alt=""></img>Support open source projects by grant and user growth strategy.</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3、案例 */}
                <div id="showcase">
                    <div className="antalpha-showcase">
                        <div className="showcase-title">
                            <div>Showcase</div>
                            <a className="viewALl-href" href="https://hackerhouses.notion.site/1402cb855603469a932054804e9716a6?v=11bf455c9bb04042956d82a7bff200b3">
                                <button className="botton viewall-button" onFocus={()=>viewAllOnchange("focus")}
                                onClick={()=>viewAllOnchange("click")}
                                >View all
                                    {/*arrowImg*/}
                                    {/* <img src={arrow} alt="" className="arrow" ></img>  */}
                            <div className="viewAll-arrow"> </div>
                                </button>
                        </a>
                        </div>
                        <div className="showcase-cutline"></div>
                        <div className="showcase-scroll">
                            <div className="showcase-list">
                                {
                                imglist.map(({
                                    projectlink,
                                    text,
                                    imgurl
                                }, idx) => {
                                    return (
                                        <div className="thefirsthacker-case"
                                            key={
                                                text + idx
                                        }>
                                            <a href={projectlink}
                                                className=" thefirsthacker-linkcase"
                                                hidefocus="true">
                                                <img src={imgurl}
                                                    className="case-photo"
                                                    alt=""/>

                                                <span>{text}</span>
                                            </a>
                                        </div>
                                    )
                                })
                            } </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
