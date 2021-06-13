import React, { useState, useEffect, useRef } from 'react';
// import './UserShow.scss';
import _ from "lodash";
import SingleRGL from './single_rgl';
import { Responsive, WidthProvider } from 'react-grid-layout';
const gridProps = window.gridProps || {};

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const RGLDeleteAdd = () => {

  const [items, setItems] = useState([0, 1, 2, 3, 4].map(function(i, key, list) {
    return {
      i: i.toString(),
      x: i * 2,
      y: 0,
      w: 2,
      h: 2,
      add: i === (list.length - 1)
    };
  }))
  const [layout, setLayout] = useState([]);

  const handleRemoveItem = (i) => {
    console.log("removing", i,);
    setItems(_.reject(items, { i: i }))
  }
  const handleAddItem = (no) => {
    console.log("Add Item");
    setItems(
      items.concat({
        i: "n" + no,
        x: (items.length * 2) % (12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      })
    )
  }
  const handleLayoutChange = (layout) => {
    setLayout(layout);
  }

  return (
    <ResponsiveReactGridLayout
      onLayoutChange={(layout) => handleLayoutChange(layout)}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
      className="layout"
      compactType="vertical"
      useCSSTransforms={true}
      preventCollision={false}
    >
      
      {items.map((item, index) => {
        return (
          
          <div data-grid={item} key={index}>
            {console.log(item)}
          {item.add ? (
            <span
              className="add text"
              onClick={() => handleAddItem(items.length)}
              title="You can add an item by clicking here, too."
            >
              Add +
            </span>
          ) : (
            <span className="text">{item.add ? "+" : item.i}</span>
          )}
          <span
            className="remove"
            style={{
              position: "absolute",
              right: "2px",
              top: 0,
              cursor: "pointer"
            }}
            onClick={() => handleRemoveItem(item.i)}
          >
            x
          </span>
        </div>
        )
      })}
    </ResponsiveReactGridLayout>
  )
}

export default RGLDeleteAdd;
