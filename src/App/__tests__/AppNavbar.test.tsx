import React from "react";
import AppNavbar from "../AppNavbar";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { userTypes } from "../../Entities";

describe("AppNavbar", () => {
  test("Snapshot matches", () => {
    const user: userTypes.IUser = {
      name: "string",
      email: "string",
      _id: "5bcc554259e0dbfda6ed1a55",
    };

    const wrapper = shallow(
      <BrowserRouter>
        <AppNavbar
          currentUser={user}
          onLogoClick={jest.fn()}
          onLoginClick={jest.fn()}
          onLogoutClick={jest.fn()}
          onRegisterClick={jest.fn()}
        />
      </BrowserRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
