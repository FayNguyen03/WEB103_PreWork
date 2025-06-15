import React from 'react';
import './Social.css'

type SocialProps = {
  youtube?: string;
  x?: string; 
  insta?: string; 
  tiktok?: string; 
};

const Social: React.FC<SocialProps> = (props:SocialProps) =>{
    return (<div className="cardSocial">
        {props.youtube && <a href={"https://www.youtube.com/" + props.youtube}><i id="icon" className="fa-brands fa-youtube"/></a>}
        {props.x && <a href={"https://www.twitter.com/" + props.x}><i id="icon" className="fa-brands fa-x-twitter"/></a>}
        {props.insta && <a href={"https://www.instagram.com/" + props.insta}><i id="icon" className="fa-brands fa-instagram"/></a>}
        {props.tiktok && <a href={"https://www.tiktok.com/" + props.tiktok}><i id="icon" className="fa-brands fa-tiktok"/></a>}
    </div>)
};
export default Social;