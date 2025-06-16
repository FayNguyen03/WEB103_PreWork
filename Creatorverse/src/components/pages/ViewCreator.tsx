import React from 'react';
import { useParams } from 'react-router';
import {useState, useEffect} from 'react';
import { supabase } from '../../client';
import Social from './Socials/Social';
import "./ViewCreator.css"
import { useNavigate } from 'react-router';

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

const ViewCreator: React.FC = () =>{
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<Influencer | null>(null);
    const [error, setError] = useState<Error|null>(null);
    const navigate = useNavigate();
    useEffect(() =>{
        const fetchData = async () => {
            const {data, error} = await supabase.from("influencers").select().eq('id', Number(id));
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
                    <div className="buttonSection" >
                        <div id="button" onClick = {() => navigate(`/Edit/${data.id}`)}><i className="fa-solid fa-pen-to-square"></i> Edit</div>
                        <div id="button" onClick = {() => navigate(`/Delete/${data.id}`)}><i className="fa-solid fa-eraser"></i> Delete This Creator</div>
                    </div>
                </div>
                
            </div> : <h1>No Creator Found</h1>}
        </div>
    )
}
export default ViewCreator;