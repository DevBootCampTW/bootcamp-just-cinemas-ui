import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header';

describe("Header Compone", () => {
    it("should have 'Just Cinemas' as header", () => {
        const node = shallow(<Header />);
        expect(node.find('h1').text()).toEqual('Just Cinemas');
    })
})