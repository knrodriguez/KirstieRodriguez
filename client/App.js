import React from 'react';
import ReactDOM from 'react-dom';
import { AboutMeView } from './views'

const App = () => {
    return (
        <AboutMeView />
    )
}

ReactDOM.render(<App />, document.getElementById('app'));