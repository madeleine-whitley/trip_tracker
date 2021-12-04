import React from "react";

const TripNew = ({ trip }) => {
    const { name, duration, errors } = trip;
    const defaultName = name ? name : "";
    const defaultDuration = duration ? duration : "";
    return (
      <>
        <h1>Add Trip</h1>
        { errors && errors }
        <form action="/trips" method="post">
          <input
            placeholder="Name"
            type="text"
            defaultValue={defaultName}
            name="trip[name]"
          />
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