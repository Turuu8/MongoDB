export const Chagne = () => {
    const handle = (e) => {
        console.log(e + "hello")
    }
    return (
        <>
            <h1>Check</h1>
            <input name='email' />
            <input name='password' />
            <button onClick={handle} > check</button>
        </>
    )
}