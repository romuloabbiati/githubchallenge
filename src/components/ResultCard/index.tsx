/* eslint-disable jsx-a11y/img-redundant-alt */
import ProfileImage from 'assets/images/profile-image.png';

import './styles.css';

const ResultCard = () => {

    return (
        <div className='base-card result-card-container'>
            <div className='result-image-container'>
                <img src={ProfileImage} alt="Image do Usuário" />
            </div>
            <div className='result-info-container'>
                <h6>Informações</h6>
                <div className='info-list'>
                    <div>
                        <div className='user-info'>Perfil: <span>https://api.github.com/users/acenelio</span></div>
                        <div className='user-info'>Seguidores: <span>4379</span></div>
                        <div className='user-info'>Localidade: <span>Uberlândia</span></div>
                        <div className='user-info last-user-info'>Nome: <span>Nelio Alves</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;