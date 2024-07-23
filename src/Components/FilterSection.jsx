import React from 'react'

const FilterSection = () => {
    return (
      <>
      <div className="filter-section container mt-4">
      <div className="row">
        <div className="col-md-4 mb-3">
          <input type="text" className="form-control" placeholder="Location" />
        </div>
        <div className="col-md-4 mb-3">
          <input type="text" className="form-control" placeholder="Property Type" />
        </div>
        <div className="col-md-4 mb-3">
          <input type="text" className="form-control" placeholder="Bedroom" />
        </div>
        <div className="col-12 text-center">
          <button className="btn btn-success">Find Property</button>
        </div>
      </div>
    </div>
      </>
    )
  }
  
  export default FilterSection