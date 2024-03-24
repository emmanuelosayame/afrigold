import React from 'react';

const profile = () => {
  return (
    <section className="max-w-xl mt-8 mx-auto">
      <h2>Profile</h2>
      <div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <button>Save</button>
      </div>
    </section>
  );
};

export default profile;
