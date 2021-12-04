import React from "react";

const TripNew = ({ trip, user }) => { 
    const { id } = user
    const { name, duration } = trip
    const defaultName = name ? name : ""
    const defaultDuration = duration ? duration : ""
    return (
      <>
        <h1>Add Trip</h1>
        <form action={`/users/${id}/trips`} method="post">
          <label>Place</label>
          <input
            placeholder="Name"
            type="text"
            defaultValue={defaultName}
            name="trip[name]"
          />
          <label>Duration</label>
          <input
            placeholder="Duration"
            type="text"
            defaultValue={defaultDuration}
            name="trip[duration]"
          />
          <button type="submit">Add</button>
        </form>
      </>
      
    );
}

export default TripNew;