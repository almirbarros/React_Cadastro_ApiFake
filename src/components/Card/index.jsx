import PropTypes from 'prop-types';
import { FiThumbsUp } from 'react-icons/fi';
// Mantemos os fallbacks (imagens padrão) caso nenhuma propriedade seja enviada
import DefaultUserImg from '../../assets/almir.jpg';
import DefaultBannerImg from '../../assets/background-banner.jpg';

import {
  CardContainer,
  Content,
  HasInfo,
  ImagemBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from './styles';

// 1. Recebendo propriedades (props) para tornar o card dinâmico
export function Card({ 
  bannerImage = DefaultBannerImg, 
  userImage = DefaultUserImg, 
  userName = "Almir Barros", 
  timeAgo = "Há 8 minutos", 
  title = "Projeto para curso de React", 
  description = "Projeto feito com o intuito de aprender React, utilizando Styled Components para estilização.",
  tags = "#react #reactjs #javascript #css",
  likesCount = 12
}) {
  return (
    <CardContainer>
      <ImagemBackground src={bannerImage} alt={`Banner do post: ${title}`} />
      <Content>
        <UserInfo>
          <UserPicture src={userImage} alt={`Foto de perfil de ${userName}`} />
          <div> 
            <h4>{userName}</h4>
            <p>{timeAgo}</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>{title}</h4>
          <p>
            {description} <strong>Saiba mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>{tags}</h4>
          <p>
            <FiThumbsUp /> {likesCount}
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
}

// 2. Validando as propriedades com PropTypes
Card.propTypes = {
  bannerImage: PropTypes.string,
  userImage: PropTypes.string,
  userName: PropTypes.string,
  timeAgo: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string,
  likesCount: PropTypes.number
};
