import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Board from './Board';
import { observe } from './Game';

const rootEl = document.getElementById('root');
observe(knightPosition =>
    ReactDOM.render(
        <Board knightPosition = {knightPosition}/>,
        rootEl
    )
  );

// ReactDOM.render(<App />, document.getElementById('root'));
