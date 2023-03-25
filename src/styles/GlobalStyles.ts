import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  
  --color: 35, 35, 35;
  --main-color: 32, 110, 248;
  --edit-color: 45, 120, 45;
  --delete-color: 210, 45, 45;
  --bg-primary-color: 242, 242, 242;
  --bg-secondary-color: 255, 255, 255;
  
  color: rgb(var(--color));
  background-color: rgb(var(--bg-primary-color));
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
  color: rgb(var(--color));
}

a:visited {
  color: rgb(var(--color));
}

a:hover {
  color: rgb(var(--main-color));
}

svg {
  height: 40px;
  width: 40px;
  fill: white;

  @media (max-width: 768px) {
    height: 32px;
    width: 32px;
  }
}
`;

export default GlobalStyles;
