import { useFormStatus } from 'react-dom';

export function SubmitButton() {
    const { pending, data } = useFormStatus();
    console.log(data && data.get("status"));
    return <button type="submit" disabled={pending}>Update</button>;
}
