import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComponent from './component/WrapComponent';
import './scss/WrapComponent.scss'
import './scss/HeaderComponent.scss'
import './scss/SideComponent.scss'
import './scss/MainComponent.scss'
import './scss/ToolComponent.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WrapComponent />
);