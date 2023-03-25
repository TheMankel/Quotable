import styled from 'styled-components';

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 100vh - navbar height - footer height*/
  min-height: calc(100vh - 55px - 55.8px);
`;
