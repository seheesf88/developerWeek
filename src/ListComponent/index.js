import React from 'react';
import { Link } from 'react-router-dom'

const ListComponent = (props) => {
  console.log(props)

  const lists = props.lists.map(list => {
    return <tr key={list._id}>
        <td>{list.date}</td>
        <td><Link to={`/${list._id}`}>{list.poi.name}</Link></td>
        <td>{list.address.streetNumber}</td>
        <td>{list.address.streetName}</td>
        <td>{list.address.municipality}</td>
          <td>{list.address.countrySubdivision}</td>
      </tr>
  });

  return (
    <div>
        <h1>Today's deal</h1>
        <table>
          <thead>
            <tr>
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
  )
}

export default ListComponent
