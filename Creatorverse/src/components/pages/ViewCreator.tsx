import React from 'react';
import {useState, useEffect} from 'react';
import { supabase } from '../../client';
import Social from './Socials/Social';
import "./ViewCreator.css"
type ViewCreatorProps = {
    id:number
}

type Influencer = {
    id: number;
    name:string;
    description: string;
    imageURL: string;
    youtube?: string;
    x?: string; 
    insta?: string; 
    tiktok?: string; 
};

const ViewCreator: React.FC<ViewCreatorProps> = (props:ViewCreatorProps) =>{
    const [data, setData] = useState<Influencer | null>(null);
    const [error, setError] = useState<Error|null>(null);

    useEffect(() =>{
        const fetchData = async () => {
            const {data, error} = await supabase.from("influencers").select().eq('id', props.id);
            if (error){
                console.error('Error fetching data from the database:', error.message);
                setError(error);
            }
            else{
                setData(data && data.length > 0 ? data[0] : null);
            }
        };
        fetchData();  
    }, []  
    );
    const youtube: string | undefined = data ? (data.youtube ? data.youtube : undefined) : undefined;
    const x: string | undefined = data ? (data.x ? data.x : undefined) : undefined;
    const insta: string | undefined = data ? (data.insta ? data.insta : undefined) : undefined;
    const tiktok: string | undefined = data ? (data.tiktok ? data.tiktok : undefined) : undefined;
    return(
        <div className="creatorPageBorder">
            {data ? 
            <div className="creatorPage">
                <div className='imageAndSocial'>
                    <img className="creatorImg" src={data.imageURL}/>
                    <Social youtube={youtube} x={data.x} tiktok={data.tiktok}  insta={data.insta} />
                </div>
                <div className='description'>
                    <h1 className="creatorName">{data.name}</h1>
                    <p className="creatorDescription">{data.description}</p>
                </div>
                
            </div> : <h1>No Creator Found</h1>}
        </div>
    )
}
export default ViewCreator;