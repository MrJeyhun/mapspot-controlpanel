import React from 'react';

export default function () {
    if (process.env.NODE_ENV === 'development') {
        const whyDidYouRender = require('@welldone-software/why-did-you-render');
        whyDidYouRender(React, {
            trackAllPureComponents: true,
        });
    }
}
