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
  }, []);

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
            <div className="App">
              <h1>Rick and morty characters</h1>

              {characters.map((character, index) => {
                return (
                  <div className="character" key={index}>
                    <img src={character.image} alt="character img" />
                    {character.name}
                    <button
                      onClick={() =>
                        ifExists(character)
                          ? onRemoveFavorite(character)
                          : onFavorite(character)
                      }
                    >
                      {ifExists(character) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <Link to={`/detail/${character.id}`}>
                      <button> Detalles</button>
                    </Link>
                  </div>
                );
              })}
              <Paginator
                prev={info.prev}
                next={info.next}
                onPrev={onPrevious}
                onNext={onNext}
              />
            </div>
          </>
        )
      }
    </AuthContext.Consumer>
  );
};

export default Profile;
