import React from 'react';

class SelectionFilter extends React.Component {

    render() {
        return (
            <div className="dropdown">
                <button className="dropbtn">{this.props.filterName}
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    {this.props.filter.map((filterItem) => <a href="#" key={filterItem} >{filterItem}</a>)}
                </div>
            </div>
        )
    }
}

export default SelectionFilter;