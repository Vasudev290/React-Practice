// Sending to Function Compnent A to function compnentB
let CompB = (props) => {

    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
    </div>
}
export default CompB