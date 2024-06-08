import React from "react";
class Message extends React.Component {
    state = {
        msg: "Heloo"
    }
    messageHandler = (msg)  => {
       this.setState({msg: msg})
    }
    render() {
        return <div>
            <h2>Wish Message:{this.state.msg}</h2>
              <button className="ml-2" onClick={this.messageHandler.bind(this, "GOOD Morning")}>GM</button>
              <button className="ml-2" onClick={this.messageHandler.bind(this, "Good AfterNoon")}>GA</button>
              <button className="ml-2" onClick={this.messageHandler.bind(this, "Good Night")}>GN</button>
              {/* <button className="ml-2" onClick={() => {
                this.setState({msg: "Good Night Machaa!"})
              }}>GN</button> */}
            {/*   Both buttons are working (With messageHandler or without messageHandler) it'll working */}
        </div>
    }
}
export default Message;