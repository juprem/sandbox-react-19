import { Suspense } from 'react';
import { React19Use } from './React19Use.jsx';

export function React19UseSuspense() {
    return (
        <>
            <h3>use et Suspense</h3>
            <Suspense fallback={<div>...Loading</div>}>
                <React19Use />
            </Suspense>
        </>
    );
}
