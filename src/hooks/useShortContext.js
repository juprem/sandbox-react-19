import { useContext } from 'react';
import { ShortContext } from '../component/React19Use/Context/React19UseContext.jsx';

export function useShortContext() {
    const context = useContext(ShortContext);

    if (!context) return new Error('useShortContext must be used within the context!');

    return context;
}
