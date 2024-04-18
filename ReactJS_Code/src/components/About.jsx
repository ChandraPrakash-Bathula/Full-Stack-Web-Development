import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
  }

 componentDidMount() {
    console.log("Component Did Mount.");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>About Page</h1>
        <p>Restaurant details page</p>
        {/* <Outlet /> */}
        <Profile name={"ClassComponentName"} />
        <ProfileFunctionalComponent name={"Chandu"} />
      </div>
    );
  }
}

export default About;