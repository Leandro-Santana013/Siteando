import React, { useState, useEffect, useContext } from 'react'
import "./Landing.css"
import { Banner, Footer } from "../../components"
import bannerCompany from "../../assets/image.png"
import bannerLogo from "../../assets/imagelogo.png"
import ftb from "../../assets/ftb.jpg"

const Landing = () => {

    const circles = Array.from({ length: 9 });
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
            <div className='main'>
                <div className='side'>
                    <div className='prod'>
                        <div className='content-text-prod'>
                            <h2><strong>Produtive<br />Free and easy<br />New</strong></h2>
                            <p>atora</p>
                        </div>
                    </div>
                    <div className='prod1'><img src={bannerLogo} alt="" className='bannerlogo' /></div>
                    <div className='prod2'>
                        <h2>Lorem ipsum, dolor sit amet consectetur </h2>

                        <p>amet consectetur adipisicing elit. amet consectetur adipisicing elit. Laboriosam harum rerum quis at, ing elit. Laboriosam harum rerum quis earum quos dolores amet asperiores voluptate placeat corporis voluptates nisi neque Laboriosam harum rerum quis at, earum quos dolores amet asperiores voluptate placeat corporis voluptates nisi neque beatae nulla. Dicta, quasi! Optio, porro.</p>
                        <img src={ftb} alt="" className='bannerlogo' />
                        <h3>Free and easy...</h3>
                        <p>amet consectetur adipisicing elit. amet consectetur adipisicing elit. Laboriosam harum rerum quis at, ing elit. Laboriosam harum rerum</p>
                    </div>
                </div>
                <div className='main-content'>
                    <nav>
                        <div className='content1'>
                            <div class="magnifier">
                                <div class="circle-lupa"></div>
                                <div class="handle"></div>
                            </div>
                            <div class="container-menu">
                                {circles.map((_, index) => (
                                    <div key={index} className="circle"></div>
                                ))}
                            </div>
                        </div>
                        <div className='content2'>
                            <h4 className='h4-landing'>company</h4>
                            <h4 className='h4-landing'>Sing-in</h4>
                            <div className='btn-start'>get started</div>
                        </div>
                    </nav>
                    <div className='down-bar down-bar-black'>
                        <div className='news-menu' style={{ gap: 0 }} >
                            <i className="fa-solid fa-bars menu-icon"></i>
                            <h2 className='h2-news'>News</h2>
                        </div>
                        <div className='news-menu'>
                            <p>Cheque mais processos aqui</p>
                            <div className='icon'>&gt;</div>
                        </div>
                    </div>
                    <Banner />
                    
                    
                    <div className='company'>
                        <div className='down-bar down-bar-white'>
                            <div className='news-menu' style={{ gap: 0 }}>
                                <i className="fa-solid fa-bars menu-icon"/>
                                <h2 className='h2-news'>Company</h2>
                            </div>
                            <div className='news-menu'>
                                <p>Cheque mais processos aqui</p>
                                <div className='icon'>&gt;</div>
                            </div>
                        </div>
                        <img src={bannerCompany} alt="" className='logocompany'/>
                    </div> 
                </div>
            </div>

        </>
    )
}


export default Landing;