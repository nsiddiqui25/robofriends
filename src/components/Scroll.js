import React from 'react';

// scrollable component
const Scroll = (props) => {
   return (
      <div style={{ overflowY: 'scroll', border: '5px solid yellow', height: '800px' }}>
         {props.children}
      </div>
   );
};

export default Scroll;