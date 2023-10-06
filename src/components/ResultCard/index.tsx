/* eslint-disable jsx-a11y/img-redundant-alt */

import './styles.css';

type Props = {
    avatar_url: string;
    githubLink: string;
    followers: number;
    location: string;
    name: string;
};

const ResultCard = ({avatar_url, githubLink, followers, location, name} : Props) => {

    return (
        <div className='base-card result-card-container'>
            <div className='result-image-container'>
                <img src={avatar_url} alt="Image do Usuário" />
            </div>
            <div className='result-info-container'>
                <h6>Informações</h6>
                <div className='info-list'>
                    <div>
                        <div className='user-info'>Perfil: <span>{githubLink}</span></div>
                        <div className='user-info'>Seguidores: <span>{followers}</span></div>
                        <div className='user-info'>Localidade: <span>{location}</span></div>
                        <div className='user-info last-user-info'>Nome: <span>{name}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultCard;