import './App.css';
import { React19FormUseActionState } from './component/React19Form/React19FormUseActionState.jsx';
import { React19FormUseFormStatus } from './component/React19Form/React19FormUseFormStatus/React19FormUseFormStatus.jsx';
import { WrapperUseOptimistic } from './component/React19Form/React19FormUseOptimistic/WrapperUseOptimistic.jsx';
import { React19UseSuspense } from './component/React19Use/React19UseSuspense.jsx';
import { React19UseContext } from './component/React19Use/Context/React19UseContext.jsx';

function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', gap: '1rem' }}>
            <React19FormUseActionState />
            <React19FormUseFormStatus />
            <WrapperUseOptimistic />
            <React19UseSuspense />
            <React19UseContext />
        </div>
    );
}

export default App;
