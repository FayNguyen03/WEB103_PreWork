import React from 'react';
import SocialElement from './SocialElement';
import "./Social.css"

type SocialProps = {
    youtube?: string ;
    x?: string; 
    insta?: string; 
    tiktok?: string;
};

const Social: React.FC<SocialProps> = (props:SocialProps) =>{
    return(
       <div className='socialList'>
            {props.youtube && <SocialElement url={"https://www.youtube.com/" + props.youtube} social="youtube" name={props.youtube} />}
            {props.x && <SocialElement url={"https://www.twitter.com/" + props.x} social="x" name={props.x} />}
            {props.tiktok && <SocialElement url={"https://www.tiktok.com/" + props.tiktok} social="tiktok" name={props.tiktok} />}
            {props.insta && <SocialElement url={"https://www.instagram.com/" + props.insta} social="insta" name={props.insta} />}
       </div>
    )
}
export default Social;