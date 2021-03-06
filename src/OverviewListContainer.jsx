import React from "react";
import ReactDOM from "react-dom";
import OverviewList from "./OverviewList";
import fakerData from "./fakerData";
import PropTypes from "prop-types";

class OverviewListContainer extends React.PureComponent {
  static childContextTypes = {
    customElement: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  getChildContext() {
    const { container } = this.state;
    return {
      customElement: container
    };
  }

  render() {
    return (
      <div
        id="scroll-wrapper"
        className="content-container"
        ref={e => this.setState({ container: e })}
      >
        <div className={"artwork"} />
        <div className={"header-sticky"}>List of profiles</div>
        <OverviewList items={fakerData(200)} />
      </div>
    );
  }
}

export default OverviewListContainer;
