import styled from 'styled-components';

export const FormElement = styled.form`
  max-width: 40rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin: 2rem auto;
  z-index: 400;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    &.input {
      width: 100%;
    }
  }
`;

export const InputElement = styled.input`
  display: block;
  width: 100%;
  font: inherit;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #f7f5ef;
  border: none;
  color: #201d0f;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(var(--main-color), 0.75),
      0 0 0 0.4rem rgba(var(--main-color), 0.75);
  }
`;

export const SubmitButton = styled.button`
  background-color: rgb(var(--main-color));
  padding: 0.25rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1;
  border: none;

  &:hover,
  &:active {
    background-color: rgba(var(--main-color), 0.75);
  }
`;
