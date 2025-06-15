import React from 'react';
import {useState, useEffect} from 'react';
import { supabase } from '../../client';
import Social from './Socials/SocialElement';

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
                setData(data || []);
            }
        };
        fetchData();  
    }, []  
    );
    const youtube: string | null = data ? (data.youtube ? data.youtube : null) : null;
    const x: string | null = data ? (data.x ? data.x : null) : null;
    const insta: string | null = data ? (data.insta ? data.insta : null) : null;
    const tiktok: string | null = data ? (data.tiktok ? data.tiktok : null) : null;
    return(
        <div>
            {data && 
            <div className="creatorPage">
                <img className="creatorImg" src={data.imageURL}/>
                <h1 className="creatorName">{data.name}</h1>
                <p className="creatorDescription">{data.description}</p>
                <Social youtube={youtube} x={data.x} tiktok={data.tiktok}  insta={data.insta} />
            </div> }
        </div>
    )
}
export default ViewCreator;