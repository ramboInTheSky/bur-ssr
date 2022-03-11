import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import { Field } from "formik";
import React from "react";
import CustomInput from ".";

describe("<CustomInput /> tests", () => {
    let props = {
        history: {
            push: jest.fn()
        },
        login: jest.fn()
    };
    let el;
    beforeEach(() => {
        props = {
            history: {
                push: jest.fn()
            },
            login: jest.fn(),
            label: "Email",
            name: "email",
            type: "email",
            labelClassName: "label-style",
            inputClassName: "input-style",
            isSubmitting: jest.fn(),
            disabled: false
        }
        el = shallow(<CustomInput {...props} />)
    });

    it("renders correctly ", () => {
        expect(toJson(el)).toMatchSnapshot();
    });

    it("Invalid Email error shows up when user is typing an invalid email", () => {
        const element = el.find("span");
        expect(element.text()).toEqual(props.label);
        expect(toJson(el)).toMatchSnapshot();
    });

    it("testing className for Field input", () => {
        const element = el.exists({ className: props.inputClassName })
        expect(element).toEqual(true);
        expect(toJson(el)).toMatchSnapshot();
    });

    it("testing disabled for Field input", () => {
        const newProps = { ...props, disabled: true }
        el.setProps(newProps)
        const disableTest = el.find(Field).props()
        expect(disableTest.disabled).toBe(true);
        expect(toJson(el)).toMatchSnapshot();
    });

    it("testing name of field input is email", () => {
        const nameTest = el.find(Field).props()
        expect(nameTest.name).toEqual(props.name)
        expect(toJson(el)).toMatchSnapshot();
    });

    it("testing name of Password input is password", () => {
        // Change props
        const newProps = {
            ...props,
            label: "Password",
            name: "password",
            type: "password",
        }
        el.setProps(newProps)
        const nameTest = el.find(Field).props()
        expect(nameTest.name).toEqual(newProps.name)
        expect(toJson(el)).toMatchSnapshot();
    });

});