import { use } from 'react';
import { ShortContext } from './React19UseContext.jsx';

export function ComponentUsingContextConditionally({usingContext}) {
    if (!usingContext) {
        return <div>Early return</div>;
    }

    const data = use(ShortContext)

    return (
        <div>Avec le context : {data.title}</div>
    )
}