import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
`;

export const Link = styled(NavLink)`
  padding-bottom: 12px;

  &.active {
    border-bottom: 4px solid rgb(var(--main-color));
  }
`;
