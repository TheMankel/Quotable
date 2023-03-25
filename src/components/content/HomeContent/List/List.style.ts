import styled from 'styled-components';

export const Wrapper = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  background-color: rgb(var(--bg-secondary-color));
  padding: 0 1rem;
  border-radius: 8px;
`;

export const ListElement = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  overflow: hidden;
  overflow-wrap: break-word;
  text-align: center;
`;
