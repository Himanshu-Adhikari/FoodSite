import React from 'react';
import brainSushi from '..//assets/brain-sushi.jpeg';

function Card() {
  return (
    <div
      className="card mt-4"
      style={{ width: "18rem", fontFamily: "Pacifico", maxHeight: "360px" }}
    >
      <img src={brainSushi} alt="Brain Sushi" className="card-img-top" style={{ maxHeight: "180px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">Brain Sushi</h5>
        <p className="card-text">eerie sushi that will feed a crowd of zombies</p>
        <div className="container w-100">
          <select className="m-2 h-100 rounded" style={{ backgroundColor: "green" }}>
            {Array.from(Array(6), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select className="m-2 h-100 rounded">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
        </div>
        <div className="d-inline h-100 fs-5">Total Price :</div>
      </div>
    </div>
  );
}

export default Card;
