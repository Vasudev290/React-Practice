import React from'react'
import CompB from './compB';
class CompA extends React.Component{
    Eid = 301;
    Ename = "Aravind"
    render() {
        return <div>
            <h2>Component A</h2>
            <CompB one={"GM"} two={"GE"}/>
        </div>
    }
}
export default CompA;