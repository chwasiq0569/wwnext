import React from 'react'
import NFTDriven from "../../assets/nftdrivenicon.webp";
import CryptoPowered from "../../assets/grenadeicon.webp";
import PlayEarnBet from "../../assets/playearnbeticon.webp";

import './ThreeTypeNFT.css';

const ThreeTypeNFT = () => {
    return (
        <div>
            <div className="ThreeTypeSectionContainer">
                <div className="ThreeTypeSectionContainerCentered">
                    <div className="ThreeTypeSectionBox">
                        <img loading="lazy" src={NFTDriven} alt="" />
                        <h5>A Battlefield In Your Browser</h5>
                        {/* <p>Equip an NFT skin to earn <span className="dollar-span">$</span><span className="warx-span">WARX</span> tokens for your performance and time spent in game.</p> */}
                        <p>Play conquest game mode with vehicles straight from your browser</p>
                    </div>
                    <div className="ThreeTypeSectionBox">
                        <img loading="lazy" src={CryptoPowered} alt="" />
                        <h5>Mobile Coming Soon</h5>
                        <p>Android and iOS apps will launch in November</p>
                    </div>
                    <div className="ThreeTypeSectionBox">
                        <img loading="lazy" src={PlayEarnBet} alt="" />
                        <h5>Steam Launch Countdown</h5>
                        <p>Less than a month until World War Next releases on Steam.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeTypeNFT