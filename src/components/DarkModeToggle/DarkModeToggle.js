import React from 'react';
import useDarkMode from 'use-dark-mode';

import styles from './css/DarkModeToggle.scss';

function DarkModeToggle() {
    const darkMode = useDarkMode(true, {
        classNameDark: 'mode-dark',
        classNameLight: 'mode-light',
    });

    return (
        <div className={styles.darkMode}>
            <button type="button" onClick={darkMode.toggle}>
                {darkMode.value ? 'Dark' : 'Light'}
            </button>
        </div>
    );
}

export default DarkModeToggle;
