import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(var(--color), 0.2);
  backdrop-filter: blur(10px);
  height: 100vh;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: rgb(var(--bg-secondary-color));
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
`;

export const NavModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: rgb(var(--bg-primary-color));
  border-bottom: 1px solid rgba(var(--color), 0.12);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CloseBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;

  &:hover,
  &:active {
    background-color: rgba(var(--main-color), 0.25);
    padding: 0.25rem;
    border-radius: 4px;
  }

  svg {
    fill: rgb(var(--color));
  }
`;
