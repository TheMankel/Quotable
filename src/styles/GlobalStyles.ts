import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
* {
  color: #ffffff;
  /* --main-color: rgb(16, 79, 137); */
  --main-color: 16, 79, 137;
  /* --edit-color: rgb(15, 98, 73); */
  --edit-color: 15, 98, 73;
  /* --delete-color: rgb(199, 19, 58); */
  --delete-color: 199, 19, 58;
  --bg-primary-color: 36, 36, 36;
  --bg-secondary-color: 48, 48, 48;
  --link-color: #186dff;
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  background-color: rgb(var(--bg-primary-color));

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(var(--main-color));
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(var(--main-color), 0.75);
}

::-webkit-scrollbar-track {
  background-color: rgb(var(--bg-secondary-color));
}

a {
  width: 100%;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 600;
}

a:visited {
  color: white;
}

a:hover {
  color: var(--link-color);
}
`;

export default GlobalStyles;