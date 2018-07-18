import MovieStills from '../../src/components/MovieStills'
import React from 'react'
import {shallow} from 'enzyme'

describe('MovieStills [Component]', () => {
    it('should render stills', () => {
    
        const stills = ["1.jpg", "2.jpg"];

        const node = shallow(<MovieStills stills={stills} />)
    
        const elements = node.find('.row').find('img');
        expect(elements.at(0).prop('src')).toBe('1.jpg');
        expect(elements.at(1).prop('src')).toBe('2.jpg');
      })
})