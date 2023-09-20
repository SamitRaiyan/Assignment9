import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Filter = (props) => {
  const remote = props.remote;
  const onsite = props.onsite;
  return (
    <div>
      <div className="dropdown dropdown-bottom">
        <label tabIndex={0} className="btn m-1">
          Filter
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 gap-3"
        >
          <li>
            <button
              onClick={()=> remote('Remote')}
              className="px-4 py-1 text-white rounded-md bg-blue-600"
            >
              Remote Jobs
            </button>
          </li>
          <li>
            <button onClick={()=>onsite('Onsite')} className="px-4 py-1 text-white rounded-md bg-blue-600">
              Onsite Jobs
            </button>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Filter;
