import {useState, useEffect} from 'react';
import Card from '../card/Card';
import './ShowCreators.css';
import {supabase} from '../../client.ts';

const ShowCreators: React.FC= () =>{
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() =>{
        //run after every render
        const fetchData = async () => {
            const {data, error} = await supabase.from("influencers").select();
            if (error){
            console.error('Error fetching data from the database:', error.message);
            setError(error);
            }else{
            setData(data || []);
            }
        };
        fetchData();  
        }, []  
    );
    const dataLength:number = data.length;

    return (dataLength > 0 ? <div className='listCreator'>
        {data.map((element: { id: number; name: string; description: string; youtube?: string; tiktok?: string; insta?: string; x?:string, imageURL: string; }) => {
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