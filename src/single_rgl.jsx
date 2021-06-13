import React, { useState, useEffect, useRef, forwardRef } from 'react';
import './single_rgl.scss';
import _ from "lodash";

const SingleRGL = forwardRef((props, ref) => {

  const removeStyle = {
    position: "absolute",
    right: "2px",
    top: 0,
    cursor: "pointer"
  };
  const i = props.el.add ? "+" : props.el.i;

  return (
    <div ref={ref} data-grid={props.el} {..._.omit(props, 'remove', 'add')}>
      {props.el.add ? (
        <span
          className="add text"
          onClick={props.add}
          title="You can add an item by clicking here, too."
        >
          Add +
        </span>
      ) : (
        <span className="text">{i}</span>
      )}
      <span
        className="remove"
        style={removeStyle}
        onClick={props.remove}
      >
        x
      </span>
    </div>
  );
});

export default SingleRGL;
