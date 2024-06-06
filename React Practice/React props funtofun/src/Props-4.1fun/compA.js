// Sending to Function Compnent A to function compnentB

import CompB from './compB'
let CompA = () => {
    let Ename = "Aravind"
    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB one={"Hii, Macha"} emp_name={Ename}/>
    </div>
}
export default CompA