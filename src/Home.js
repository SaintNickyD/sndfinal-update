import React from "react";
import "./Home.css";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Home() {
    return (
      <div className="home"> 
        <div className="home__logo">
        <img  className="header__leftLogo"
            src="https://cdn.discordapp.com/attachments/869604147291357278/882107563041239050/pngwing.com_1.png"></img>

          <img
            className="header__logo"
            src="https://saintnickyd.github.io/project-test/img/logo.png.png" />
          <img  className="header__rightLogo"
            src="https://cdn.discordapp.com/attachments/869604147291357278/882108623126405150/tree-clipart-transparent-90.png"></img>
      </div>
      
      <div className="home__sub">
            <div className="home__currentGames">
            <h1>Current Games</h1>
            <ul class="currentGames">
                <li>Escape From Tarkov</li>
                <li>Call Of Duty: Modern Warfare 2</li>
                <li>Pubg</li>
                <li>Civ 6</li>
                <li>Battlefield 2042</li>
                <li>Ark</li>
                <li>CS:GO</li>
                <li>Assassins Creed: Valhalla</li>
                <li>Among Us</li>
                <li>Clash of Clans</li>
                <li>Rainbow Six: Siege</li>
            </ul>
            </div>
            <div className="home__featClip">
            <h2>Featured Clip of the Month</h2>
              <div class="home__videoContent">
                  <iframe width="1160" height="500" src="https://www.youtube.com/embed/B7p5lLDr6Rc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        <div className="home__social">
          <h3>Socials</h3>
          <div className="social">
             <div className="twitch-btn">
                <a href="https://www.twitch.tv/saintnickyd"><FaTwitch size={40} /></a>
                 </div>
                <span></span>
            <div className="youtube-btn">
                <a href="https://www.youtube.com/channel/UCCME9HvA2C7H05CIbdh5S0Q"><FaYoutube size={40}/></a>
                </div>
                <span></span>
            <div className="discord-btn">
                <a href="https://discord.gg/vm2YksxD"><FaDiscord size={40}/></a>
                </div>
                <span></span>
            <div className="facebook-btn">
                <a href="https://www.facebook.com/nicholas.dimmick"><FaFacebook size={40}/></a>
                </div>
                <span></span>
                </div>
                </div>
      </div>
    </div>
    );
  }
  
  export default Home;
  