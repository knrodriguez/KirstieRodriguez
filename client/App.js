import React from 'react';
import ReactDOM from 'react-dom';
import { AboutMeView, TechStackView} from './views'
import {AboutMeGrid} from './components'

const App = () => {
    return (
        <>
            {/* <AboutMeView />
            <TechStackView /> */}
            <AboutMeGrid />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));