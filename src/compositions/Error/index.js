import React from "react";

export default class Erorr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decodedUri: ""
    };
  }

  componentDidMount() {
    const thisUri = window.location.href;
    let decodedUri = decodeURIComponent(thisUri);
    decodedUri = decodedUri
      .replace("https://[URI_Of_Your-Error_Page]?", "")
      .replace(/,/g, ",<br />&nbsp;&nbsp;&nbsp;&nbsp;")
      .replace(/{/g, "{<br />&nbsp;&nbsp;&nbsp;&nbsp;")
      .replace(/}/g, "<br />}");
    this.setState({
      decodedUri
    });
  }

  render() {
    const { decodedUri } = this.state;
    return (
      <div className="responseDiv" id="responseDiv">
        {decodedUri}
      </div>
    );
  }
}
