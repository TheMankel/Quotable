import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonElement = styled.button`
  background-color: rgb(var(--main-color));
  padding: 1rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-size: 1.25rem;
  margin-top: 0.5rem;
  font-weight: 600;

  &:hover,
  &:active {
    background-color: rgba(var(--main-color), 0.75);
  }
`;
