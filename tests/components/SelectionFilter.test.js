import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from 'react-dropdown'
import SelectionFilter from '../../src/components/SelectionFilter';

describe('SelectionFilter [Component]', () => {
    it('should render correct location options', () => {
        const filter = ['Location1', 'Location2']
        const wrapper = shallow(<SelectionFilter filter={filter} />);

        const dropdownFilter = wrapper.find(Dropdown);
        expect(dropdownFilter.prop('options')).toEqual(filter);
    })
})