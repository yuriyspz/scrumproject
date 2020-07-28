import React from 'react';

export const AboutDevelopers = (props) => {
    return (
        <>
            About Developers : {props.match.params.id}
        </>
    )
}