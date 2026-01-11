import React from "react";
import '../CV2.css';
import pfp from '../assets/cv_pfp_square.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function CV2_EN() {
    return (

        <div>
        <div className="profile">
            <img className="pfp-pic" alt="Profile picture" src={pfp} />
            <h1>Juho Valtavaara</h1>
            <div className="location">
            <LocationOnIcon />
            <p>Oulu</p>
            </div>
            <p>Web developer and Master of Science in Information Processing Science. Experienced communicator and teamplayer through volunteering.</p>
        </div>

        <div className="card-layout">
            <h2>Projects</h2>
            <a className="project-link" target="_blank" href="https://github.com/juvalta/cv">CV</a>
            <a className="project-link" target="_blank" href="https://store.steampowered.com/app/607770/Moonatees/?l=finnish">Moonatees</a>
            <a className="project-link" target="_blank" href="https://github.com/interact-rg/SmartCanvas/tree/main">SmartCanvas</a>
            <a className="project-link" target="_blank" href="https://github.com/juvalta?tab=repositories">All repos</a>
            <h3>Palikkatakomo's website</h3>
            
                <a className="demo-link" target="_blank" href="https://infamousq.github.io/palikkatakomo_frontpage/">Demo</a>
                <a className="project-link" target="_blank" href="https://github.com/InfamousQ/palikkatakomo_frontpage/tree/deploy" >GitHub</a>
            
            <h3>Demo page for random projects</h3>
            
                <a className="demo-link" target="_blank" href="https://juvalta.github.io/blogi/">Demo</a>
                <a className="project-link" target="_blank" href="https://github.com/juvalta/blogi">GitHub</a>
            
            <div className="margin-bottom-5-percent" />
            
        </div>

        <div className="card-layout">
            <h2>Education</h2>
            <h3>Master of Science, Information Processing Science</h3>
            <h3>Bachelor of Science, Information Processing Science</h3>
        </div>

        <div className="card-layout">
            <h2>Experience</h2>

            <h3>Project manager for School of Gaming
                for a university course, 7.1.-14.5.21</h3>
            <ul className="experience-list">
                <li>Party reservation system development</li>
                <li>React, Node.js, MongoDB, Auth0-integration</li>
            </ul>

            <h3>Koodikärpät summer job(2016 & 2017, 4kk)</h3>
            <ul className="experience-list">
                <li>Unity3D-development</li>
                <li>Moonatees game development</li>
            </ul>

            <h3>Head of relations, Blanko ry</h3>
            <ul className="experience-list">
                <li>22000 euros of funding raised through contracts</li>
                <li>Managing the relations team</li>
                <li>Organizing recruitment events</li>
                <li>Recruiting businesses as collaborators face-to-face and through email</li>
            </ul>

            <h3>Supplementary member, Palikkatakomo ry, 2024</h3>
            <ul className="experience-list">
                <li>Arranging a usability test for Palikkatakomo's website
                    and redevelopment of said website
                </li>
                <li>Social media management</li>
            </ul>

            <h3>Chair of board, Palikkatakomo ry, 2025</h3>
            <ul className="experience-list">
                <li>Leading meetings</li>
                <li>Representative duties</li>
                <li>Delegation of duties</li>
            </ul>
            
        </div>

        <div className="card-layout">
            <h2>Programming experience</h2>
            <ul className="experience-list">
                <li>Web development using React (eg. MongoDB, Figma, MaterialUI, Auth0-integration, Lighthouse)</li>
                <li>HTML- and CSS-development inside WSL2 (Ubuntu, Python venv, Lektor CMS, WAVE evaluation tool)</li>
                <li>Java</li>
                <li>C# in Unity3D (about 6 months of Unity experience)</li>
                <li>C++</li>
                <li>C</li>
                <li>Python</li>
            </ul>
        </div>

        <div className="card-layout">
            <h2>Languages</h2>
            <ul className="experience-list">
                <li>Finnish (native)</li>
                <li>English (excellent)</li>
                <li>Swedish (B1/B2)</li>
                <li>German (B1/B2)</li>
                <li>Italian (A1/A2)</li>
                <li>Russian (A1)</li>
            </ul>
        </div>

        </div>

    )
} export default CV2_EN