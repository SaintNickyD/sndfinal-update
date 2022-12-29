import React from "react";
import "./$$$.css";
import Product from "./Product";

function $$$() {

    return (
    <div className="money__container">
      <h1 className="money__top">Merchandise & Donations</h1>
      <div className="money__images">
        <img className="money__imageRose"
             src="https://cdn.discordapp.com/attachments/869604147291357278/885227956375552000/pngwing.com.png"
             alt="" />

        <img className="money__imageMid"
             src="https://cdn.discordapp.com/attachments/869604147291357278/885231277719056435/pngwing.com_1.png"
             alt="" />

        <img className="money__imageRoseRight" 
             src="https://cdn.discordapp.com/attachments/869604147291357278/885228371376734238/image.png"
             alt="" />    
        </div>
              <div className="money__row" >
                <Product
                  id="1"
                  title='The Saint Nicky D Jacket: Limited Edition, Corinthian Leather Wallet Not Included'
                  price={99.21}
                  image="https://saintnickyd.github.io/project-test/img/logo.png.png"
                  rating={5} />
                
                <Product
                  id="2"
                  title='Donation: #TipsInTheHat  👍👍'
                  price={5.12}
                  image="https://panels-images.twitch.tv/panel-568153850-image-80aa6ba2-b78e-43a1-9f87-a4e9a1a4f4b1"
                  rating={1} 
                />
              </div>
      
              <div className="money__row2">
                <Product
                  id="3"
                  title='Two Hours of Tarkov: This right here is a bargain, we are 100% coming out fat'
                  price={30.53}
                  image="https://static-cdn.jtvnw.net/ttv-boxart/Escape%20from%20Tarkov-285x380.jpg"
                  rating={2} 
                />
                <Product
                  id="4"
                  title='OnTop Hat: We Actually sold out of the samples before we took the Photo'
                  price={25.76}
                  image="https://cdn.discordapp.com/attachments/869604147291357278/885153538714505256/unnamed.jpg"
                  rating={4}
                />
                <Product
                  id="5"
                  title='A Toy Whale(Out Of Stock)'
                  price={69.15}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQir7GjGN4YaQGRZWIsqQJnr-jVV5Cfr4JBQ&usqp=CAU"
                  rating={6}
                />
              </div>
      
              <div className="money__row3">
                <Product
                  id="6"
                  title='Buy a Raffle to Donate A Car!'
                  price={169.34}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3ZCYUPCZiirB7UfMXphcbBBdMV3AM8vuCg&usqp=CAU"
                  rating={5}
                />
              </div>
            </div>
        );
      }

export default $$$;

