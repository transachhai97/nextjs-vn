import React from 'react';
import Head from 'next/head';
// eslint-disable-next-line import/no-extraneous-dependencies
import whyDidYouRender from '@welldone-software/why-did-you-render';
import Toastify from '@/components/Toastify/Toastify';
import Router from 'next/router';
import NProgress from 'nprogress';

import isDev from '@/app/env';
import ChangeLanguage from '@/components/ChangeLanguage/ChangeLanguage';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';

import '@/locales/i18n';

import '@/styles/index.scss';

if (typeof window !== 'undefined' && isDev) {
    whyDidYouRender(React);
}

// eslint-disable-next-line no-unused-vars
Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>Next.js PWA Example</title>

                <link rel="manifest" href="/manifest.json" />
                <link
                    href="/favicon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/favicon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link rel="apple-touch-icon" href="/apple-icon.png" />
                <meta name="theme-color" content="#317EFB" />
            </Head>
            <ScrollProgress />
            <Toastify />
            <ChangeLanguage />
            <Component {...pageProps} />
        </>
    );
}
