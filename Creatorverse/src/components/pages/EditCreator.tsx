import React from 'react';
import { useParams } from 'react-router';
import Form from '../form/Form';
import { useNavigate } from 'react-router';
import "./EditCreator.css";
const EditCreator: React.FC = () =>{
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    return <div>
        <div id="button" onClick = {() => navigate(`/Creator/${id}`)}><i className="fa-solid fa-xmark"></i> Exit</div>
        <Form id={Number(id)} />
    </div>
}
export default EditCreator;