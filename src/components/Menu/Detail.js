import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CardDetails() {
  let { id } = useParams();
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  let [info, setInfo] = useState([]);
  let { name, image, species, origin, location, gender, status } = info;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      console.log(data);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="card-details">
        

        <div className="content">
          <h1 className="text-center">{name}</h1>
          <div className="">
            <span className="bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="bold">Location : </span>
            {location?.name}
          </div>
          <div className="">
            <span className="bold">Origin : </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="bold">Species : </span>
            {species}
          </div>
          <div className="">
            <span className="bold">Status : </span>
            {status}
          </div>
        </div>
        <div className="card-intro">
          <img src={image} alt="" className="img-bold" />
        </div>
      </div>
    </div>
  );
}
