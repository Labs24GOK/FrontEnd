import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { filterParentTable } from '../../../../actions';

const SearchParentTable = props => {
    const handleSearchInput = (e) => {
        const searchTerm = e.target.value;
        props.filterParentTable(searchTerm)
      
      }
    return (
        <>
            <input
              className="row-above-input"
              type="text"
              name="Search"
              placeholder="Search by ID, Parent name, Phone number etc..."
              value={props.searchTerm}
              onChange={handleSearchInput}
          />
        </>
    )
}

const mapStateToProps = state => {
    return {
      searchTerm: state.parentReducer.searchTerm
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      { filterParentTable }
    )(SearchParentTable)
  )