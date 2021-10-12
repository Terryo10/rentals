import React from "react";
import { Link , withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { openUp } from "../state/actions/side_bar_action";

class HeaderHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  sidepop = () => {
    this.props.openUp();
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <div className="header-area" id="headerArea">
            <div className="container h-100 d-flex align-items-center justify-content-between">
              <div className="logo-wrapper">
                <Link to="/">
                  <img
                    src="assets/img/core-img/rentit.png"
                    style={{ height: "40px" }}
                    alt=""
                  ></img>
                </Link>
              </div>

              <div className="top-search-form">
                <form onSubmit={this.search} method="POST">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your keyword"
                    name="query"
                    value=""
                    onChange={this.handleInputChange}
                    required
                  ></input>
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>

              <div
                className="suha-navbar-toggler d-flex flex-wrap"
                id="suhaNavbarToggler"
                onClick={this.sidepop}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showsidebar: state.sideBar.showsidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openUp: () => dispatch(openUp()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderHome)
);
