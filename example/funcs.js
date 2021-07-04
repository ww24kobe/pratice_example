let asyncComponent = () => ({
    component: 'component',
    loading: "loading",
    error: "error",
    delay: 200,
    timeout: 5000
});
console.log(asyncComponent());