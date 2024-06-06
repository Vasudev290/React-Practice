// Sending to Function Compnent A to class compnentB

import CompB from './compB'
let CompA = () => {
    let Ename = "Aravind"
    let Salary = 50000
    return <>
        <h1>Component A</h1>
        <hr />
        <CompB one={"Hii, Macha"} emp_name={Ename} esal={Salary}/>
    </>
}
export default CompA