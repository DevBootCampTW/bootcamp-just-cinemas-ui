import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class SelectionFilter extends React.Component {

    render() {
        const options = this.props.filter;
        return (
            <Dropdown options={options} onChange={this.props.onFilterChange} value={this.props.value}/>
        )
    }
}

export default SelectionFilter;