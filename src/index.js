import ReactDOM from 'react-dom/client';
import WrapComponent from './component/WrapComponent';
import './scss/WrapComponent.scss'
import './scss/HeaderComponent.scss'
import './scss/SideComponent.scss'
import './scss/MainComponent.scss'
import './scss/ToolComponent.scss'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <WrapComponent />
  </BrowserRouter>
);