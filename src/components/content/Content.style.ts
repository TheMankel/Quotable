import styled from 'styled-components';

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 100vh - navbar height - footer height - padding*/
  min-height: calc(100vh - 62px - 70px);
`;
