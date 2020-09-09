import React from 'react';
import { useTranslation } from 'react-i18next';

import stylesLanguage from './css/ChangeLanguage.scss';

function ChangeLanguage() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (event) => {
        const lng = event.target.value;
        if (lng !== i18n.language) {
            i18n.changeLanguage(lng);
        }
    };

    return (
        <select
            className={stylesLanguage.language}
            onChange={changeLanguage}
            value={i18n.language}
        >
            <option value="vi">{t('vi')}</option>
            <option value="en">{t('en')}</option>
        </select>
    );
}

ChangeLanguage.whyDidYouRender = true;

export default ChangeLanguage;
