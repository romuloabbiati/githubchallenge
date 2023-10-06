import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

import './styles.css';

type UserInput = {
  userInfo: string;
};

type GithubUserInfo = {
  avatar_url: string;
  url: string;
  followers: number;
  location: string;
  name: string;
};

const SearchCard = () => {
  const [githubUserInfo, setGithubUserInfo] = useState<GithubUserInfo>();

  const [userInput, setUserInput] = useState<UserInput>({
    userInfo: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInput( {...userInput, [name]:value});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    axios.get(`https://api.github.com/users/${userInput.userInfo}`)
      .then((response) => {
        setGithubUserInfo(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setGithubUserInfo(undefined);
        console.log(error);
      });
  };

  return (
    <div className="profile-search-container">
        <div className='base-card search-card-container'>
          <h1>Encontre um perfil Github</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="text"
                name="userInfo"
                value={userInput.userInfo}
                className="search-input"
                placeholder="Usuário Github"
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary btn-lg">
                Encontrar
              </button>
            </div>
          </form>
        </div>
        {githubUserInfo && (
          <ResultCard 
            avatar_url={githubUserInfo.avatar_url}
            githubLink={githubUserInfo.url}
            followers={githubUserInfo.followers}
            location={githubUserInfo.location}
            name={githubUserInfo.name}
          />
        )}
    </div>
  );
};

export default SearchCard;
