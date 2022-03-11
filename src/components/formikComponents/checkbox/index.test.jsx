import { shallow } from "enzyme";
import React from "react";
import toJson from 'enzyme-to-json';
import Checkbox from ".";


describe("<CustomInput /> tests", () => {
    let el;
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
            form: { errors: {}, touched: {} },
            login: jest.fn(),
            id: "Checkbox",
            disabled: false,
            value: false,
            label: "Agree",
            field: { name: "checkbox", value: true,onChange: jest.fn(), onBlur: jest.fn() },
            checked: false,
            className: "checkbox-style"
        }
        el = shallow(<Checkbox {...props} />)
    });

    it("renders correctly ", () => {
        expect(toJson(el)).toMatchSnapshot();
    });
    
    it("inserts labels correctly", () => {
        const element = el.find("span");
        expect(element.text()).toEqual(props.label);
        expect(toJson(el)).toMatchSnapshot();
    });


    it("gives the correct value when prop is set - value ", () => {
        const element = el.find("input");
        expect(element.props().value).toEqual(false);
        expect(toJson(el)).toMatchSnapshot();
    });

    it("gives the correct value when prop is set  - checked ", () => {
        const element = el.find("input");
        expect(element.props().checked).toEqual(false);
        expect(toJson(el)).toMatchSnapshot();
    });

    it("gives the correct value when the prop is changed to a non default value - checked", () => {
        const newProps = {
            ...props,
            checked: true
        }
        el.setProps(newProps);
        const element = el.find("input");
        expect(element.props().checked).toEqual(true);
        expect(toJson(el)).toMatchSnapshot();
    });

    it("gives the correct value when the prop is changed to a non default value - value", () => {
        const newProps = {
            ...props,
            value: true
        }
        el.setProps(newProps);
        const element = el.find("input");
        expect(element.props().value).toEqual(true);
        expect(toJson(el)).toMatchSnapshot();
    });

});