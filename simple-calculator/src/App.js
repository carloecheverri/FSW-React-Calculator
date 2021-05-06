import { Component } from "react";
import "./App.css";
import Display from "./Display";
import Keys from "./Keys";
import Button from "./Button"

class App extends Component {
  // state = { answer: "" };
  state = { value: "0", setValue:""}

  handleClick = () => {

  }

  // onClick = (button) => {
    // const { answer } = this.state;
  //   if (button === "=") {
  //     this.calculate();
  //   } else if (button === "C") {
  //     this.restart();
  //   } else if (button === "CE") {
  //     this.delete();
  //    } else {
  //     this.setState({
  //       answer: answer + button
  //     });
  //   }
  // };

  // calculate = () => {
  //   const { answer } = this.state
    
  //     this.setState({ answer: (eval(answer) )});

    
  // };

  // restart = () => {
    
  //   this.setState({ answer: "" });
  // };

  // delete = () => {
  //   const { answer } = this.state
  //   this.setState({ answer: answer.slice(0, -1) });
  // };
  render() {
    // const { answer } = this.state;
    const {value, setValue} = this.state
    return (
      <section className="App">
        <div className="top">4:00</div>
        <div className="display">{value}</div>
        <Keys value={value}/>
        {/* <div className="buttons">
          <Button onClick={this.handleClick} content="AC" type="function"/>
          <Button onClick={this.handleClick} content="±" type="function"/>
          <Button onClick={this.handleClick} content="%" type="function"/>
          <Button onClick={this.handleClick} content="÷" type="operator"/>
          <Button onClick={this.handleClick} content="7"/>
          <Button onClick={this.handleClick} content="8"/>
          <Button onClick={this.handleClick} content="9"/>
          <Button onClick={this.handleClick} content="×" type="operator"/>
          <Button onClick={this.handleClick} content="4"/>
          <Button onClick={this.handleClick} content="5"/>
          <Button onClick={this.handleClick} content="6"/>
          <Button onClick={this.handleClick} content="−"type="operator"/>
          <Button onClick={this.handleClick} content="1"/>
          <Button onClick={this.handleClick} content="2"/>
          <Button onClick={this.handleClick} content="3"/>
          <Button onClick={this.handleClick} content="+"type="operator"/>
          <div className="Zero">
          <Button content="0"/>
          </div>
          <Button content="."/>
          <Button content="=" type="operator"/>
        </div> */}
        <div className="bottom">-</div>
        {/* <Display answer={answer} /> */}
        {/* <Keys onClick={this.onClick} /> */}
      </section>
    );
  }
}

export default App;
