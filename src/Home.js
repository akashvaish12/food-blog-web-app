import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFoodsRequest } from './redux/actions/actions';
import './Home.css';

function Home() {
  const dispatch = useDispatch();
  const { foods, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchFoodsRequest());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="Home">
      <header className="Home-header">
        <h1 className="my-4">Food Items</h1>
        <ul className="list-group">
          {foods.map(food => (
            <li key={food.id} className="list-group-item">
              <h2>{food.name}</h2>
              <p>{food.description}</p>
              <Link to={`/food/${food.id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Home;