import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
