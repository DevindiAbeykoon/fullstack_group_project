import React, { useState } from "react";
import axios from "axios";

import "./Addroom.css";

function Addroom() {
  const BASE_URL = "http://localhost:5000";
  const [roomData, setRoomData] = useState({
    title: "",
    description: "",
    price: 0,
    size: "",
    occupancy: "",
    amenities: "",
    image: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setRoomData({ ...roomData, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${BASE_URL}/api/rooms`, roomData);
      console.log("Room created successfully");
    } catch (error) {
      console.error("Error creating room:", error);
    }
  };

  return (
    <div className="add-room-container bg-light p-3">
      <h1>Add a New Room</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={roomData.title}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={roomData.description}
          onChange={handleChange}
          required
        />

        <label>Price</label>
        <input
          type="text"
          name="price"
          value={roomData.price}
          onChange={handleChange}
          required
        />

        <label>Size</label>
        <input
          type="text"
          name="size"
          value={roomData.size}
          onChange={handleChange}
          required
        />

        <label>Occupancy</label>
        <input
          type="text"
          name="occupancy"
          value={roomData.occupancy}
          onChange={handleChange}
          required
        />

        <label>Amenities</label>
        <textarea
          name="amenities"
          value={roomData.amenities}
          onChange={handleChange}
          required
        />

        <label>Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {roomData.image && (
          <img
            src={roomData.image}
            alt="Room Preview"
            className="image-preview"
          />
        )}

        <button className="btn btn-outline-dark" type="submit">
          Add Room
        </button>
      </form>
    </div>
  );
}

export default Addroom;
