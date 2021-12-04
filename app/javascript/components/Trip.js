import React from 'react';

const Trip = ({ user, trip }) => {

  const { id, full_name } = user
  const { name, duration } = trip
  return (
    <>
      <h1>Trip: {name}</h1>
      <h1>User: {full_name}</h1>
      <p>
        {duration}
      </p>
      <a href={`/users/${id}`}>Show page of {full_name}</a>
    </>
  )
}

export default Trip;