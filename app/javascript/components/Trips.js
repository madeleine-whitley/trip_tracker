import React from "react";

const Trips = ({ trips, user }) => {
  const { id } = user
  return (
    <>
      <h1>Trips</h1>
      <a href="/trips/new">Add Trip</a>
      <br />
      <h2>{ trips.length <= 0 ? "No Trips" : "" }</h2> 
      { trips.map((trip) => (
        <div>
          <a href={`/trips/${trip.id}`}>{trip.name}</a>
        </div>
      ))}
    </>
  )
}

export default Trips;