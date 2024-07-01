import { useOptimistic, useState } from 'react';
import { simulatingPromise } from '../../../utils/simulatingPromise.js';

export function React19FormUseOptimistic({ currentName, onUpdateName }) {
    const [optimisticName, setOptimisticName] = useOptimistic(currentName);
    const [inError, setInError] = useState(false);

    const submitAction = async (formData) => {
        const newName = formData.get('name');
        setOptimisticName(newName);

        const updatedName = await simulatingPromise(inError, newName, currentName);
        onUpdateName(updatedName);
    };

    return (
        <>
            <h3>useOptimistic</h3>
            <button onClick={() => setInError((prev) => !prev)}>Set in error : {(inError).toString()}</button>
            <form action={submitAction}>
                <p>Your name is: {optimisticName}</p>
                <p>
                    <label>Change Name:</label>
                    <input type="text" name="name" disabled={currentName !== optimisticName} />
                </p>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
