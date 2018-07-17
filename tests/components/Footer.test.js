import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/components/Footer';

describe("Footer Component", () => {
    it("should have 'About Us'", () => {
        const node = shallow(<Footer />);

        expect(node.find('a').first().prop('children')).toEqual('About Us');
    })

    it("should have 'Terms and Conditions'", () => {
        const node = shallow(<Footer />);
        
        expect(node.find('a').last().prop('children')).toEqual('Terms and Conditions');
    })
})