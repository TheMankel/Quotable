import styled from 'styled-components';

export const Item = styled.li`
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: rgb(var(--bg-primary-color));
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ItemText = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  overflow: hidden;
  overflow-wrap: break-word;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  button {
    padding: 0.25rem;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    aspect-ratio: 1;
    border: none;
  }
`;

export const EditButton = styled.button`
  background-color: rgb(var(--edit-color));

  &:hover {
    background-color: rgba(var(--edit-color), 0.75);
  }
`;

export const DeleteButton = styled.button`
  background-color: rgb(var(--delete-color));

  &:hover {
    background-color: rgba(var(--delete-color), 0.75);
  }
`;
