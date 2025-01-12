import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FoodDetails.css';

function FoodDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/foods?id=${id}`)
    .then(response => {
        if (response.data.length === 0) {
            throw new Error('Food not found');
        }
        setFood(response.data[0]);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container food-details">
      <h1 className="my-4">Food Details & Recipe</h1>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{food.name}</h2>
          <p className="card-text">{food.description}</p>
          <h3>Recipe:</h3>
          <p>{food.recipe}</p>
          <button className="btn btn-secondary mt-4" onClick={() => navigate('/')}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;