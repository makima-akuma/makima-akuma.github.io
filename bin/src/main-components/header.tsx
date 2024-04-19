import React from "react";

const containerStyle: React.CSSProperties = {
    backgroundColor: 'black',
    padding: '1rem',
    border: '1px solid black',
    borderBottom: '2px solid #505050',
    display: "flex",
    justifyContent: "center",
    color: "white"
};

const Header: React.FC = () => {
    return (
        <div style={containerStyle}>
            <div className='max-w-screen-lg mx-auto p-2'>
                <h1 className='text-4xl font-bold text-center'>Teorias SD</h1>
            </div>
        </div>
    );
}

export default Header;