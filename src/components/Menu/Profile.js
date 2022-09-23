import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import AuthContext from "../Auth/AuthContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Paginator from "./Paginator";

const Profile = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [favoriteList, setFavoriteList] = React.useState([]);
  const requestOptions = {
    method: "GET",
  };

  const initialURL = `https://rickandmortyapi.com/api/character/?page=1`;

  const onFavorite = (character) => {
    setFavoriteList([...favoriteList, character]);
    console.log(favoriteList);
  };

  const onRemoveFavorite = (character) => {
    const filteredList = favoriteList.filter(
      (item) => item.id !== character.id
    );
    setFavoriteList(filteredList);
    console.log(filteredList);
  };

  const ifExists = (character) => {
    if (favoriteList.filter((item) => item.id === character.id).length > 0) {
      return true;
    }
    return false;
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialURL);
  },[] );

  const fetchCharacters = async (url) => {
    await fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Consumer>
      {(context) =>
        !context.state.isAuthenticated ? (
          <>
            <Navigate to="/login" />
          </>
        ) : (
          <>
            <div className="Grid">

              {characters.map((character, index) => {
                return (
                  <div className="card" key={index}>
                    <img src={character.image} alt="character img" className="card-img"/>
                    <p className="card-text">{character.name}  <button
                      onClick={() =>
                        ifExists(character)
                          ? onRemoveFavorite(character)
                          : onFavorite(character)
                      }
                      className="button-fav"
                    >
                      {ifExists(character) ? <FaHeart style={{fontSize: "1.5rem", color: "#0D004D"}}/> : <FaRegHeart style={{fontSize: "1.5rem", color: "#0D004D"}}/>}
                    </button></p>
                    
                    
                    <Link to={`/detail/${character.id}`}>
                      <button className="login-button">MÁS DETALLES</button>
                    </Link>
                  </div>
                );
              })}
              
            </div>
            <Paginator
                prev={info.prev}
                next={info.next}
                onPrev={onPrevious}
                onNext={onNext}
                className = "paginator"
              />
          </>
        )
      }
    </AuthContext.Consumer>
  );
};

export default Profile;
