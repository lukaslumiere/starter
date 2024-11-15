import React from 'react';
export const Show = ({ when, children, fallback, whenNot }) => {
    return React.createElement(React.Fragment, null, when ? children : whenNot || fallback);
};
