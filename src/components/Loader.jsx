import React from 'react';

const Loader = () => {
   return (
      <div style={{height: window.innerHeight - 50}} className='login-container'>
         <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
   );
};

export default Loader;