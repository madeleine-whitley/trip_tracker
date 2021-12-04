import React from 'react';

const TripEdit = ({ user, trip }) => {

  const { id } = user 
  const { name, duration } = trip
  const defaultName = name ? name : ""
  const defaultDuration = duration ? duration : ""
  return (
    <>
      <h1>New trip from the User {name}</h1>
      <form action={`/users/${id}/trips/${trip.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <label>Name</label>
        <input 
          type="text"
          required 
          defaultValue={defaultName}
          name="trip[name]"
        />
        <label>Duration</label>
        <textarea
          required 
          defaultValue={defaultDuration}
          name="trip[duration]"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default TripEdit;