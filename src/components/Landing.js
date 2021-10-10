import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'


function Landing() {
    return (
        <div className="body">
            <br/>
            <br/>
                <br/>
                <br/>
                <br/>
            <div className="hero">
                <h3><span className="gradient">résumé buildr</ span></h3>
                <p>made with ❤️ by <a href="https://twitter.com/tomgrigory" target="_blank">@tomgrigory</a></p>
                <br/>
                <br/>

            <h1>make a <span className="gradient">kickass resume</span> that <br/><span className="gradient">stands out</span>  in minutes </h1>
            <p className="subheading">build out a resume which will make your <br/> “employer fall in love at first sight”	</p>
            <button style={{marginRight: "16px", }}>
                <a className="white" href="/form">
                    show me what you’ve got
                </a>
            </button>
            <a href="https://www.figma.com/community/file/1028526282008491820" target="_blank">
                    see demo
                </a>
            </div>
            <br/>
            <br/>
            <br/>
            <div>
                <div id="main">
                    <img id="sidebar" src="https://i.imgur.com/I20653k.png" width="100px" />
                    <br/>
                    <p id="page-wrap">+ do it in 2 clicks, instead of 500 popups and 100 redirects</p>
                </div>
            </div>

            <div>
            <div id="main">
                    <img id="sidebar" src="https://i.imgur.com/anehbnX.png" width="100px" />
                    <br/>
                    <br/>
                    <br/>
                    <p id="page-wrap">+ the design is so good, your employer will want to lick it.</p>
                </div>
            </div>
        </div>
    )
}

export default Landing
