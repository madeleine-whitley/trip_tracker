import React from 'react';

const Trip = ({ user, trip }) => {

  const { id } = user
  const { name, duration } = trip
  return (
    <>
      <h1>Trip: {name}</h1>
      <h1>User: {fullName}</h1>
      <p>
        {duration}
      </p>
      <a href={`/users/${id}/trips`}>Show page of {fullName}</a>
    </>
  )
}

export default Trip;