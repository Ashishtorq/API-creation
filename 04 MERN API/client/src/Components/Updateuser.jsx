import React, { Fragment } from "react";

const Updateuser = () => {
  return (
    <Fragment>
      <h1>Update user</h1>
      <form action="">
        <div className="feilds">
          <label htmlFor=""></label>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div className="feilds">
          <label htmlFor=""></label>
          <input type="text" placeholder="Enter Email" />
        </div>
        <div className="feilds">
          <label htmlFor=""></label>
          <input type="Number" placeholder="Enter Age" />
        </div>
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default Updateuser;
