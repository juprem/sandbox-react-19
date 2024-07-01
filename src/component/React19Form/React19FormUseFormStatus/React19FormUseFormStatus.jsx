import { SubmitButton } from './SubmitButton.jsx';
import { simulatingPromise } from '../../../utils/simulatingPromise.js';

export function React19FormUseFormStatus() {
    const text =
        "Ici l'action représente la fonction à effectué lorsque le form est submit dans les cas généraux on parle ici d'une promesse";
    return (
        <>
            <h3>useFormStatus</h3>
            <form action={simulatingPromise}>
                <input name="status" type="checkbox" />
                <SubmitButton />
            </form>
        </>
    );
}
