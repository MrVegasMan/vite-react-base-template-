import "./styles/reset.scss";
import './index.scss'
import "./styles/mods.scss";
import "./styles/fonts.scss";

import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.VITE_PUBLIC_PATH as string}>
            <div className={'flex flex-col size-full'}>
                <App/>
            </div>
        </BrowserRouter>
    </React.StrictMode>,
)
