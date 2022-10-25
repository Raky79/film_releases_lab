import React from 'react'; 

const Link = ({name,children}) => {
    return (
        <>
            <h4>{children}</h4>
            <p>{name}</p>
        </>
    )
}

export default Link;