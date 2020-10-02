/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import reducer, { initialState } from '../src/config/reducer'
import { StateProvider } from '../src/config/StateProvider'

ReactDOM.render(
    <React.StrictMode>
        <StateProvider
            initialState={initialState}
            reducer={reducer}
        >
            <App />
        </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
)