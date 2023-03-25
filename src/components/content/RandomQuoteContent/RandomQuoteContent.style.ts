import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Text = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  overflow: hidden;
  overflow-wrap: break-word;
  text-align: center;
  padding: 1rem;
`;

export const QuoteCard = styled.div`
  background-color: rgb(var(--bg-secondary-color));
  border-radius: 8px;
  height: 150px;
  max-width: 600px;
  width: 100%;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 6px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 300px;
  }
`;
