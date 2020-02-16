import React from 'react';
import { Link } from 'react-router-dom'

const ListComponent = (props) => {
  console.log(props)

  const lists = props.lists.map(list => {
    return <tr key={list._id} className="text-center">
            <td><Link to={`/${list._id}`}>{list.poi.name}</Link></td>
            <td>{list.address.streetNumber}</td>
            <td>{list.address.streetName}</td>
            <td>{list.address.municipality}</td>
          <td>{list.address.countrySubdivision}</td>
      </tr>
  });

  return (
    <div className="container offset-2">
      <div className="row mt-3 mb-3 ml-5">
        <h1>Today's deal</h1>
        <table className="table">
          <thead className="text-center">
            <tr className="">
              <th scope="col">Name</th>
              <th scope="col">#</th>
              <th scope="col">Street</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            {lists}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListComponent
