import { createContext, Dispatch } from 'react';

const routerContext = createContext({
    history: null,
    location: null,
    match: null,
});

// <RouterContext.Provider> // "RouterContext.Provider" 在 DevTools 中
routerContext.displayName = 'RouterContext';

export default routerContext
