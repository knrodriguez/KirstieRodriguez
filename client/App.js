import React from 'react';
import ReactDOM from 'react-dom';
import { AboutMeView, TechStackView} from './views'

const App = () => {
    return (
        <>
            <AboutMeView />
            <TechStackView />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));