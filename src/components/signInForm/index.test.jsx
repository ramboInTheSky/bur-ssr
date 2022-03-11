import { shallow } from "enzyme";
import React from "react";
import toJson from 'enzyme-to-json';
import SignInForm from ".";
import CustomInput from "../formikComponents/customInput";

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
        login: jest.fn(),
        isSubmitting: false
        }
        el = shallow(<SignInForm {...props} />)
    });

    it("renders correctly ", () => {
        expect(toJson(el)).toMatchSnapshot();
    });

    it("Check isSubmitting prop on CustomInput(s) - False", () => {
        const newProps = {...props, isSubmitting:false};
        el.setProps(newProps)
        const inputDisabledFalse = el.find(CustomInput).first().props().disabled;
        expect(inputDisabledFalse).toEqual(false);
        expect(toJson(el)).toMatchSnapshot();

    });


    /* Not really neccessary to have both true and false. Only done to test
    * not default value
    */
    it("Check isSubmitting prop on CustomInput(s) - True", () => {
        const newProps = {...props, isSubmitting:true};
        el.setProps(newProps)
        const inputDisabledTrue = el.find(CustomInput).first().props().disabled;
        expect(inputDisabledTrue).toEqual(true);
        expect(toJson(el)).toMatchSnapshot();
    });
    

    

});