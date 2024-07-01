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
            <div style={{ width: '100%', height: '1px', border: "1px solid black" }} />
            <React19FormUseFormStatus />
            <div style={{ width: '100%', height: '1px', border: "1px solid black" }} />
            <WrapperUseOptimistic />
            <div style={{ width: '100%', height: '1px', border: "1px solid black" }} />
            <React19UseSuspense />
            <div style={{ width: '100%', height: '1px', border: "1px solid black" }} />
            <React19UseContext />
        </div>
    );
}

export default App;
