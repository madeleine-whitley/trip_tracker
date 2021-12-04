import React from 'react';

const UserEdit = ({ user }) => {

  // attr that your obj 
  const { name, id } = user 
  // in case there are error it saves the user input
  // one per attr
  const defaultName = name ? name : ""
  return (
    <>
      <h1>Create Edit User</h1>
      <form action={`/users/${id}`} method="post">
        {/* need for the update */}
        <input type='hidden' name='_method' value="patch" /> 
        <input
          type="text"
          placeholder="User name"
          required
          // these next ones are a must
          defaultValue={defaultName}
          name="user[name]"
        />
        <button type="submit">Update User</button>
      </form>
      <a href="/users">Back to Users</a>
    </>
  )
}

export default UserEdit;