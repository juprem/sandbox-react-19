import { useActionState } from 'react';
import { simulatingPromise } from '../../utils/simulatingPromise';

export function React19FormUseActionState() {
    const [error, submitAction, isPending] = useActionState(async (previousState, formData) => {
        const data = await simulatingPromise(false, formData.get('name'));
        if (data) {
            return data;
        }
        return null;
    }, null);

    return (
        <>
            <h3>useActionState</h3>
            <form action={submitAction}>
                <input type="text" name="name" />
                <button type="submit" disabled={isPending}>
                    Update
                </button>
                {error && <p>{error}</p>}
            </form>
        </>
    );
}
