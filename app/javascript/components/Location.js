import React from 'react';

const Location = ({ location, topic }) => {

  const { id } = location
  return (
    <>
      <h3>Author: {author}</h3>
      <p>
        {body}
      </p>
      <br />
      <a href={`/trips/${trip.id}/locations`}>Go to Locations</a>
    </>
  )
}

export default Location;