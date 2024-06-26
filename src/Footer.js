import React from 'react';
import { youtubeIcon } from './SVGImages';

const style = {
    container: {
        borderTop: '2px solid #333',
        paddingTop: 12,
        paddingBottom: 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    icon: {
        display: 'inline-block',
        verticalAlign: 'text-top',
        height: 24,
        marginRight: 4
    }
};

export default () => (
    <div
        className="full-width"
        style={ style.container }
    >
        <div>
            <span style={{ marginRight: 10 }}>© Future EV Co. Ltd. All Rights Reserved.</span>

            <div style={{ display: 'inline-block' }}>
                <a href="https://www.youtube.com/@FutureEV365">
                    <div style={{ ...style.icon, width: 27 }}>{ youtubeIcon }</div>
                    YouTube
                </a>
            </div>
        </div>
    </div>
);