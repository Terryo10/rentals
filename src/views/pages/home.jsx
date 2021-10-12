import React, { Component } from "react";
import FooterGlobal from "../../components/footer";
import HeaderHome from "../../components/header";
import SideBar from "../../components/side_bar";

class Home extends Component {
  render(props) {
    return (
      <div>
        <HeaderHome></HeaderHome>
        <SideBar props={props} />
        <FooterGlobal props={this.props} />
      </div>
    );
  }
}

export default Home;
