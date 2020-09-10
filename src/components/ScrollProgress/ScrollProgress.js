import React, { useEffect } from 'react';

function ScrollProgress() {
    useEffect(() => {
        const progressBarHandler = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            const progressBar = document.querySelector('.progressBar');

            progressBar.style.transform = `scale(${scroll}, 1)`;
            progressBar.style.opacity = `${scroll}`;
        };

        window.addEventListener('scroll', progressBarHandler, {
            capture: true,
            passive: true,
        });

        return () => window.removeEventListener('scroll', progressBarHandler);
    });

    return (
        <div className="progressBarContainer">
            <div className="progressBar" />
        </div>
    );
}

export default ScrollProgress;
