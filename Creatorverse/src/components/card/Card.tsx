import React from "react";
import Social from "./Social";
import "./Card.css";

type CardProps = {
    id: number;
    name:string;
    description: string;
    imageURL: string;
    youtube?: string;
    x?: string; 
    insta?: string; 
    tiktok?: string; 
};

const Card: React.FC<CardProps> = (props:CardProps) => {
    return(
            <div className="cardContainer">
                <h1 className="cardName">{props.name}</h1>
                <img src={props.imageURL} alt={props.name} className="cardImage" />
                <Social youtube={props.youtube} insta={props.insta} x={props.x} tiktok={props.tiktok}/>
                <p className="cardDescription">{props.description}</p>
            </div>
    )
}

export default Card;