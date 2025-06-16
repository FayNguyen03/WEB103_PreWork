// components/pages/DeleteCreator.tsx
import React from "react";
import { useNavigate, useParams } from "react-router";
import { supabase } from "../../client";
import "./DeleteCreator.css"
const DeleteCreator: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!id) return;

    const { error } = await supabase.from("influencers").delete().eq("id", id);
    if (error) {
      console.error("Failed to delete creator:", error.message);
    } else {
      navigate("/"); 
    }
  };

  const handleCancel = () => {
    navigate(`/Creator/${id}`);
  };

  return (
    <div className="delete-warning-page">
      <h2>Are you sure you want to delete this creator?</h2>
      <div className="delete-buttons">
        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
        <button type="button" className="btn btn-primary" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteCreator;
