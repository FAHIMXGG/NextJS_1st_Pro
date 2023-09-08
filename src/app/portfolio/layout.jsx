import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='my-20'>
            <h1 className='text-7xl font-bold'>Our Works</h1>
            {children}
        </div>
    );
};

export default Layout;