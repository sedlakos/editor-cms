import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@react-page/editor/lib/index.css';

export default function initEditor(element) {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        element
    );
}

window.initEditor = initEditor
// initEditor(document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();