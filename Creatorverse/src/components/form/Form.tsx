import React, { useState } from "react";
import "./Form.css"
type FormProps = {
    id?: number;
}

const Form: React.FC<FormProps> = (props: FormProps) => {
  const [name, setName] = useState("");
  const [description, setDescrption] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [youtube, setYoutube] = useState("");
  const [x, setX] = useState("");
  const [insta, setInsta] = useState("");
  const [tiktok, setTiktok] = useState("");

  function handleChange(event:any) {
    setName(event.target.value);
  }

  function handleClick(event:any) {

    event.preventDefault();
  }

  return (
    <div className="form">
      <form onSubmit={handleClick}>
        <h1>Add A New Creator</h1>
        <div className="form-name">
            <h3>Name</h3>
            <input
                type="text"
                placeholder="Influencer's Name"
                value={name}/>
        </div>
        <div className="form-description">
            <h3>Description</h3>
            <textarea
                rows={6}
                placeholder="Influencer's Description"
                value={description}
            />
        </div>
        <div className="form-imageURL">
            <h3>Image URL</h3>
            <input
                type="url"
                placeholder="Influencer's Name"
                value={imageURL}/>
        </div>
        <div className="form-youtube">
            <h3>Youtube</h3>
            <input
                type="url"
                placeholder="Youtube Link (optional)"
                value={youtube}/>
        </div>
        <div className="form-x">
            <h3>Twitter/X</h3>
            <input
                type="url"
                placeholder="Twitter Link (optional)"
                value={x}/>
        </div>
        <div className="form-insta">
            <h3>Instagram</h3>
            <input
                type="url"
                placeholder="Instagram Link (optional)"
                value={insta}/>
        </div>
        <div className="form-tiktok">
            <h3>Tiktok</h3>
            <input
                type="url"
                placeholder="Tiktok Link (optional)"
                value={tiktok}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
