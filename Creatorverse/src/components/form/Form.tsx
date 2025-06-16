import React, { useState, useEffect } from "react";
import "./Form.css"
import { supabase } from "../../client";
import { useNavigate } from "react-router";
type FormProps = {
    id?: number;
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

const Form: React.FC<FormProps> = (props: FormProps) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [youtube, setYoutube] = useState("");
    const [x, setX] = useState("");
    const [insta, setInsta] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [data, setData] = useState<Influencer | null>(null);
    const [error, setError] = useState<Error|null>(null);
    const navigate = useNavigate();
    useEffect(() => {
    const fetchData = async () => {
        
        if (props.id) {
            const { data, error } = await supabase
            .from("influencers")
            .select()
            .eq("id", props.id)
            .single();

            if (error) {
            console.error("Error fetching influencer:", error.message);
            setError(error);
            } else if (data) {
            setName(data.name);
            setDescription(data.description);
            setImageURL(data.imageURL);
            setYoutube(data.youtube || "");
            setX(data.x || "");
            setInsta(data.insta || "");
            setTiktok(data.tiktok || "");
            }
        }
        };

        fetchData();
    }, [props.id]);
    

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newInfluencer: Omit<Influencer, "id"> = {
            name,
            description,
            imageURL,
            youtube,
            x,
            insta,
            tiktok,
            };

        let result;
        if (props.id) {
            result = await supabase
                .from("influencers")
                .update(newInfluencer)
                .eq("id", props.id);
        } else {
            result = await supabase.from("influencers").insert([newInfluencer]);
        }

        if (result.error) {
            console.error("Error saving to Supabase:", result.error.message);
            setError(result.error);
            alert(error?.message);
        } else {
            alert("Influencer saved successfully!");
        }
        navigate('/');
    };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>{props.id ? "Edit Creator" : "Add A New Creator"}</h1>
        <div className="form-name">
            <h3>Name</h3>
            <input
                type="text"
                required
                placeholder="Influencer's Name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-description">
            <h3>Description</h3>
            <textarea
                rows={6}
                required
                placeholder="Influencer's Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div className="form-imageURL">
            <h3>Image URL</h3>
            <input
                type="url"
                required
                placeholder="Influencer's Name"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}/>
        </div>
        <div className="form-youtube">
            <h3><i className = "fa-brands fa-youtube" /> Youtube</h3>
            <input
                type="text"
                required
                placeholder="Youtube Link (optional)"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}/>
        </div>
        <div className="form-x">
            <h3><i className = "fa-brands fa-x-twitter" /> Twitter/X</h3>
            <input
                type="text"
                placeholder="Twitter Link (optional)"
                value={x}
                onChange={(e) => setX(e.target.value)}/>
        </div>
        <div className="form-insta">
            <h3><i className = "fa-brands fa-instagram" /> Instagram</h3>
            <input
                type="text"
                placeholder="Instagram Link (optional)"
                value={insta}
                onChange={(e) => setInsta(e.target.value)}/>
        </div>
        <div className="form-tiktok">
            <h3><i className = "fa-brands fa-tiktok" /> Tiktok </h3>
            <input
                type="text"
                placeholder="Tiktok Link (optional)"
                value={tiktok}
                onChange={(e) => setTiktok(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
