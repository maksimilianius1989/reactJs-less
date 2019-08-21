import React from 'react';
import ReactDom from 'react-dom';

// let hr = React.createElement('hr');
// let div = React.createElement('div', {className: 'test'}, [hr]);

ReactDom.render(<div className="test">
    <span>Hello!</span>
    <hr/>
</div>, document.querySelector('#app'));