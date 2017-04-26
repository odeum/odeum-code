import React from 'react';

const App = ({match}) => {
    return (
        <div>
            <h2>{match.params.topicId}</h2>
        </div>
    );
};

export default App;