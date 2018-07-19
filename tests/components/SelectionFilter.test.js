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

    it('should render correct location default value', () => {
        const filter = ['Location1', 'Location2']
        const defaultValue = filter[0]
        const fn = jest.fn();
        const wrapper = shallow(<SelectionFilter filter={filter} onFilterChange={fn} />);

        const dropdownFilter = wrapper.find(Dropdown);
        expect(dropdownFilter.prop('value')).toEqual(defaultValue);
        expect(dropdownFilter.prop('onChange')).toEqual(fn);
    })

})