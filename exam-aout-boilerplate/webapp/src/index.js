import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import 'index.css';
import {ProviderWrapper} from "./contexts/jokescoreContext";
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProviderWrapper><Router><App/></Router></ProviderWrapper>);
