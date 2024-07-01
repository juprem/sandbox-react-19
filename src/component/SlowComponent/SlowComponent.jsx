export function SlowPost() {
    let startTime = performance.now();
    while (performance.now() - startTime < 3000) {
        // Do nothing for 3s per item to emulate extremely slow code
    }

    return <div>Slow render</div>;
}
