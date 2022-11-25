import React from 'react'
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from '@mui/icons-material/Share';
import { RWebShare } from "react-web-share";



function footer() {
  return (
    <div className='footer'>
      <a href="/">
        <h2 style={{ color: "#fff" }}>CryptoTracker.</h2>
      </a>
      <h4 className='madeBy'>Made By Rahul Jaiswal</h4>
      <div className="socials-flex">
        <a href="https://www.facebook.com/rahul123295">
          <FacebookIcon className="socials-icon" />
        </a>
        <a href="/">
          <InstagramIcon className="socials-icon" />
        </a>
        <a href="mailto:rahul.jaiswal1997@gmail.com">
          <EmailIcon className="socials-icon" />
        </a>
        <RWebShare
          data={{
            text: "Crypto Dashboard made by Rahul Jaiswal using React JS in 2022",
            url: "https://accio-cryptotracker.netlify.app/",
            title: "Crypto Dashboard",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <ShareIcon className="socials-icon" />
        </RWebShare>

</div>
    </div>
  )
}

export default footer
