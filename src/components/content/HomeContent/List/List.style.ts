import styled from 'styled-components';

export const Wrapper = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  background-color: rgb(var(--bg-secondary-color));
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 6px 0;
`;

export const ListElement = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Info = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  overflow: hidden;
  overflow-wrap: break-word;
  text-align: center;
  padding: 2rem;
`;
