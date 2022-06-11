import React, { useContext, Suspense, useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import { IntlProvider } from 'react-intl'; // 多语言库

import Spinner from '@/components/spinner';
import langs from '@/locales';
import LangContext from '@/context/langContext';
import Guarder from './guard';

export default function Router() {
    const storedLocale = localStorage.getItem('locale') || window.navigator.language || 'zh-CN';
    const [locale, setLocale] = useState(storedLocale);
    // console.log(window.navigator.language)

    return (
        <LangContext.Provider value={{ locale, setLocale }}>
            <IntlProvider
                messages={langs[locale]}
                locale={locale}
                defaultLocale='zh-CN'
            >
                <BrowserRouter>
                    <Suspense fallback={<Spinner />}>
                        <Guarder />
                    </Suspense>
                </BrowserRouter>
            </IntlProvider>
        </LangContext.Provider>
    )
}
