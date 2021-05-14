import React, { useState } from 'react';
import { finalSpaceCharacters } from './initial-data';
import { useHistory } from 'react-router-dom';
import './grid.scss';

import RGL, { WidthProvider } from "react-grid-layout";
const ReactGridLayout = WidthProvider(RGL);

const Grid = () => {
  const history = useHistory();
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  const noCols = 4;
  const noRows = 10;

  let layout = [];
  for(let k = 0; k <= characters.length; k++) {
    layout = [
      ...layout,
      { i: `${k}`, x: k % 4, y: k, w: 1, h: 2 }
    ]
  }

  const onLayoutChange = (layout) => {
    console.log(layout)
  }
  return (
    <div>
      <a onClick={() => history.push("/")}>BACK</a>
      {/* {console.log(layout)} */}
      <ReactGridLayout className="layout" layout={layout} cols={4} onLayoutChange={onLayoutChange}>
        {characters.map(({id, name, thumb}, index) => {
          return (
            <div className="characters-thumb" key={id}>
              <img src={thumb} alt={`${name} Thumb`} />
            </div>
          );
        })}
      </ReactGridLayout>
    </div>
  )
}

export default Grid;
