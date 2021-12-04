
import React from 'react';

const Locations = ({ trip, locations }) => {

  const { id, title } = trip
  const url = `/trips/${id}/locations/`
  return(
    <>
      <h1>All trips from {title}</h1>
      <a href={`/trips/${id}/locations/new`} className="btn btn-dark">Add new Location</a>
      <br />
      <ul class="list-group">
        { comments.map( (c) => (
          <li className="list-group-item">
            <h3>{c.author}</h3>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <a className="btn btn-primary" href={`${url}${c.id}`}>Show</a>
              <a className="btn btn-warning" href={`${url}${c.id}/edit`}>Edit</a>
              <a className="btn btn-danger" href={`${url}${c.id}`} data-method='delete'>
                Delete
              </a>
            </div>
          </li>
        )) }
      </ul>
    </>
  )
}

export default Locations;