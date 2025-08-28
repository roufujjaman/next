const React = (() => {
    const useState = (initialValue) => {
        let state = initialValue;

        const setter = (newState) => {
            state = newState;
        }

        return [state, setter]
    }

    return { useState };
})();

const { useState } = React;

const Componenet = () => {
    const [count, setCount] = useState(1);

    console.log(count);
    setCount(10);
    console.log(count);
}

Componenet();



