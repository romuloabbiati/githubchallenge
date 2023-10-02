import ResultCard from 'components/ResultCard';
import SearchCard from 'components/SearchCard';
import './styles.css';

const ProfileSearch = () => {
    
    return (
        <div className='profile-search-container'>
            <div className='card-top-container'>
                <SearchCard />
            </div>
            <div className='card-bottom-container'>
                <ResultCard />
            </div>
        </div>
    );
};

export default ProfileSearch;