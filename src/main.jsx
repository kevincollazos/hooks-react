import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import {HooksApp} from './HooksApp.jsx'
// import { CounterApp } from './1-useState/CounterApp.jsx'
// import { CounterCustom } from './1-useState/CounterCustom.jsx'
// import SimpleForm from './2-useEffect/SimpleForm.jsx'
// import { FormCustom } from './2-useEffect/FormCustom.jsx'
// import { MultiCustomHooks } from './3-ejemplos/MultiCustomHooks.jsx'
// import { FocusScreen } from './4-useRef/FocusScreen.jsx'
import { Layout } from './5-useLayoutEffect/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)
