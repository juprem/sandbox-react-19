import { useState } from 'react';
import { React19FormUseOptimistic } from './React19FormUseOptimistic.jsx';

export function WrapperUseOptimistic() {
    const [name, setName] = useState('Albert');

    return <React19FormUseOptimistic currentName={name} onUpdateName={(value) => setName(value)} />;
}