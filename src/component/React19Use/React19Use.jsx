import { use } from 'react';
import { simulatingPromise } from '../../utils/simulatingPromise.js';
import { memoizePromise } from '../../utils/memoisePromise.js';

const memoizedPromise = memoizePromise((error, result) => simulatingPromise(error, result))

export function React19Use() {
    const data = use(memoizedPromise(false, 'resolved'));

    return (
        <>
            <div>{data}</div>
        </>
    );
}
