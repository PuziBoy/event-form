import "./Eventform.scss";
import { useState } from 'react';
function Eventform() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [coordinates, setCoordinates] = useState("");


    let user_data = {
        title: title,
        description: description,
        coordinates: coordinates,
    };

    const options = {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_data)
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        fetch("http://157.230.107.52/Data", options);
    }
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <form id="creation" onSubmit={handleSubmit}>
                    <input type="text" 
                    className="fadeIn second"  
                    placeholder="Event Name" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea name="message" 
                    className="form-control" 
                    id="message" 
                    cols="30" 
                    rows="4"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                     ></textarea>
                    <input type="text" 
                    className="fadeIn third" 
                    placeholder="Address" 
                    value={coordinates}
                    onChange={(e) => setCoordinates(e.target.value)}
                    />
                    <input type="submit" className="fadeIn fourth" value="Create" />
                </form>

            </div>
        </div>
    );
}
export default Eventform;