import React, { Fragment } from 'react';
import { Hashtag } from '../Hashtag';
import { Instagram } from  'styled-icons/boxicons-logos';
import { Download } from 'styled-icons/feather';
import { Icon } from '../Icon';
import { Heart } from 'styled-icons/fa-solid';
import {
  Name,
  Title,
  Header,
  CardImg,
  Content,
  Container,
  ProfileImg,
  SectionRow,
  PortfolioLink,
  Highlight,
  SectionColumn,
  CardImgWrap,
  LikesContainer,
  Likes,
  HashtagWrap,
  DownloadLink,
} from './Card.style';

const Card = props => {
  const {
    name,
    tags,
    html,
    large,
    likes,
    title,
    image,
    location,
    download,
    portfolio_url,
    instagram_username,
  } = props;
  return(
    <Container>
      
      <Content>
        <Header>
          {title && <Title onClick={() => props.openLink(html)}>{title}</Title>}
          {tags && 
            <HashtagWrap>
              {tags.splice(0, 3).map((tag, idx) => {
                return <Hashtag key={idx} tagName={tag.title} />;
              })}
            </HashtagWrap>
          }
          <Icon Component={Instagram} wrapper={'InstagramWrap'} />
        </Header>
        
        <SectionRow>
          <ProfileImg src={large}></ProfileImg>
          <SectionColumn>
            <Name>{name} <Highlight>{' // '}</Highlight>{location || 'Location Unknown'}</Name>
            {portfolio_url &&
              <PortfolioLink href={portfolio_url} target={'_blank'}>portfolio</PortfolioLink>
            }
          </SectionColumn>
        </SectionRow>

        <DownloadLink href={download} target='_blank'>download high-rez
          <Icon Component={Download} wrapper={'DownloadWrap'} />
        </DownloadLink>
      </Content>
      
      <CardImgWrap>
        <CardImg
          src={image}
          onClick={() => props.openLink(html)}
        />
        <LikesContainer>
          <Icon wrapper={'HeartWrap'} Component={Heart} />
          <Likes>{likes}</Likes>
        </LikesContainer>
      </CardImgWrap>
    
    </Container>
  )
};

export { Card };
