import './styles.css';

const SearchCard = () => {
  return (
    <div className="base-card search-card-container">
      <h1>Encontre um perfil Github</h1>
      <div className="form-container">
        <form action="#">
          <input
            type="text"
            name="user"
            className="search-input"
            placeholder="Usuário Github"
            onChange={() => {}}
          />
        </form>
        <button type="submit" className="btn btn-primary btn-lg">
          Encontrar
        </button>
      </div>
    </div>
  );
};

export default SearchCard;
