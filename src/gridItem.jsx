import React, { forwardRef } from 'react';
import './grid.scss';

const GridItem = forwardRef((props, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={"characters-thumb " + props.className}
    >
      {props.children}
      <img src={props.thumb} alt={`${props.name} Thumb`} />
    </div>
  );
});

export default GridItem;
