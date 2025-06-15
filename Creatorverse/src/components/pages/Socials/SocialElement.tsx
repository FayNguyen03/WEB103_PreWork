import React from 'react';
import "./SocialElement.css";
type SocialElementProps = {
    social: string;
    url: string;
    name: string;
};

const SocialElement: React.FC<SocialElementProps> = (props:SocialElementProps) =>{
    var icon: string = "";
    switch(props.social) { 
        case "youtube": { 
            icon = "fa-brands fa-youtube";
            break; 
        } 
        case "x": { 
            //statements;
            icon = "fa-brands fa-x-twitter"; 
            break; 
        } 
        case "tiktok":{ 
            //statements; 
            icon = "fa-brands fa-tiktok"; 
            break; 
        } 
        case "insta":{ 
            //statements; 
            icon = "fa-brands fa-instagram"; 
            break; 
        }
    } 
    return(
        <div className="social-link"><a href={props.url}><i className={icon} /> {props.name}</a></div>
    )
}
export default SocialElement;