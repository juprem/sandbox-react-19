import { createContext } from 'react';
import { ComponentUsingContextConditionally } from './ComponentUsingContextConditionally.jsx';

export const ShortContext = createContext(null);

export function React19UseContext() {
    return (
        <ShortContext
            value={{
                title: 'React19 UseContext',
            }}
        >
            <h3>use avec useContext</h3>
            <ComponentUsingContextConditionally usingContext={false} />
            <ComponentUsingContextConditionally usingContext />
        </ShortContext>
    );
}
