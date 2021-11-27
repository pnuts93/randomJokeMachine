import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      record: {} };

    this.loadJoke = this.loadJoke.bind(this);
  }

  async componentDidMount() {
    const response = await fetch('https://raw.githubusercontent.com/pnuts93/randomJokeMachine/master/dataset_mini.json');
    const data = await response.json();
    let n = Math.floor(Math.random() * data.length);
    this.setState({
      isLoaded: true,
      items: data,
      record: { joke: data[n]["body"], title: data[n]["title"] } });

  }

  loadJoke(items) {
    let sample = items[Math.floor(Math.random() * items.length)];
    this.setState({
      isLoaded: true,
      items: items,
      record: {
        joke: sample["body"],
        title: sample["title"] } });


  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return /*#__PURE__*/React.createElement("div", null, "Loading...");
    } else {
      return /*#__PURE__*/(
        React.createElement("div", { id: "joke" }, /*#__PURE__*/
        React.createElement("p", { id: "text" }, this.state.record.joke), /*#__PURE__*/
        React.createElement("p", { id: "author" }, this.state.record.title), /*#__PURE__*/
        React.createElement("a", { id: "tweet-quote", href: "https://twitter.com/share?ref_src=twsrc%5Etfw", class: "twitter-share-button", "data-text": "testo", "data-show-count": "false", target: "_blank" }, /*#__PURE__*/React.createElement("script", { async: true, src: "https://platform.twitter.com/widgets.js", charset: "utf-8" }), /*#__PURE__*/React.createElement("img", { src: "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png", width: "50", alt: "twitter logo vector png clipart" })), /*#__PURE__*/
        React.createElement("button", { id: "new-quote", onClick: () => this.loadJoke(this.state.items) }, "New Joke"), /*#__PURE__*/
        React.createElement("div", { id: "empty" })));


    }
  }}


function App() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement(MyComponent, null)));


}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("quote-box"));