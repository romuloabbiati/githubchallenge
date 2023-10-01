import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='home-content-container'>
          <h1>Desafio Github API</h1>
          <p>DevSuperior - Escola de programação </p>
          <Link to="/search">
            <button className='btn btn-primary btn-lg'>Começar</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
