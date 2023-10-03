import './styles.css';

const SearchCard = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('changed to: ' + event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('handle submit');
  };

  return (
    <div className="base-card search-card-container">
      <h1>Encontre um perfil Github</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <input
            type="text"
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
  );
};

export default SearchCard;
