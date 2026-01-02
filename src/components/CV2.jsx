import React from "react";
import '../CV2.css';
import pfp from '../assets/cv_pfp_square.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function CV2() {
    return (

        <div>
        <div className="profile">
            <img className="pfp-pic" alt="Profiilikuva" src={pfp} />
            <h1>Juho Valtavaara</h1>
            <div className="location">
            <LocationOnIcon />
            <p>Oulu</p>
            </div>
            <p>Tietojenkäsittelytieteiden maisteri ja web-kehittäjä. Kokenut kommunikoija ja tiimityöntekijä vapaaehtoistyön kautta.</p>
        </div>

        <div className="card-layout">
            <h2>Projektit</h2>
            <a className="project-link" target="_blank" href="https://github.com/juvalta/cv">CV</a>
            <a className="project-link" target="_blank" href="https://store.steampowered.com/app/607770/Moonatees/?l=finnish">Moonatees</a>
            <a className="project-link" target="_blank" href="https://github.com/juvalta?tab=repositories">Kaikki repot</a>
            <h3>Palikkatakomon nettisivut</h3>
            
                <a className="demo-link" target="_blank" href="https://infamousq.github.io/palikkatakomo_frontpage/">Demo</a>
                <a className="project-link" target="_blank" href="https://github.com/InfamousQ/palikkatakomo_frontpage/tree/deploy" >Github</a>
            
            <h3>Demosivu satunnaisille projekteille</h3>
            
                <a className="demo-link" target="_blank" href="https://juvalta.github.io/blogi/">Demo</a>
                <a className="project-link" target="_blank" href="https://github.com/juvalta/blogi">Github</a>
            
            <div className="margin-bottom-5-percent" />
            
        </div>

        <div className="card-layout">
            <h2>Koulutus</h2>
            <h3>Filosofian maisteri, tietojenkäsittelytieteet</h3>
            <h3>Luonnontieteiden kandidaatti, tietojenkäsittelytieteet</h3>
        </div>

        <div className="card-layout">
            <h2>Kokemus</h2>

            <h3>Projektimanageri School of Gamingille
                yliopistoprojektilla, 7.1.-14.5.21</h3>
            <ul className="experience-list">
                <li>Juhlavaraussysteemin kehitys</li>
                <li>React, Node.js, MongoDB, Auth0-integraatio</li>
            </ul>

            <h3>Koodikärpät-kestätyö (2016 & 2017, 4kk)</h3>
            <ul className="experience-list">
                <li>Unity3D-kehitys</li>
                <li>Moonatees-pelin kehitys</li>
            </ul>

            <h3>Suhdevastaava, Blanko ry</h3>
            <ul className="experience-list">
                <li>Rahan kerääminen n. 22000 euron verran</li>
                <li>Suhdetiimin managerointi</li>
                <li>Rekrytapahtumien järjestäminen</li>
                <li>Yhteistyökumppaneiden värväys</li>
            </ul>

            <h3>Varajäsen, Palikkatakomo ry, 2024</h3>
            <ul className="experience-list">
                <li>Palikkatakomon nettisivujen käytettävyystestaus ja
                    uudelleentoteutus</li>
                <li>Somemanagerointi</li>
            </ul>

            <h3>Puheenjohtaja, Palikkatakomo ry, 2025</h3>
            <ul className="experience-list">
                <li>Kokousten johtaminen</li>
                <li>Edustusvastuut</li>
                <li>Delegointi</li>
            </ul>
            
        </div>

        <div className="card-layout">
            <h2>Kielitaito</h2>
            <ul className="experience-list">
                <li>Suomi (äidinkieli)</li>
                <li>Englanti (erinomainen)</li>
                <li>Ruotsi (B1/B2)</li>
                <li>Saksa (B1/B2)</li>
                <li>Italia (A1/A2)</li>
                <li>Venäjä (A1)</li>
            </ul>
        </div>

        </div>

    )
} export default CV2