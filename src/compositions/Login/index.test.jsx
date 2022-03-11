import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import * as React from "react";
import Loader from "react-loader";
import { LoginComponent } from ".";

describe("Testing login component", () => {
  let props = {
    history: {
      push: jest.fn()
    },
    login: jest.fn()
  };

  beforeEach(() => {
    props = {
      history: {
        push: jest.fn()
      },
      login: jest.fn()
    };
  });

  it("renders correctly ", () => {
    expect(shallow(<LoginComponent {...props} />)).toMatchSnapshot();
  });

  it("Loader shows up if loading is set to false", () => {
    const wrapper = shallow(<LoginComponent {...props} />);
    wrapper.setState({
      loading: true
    });
    expect(wrapper.find(Loader)).toHaveLength(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });



});
