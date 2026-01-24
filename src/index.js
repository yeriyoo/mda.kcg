import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

import './scss/WrapComponent.scss';
import './scss/HeaderComponent.scss';
import './scss/SideComponent.scss';
import './scss/MainComponent.scss';
import './scss/ToolComponent.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
