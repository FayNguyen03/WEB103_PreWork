import React from 'react';
import Card from '../card/Card';
import './ShowCreators.css';

type ShowCreatorsProps ={
    data:  {
        id: number;
        name: string;
        description: string;
        youtube?: string;
        tiktok?: string;
        insta?: string;
        x?: string;
        imageURL: string;
    }[];
}
const ShowCreators: React.FC<ShowCreatorsProps>= (props:ShowCreatorsProps) =>{
    const dataLength:number = props.data.length;

    return (dataLength > 0 ? <div className='listCreator'>
        {props.data.map((element: { id: number; name: string; description: string; youtube?: string; tiktok?: string; insta?: string; x?:string, imageURL: string; }) => {
            return <Card
                id={element.id} 
                name={element.name}  
                description={element.description}  
                youtube={element.youtube}  
                tiktok = {element.tiktok}  
                insta={element.insta}  
                x={element.x}
                imageURL={element.imageURL} />
        })}
        </div> : 
        <h1>No Creators Added</h1>
    )
}
export default ShowCreators;