import { createContext, Dispatch } from 'react';

const initContext = {
    locale: 'zh-CN',
    setLocale: () => {},
}

const LangContext = createContext(initContext);

LangContext.displayName = 'LangContext';

export default LangContext
