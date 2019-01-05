import styled from 'styled-components';
import { lighten, shade } from 'polished';
import { Colors } from '../../constants';

const { malibu } = Colors;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  color: #B9BDC5;
  min-height: 140px;
  background-color: #33333d;
  background-color: #000;
  border: 1px solid rgba(225, 225, 225, .2);
  background-color: ${shade(.6, '#424250')};
`;
export const HashtagWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Tag = styled.p`
  color: ${malibu};
`;

export const SectionRow = styled.section`
  display: flex;
  flex-direction: row;
`;

export const SectionColumn = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 140px;
  color: #B9BDC5;
  overflow: hidden;
  white-space: wrap;
`;

export const Header = styled(SectionRow)`
  margin-left: 15px;
  justify-content: space-between;
`;

export const CardImgWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const CardImg = styled.img`
  display: block;
  object-fit: cover;
  height: auto;
  width: 100%;
  margin: 0 auto;
  height: 300px;
  border-top: 1px solid rgba(225, 225, 225, .1);
  cursor: pointer;
`;

export const Title = styled.h2`
  position: relative;
  font-size: 1.2rem;
  color: ${malibu};
  font-weight: 400;
  cursor: pointer;
  top: -8px;
  transition: color 275ms ease-in-out;
  &:hover {
    color: ${lighten(.2, malibu)};
  }
`;

export const Name = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  margin-left: 10px;
`;

export const ProfileImg = styled.img`
  object-fit: cover;
  min-width: 80px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(225, 225, 225, .2);
  margin-left: 10px;
`;

export const PortfolioLink = styled.a`
  color: ${malibu};
  font-size: 1.2rem;
  margin-left: 10px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .7rem;
  text-decoration: none;
  max-width: 130px;
  transition: color 275ms ease-in-out;
  &:hover {
    color: ${lighten(.2, malibu)};
  }
`;

export const DownloadLink = styled.a`
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 10px;
  font-size: 1.2rem;
  font-weight: 300;
  bottom: 0;
  color: ${malibu};
  cursor: pointer;
  text-decoration: none;
  transition: color 275ms ease-in-out;
  &:hover {
    color: ${lighten(.2, malibu)};
  }
`;

export const LikesContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  right: 10px;
  bottom: 10px;
  width: 40px;
  height: 40px;
`;

export const Likes = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  top: 8px;
  margin: auto;
  font-size: 11px;
  color: white;
  font-weight: 600;
`;

export const Highlight = styled.span`
  color: ${malibu};
`;

