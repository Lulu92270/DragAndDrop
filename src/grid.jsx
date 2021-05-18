import React, { useState, Component } from 'react';
import { finalSpaceCharacters } from './initial-data';
import { useHistory } from 'react-router-dom';
import './grid.scss';
import GridItem from './gridItem';
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
      <ReactGridLayout className="layout" layout={layout} cols={4} onLayoutChange={onLayoutChange}>
        {characters.map(({id, name, thumb}, index) => {
          return (
            <GridItem id={id} name={name} thumb={thumb} key={index}/>
          );
        })}
        {/* <CustomComponent key="20" /> */}
        {/* <div key={index}>
          <img src="https://res.cloudinary.com/luluengineerings/image/upload/v1616505120/LuluEng/gasEngine_uenoon.png"/>
        </div>   */}
      </ReactGridLayout>
    </div>
  )
}

export class CustomComponent extends Component {
  render() {
    return (
      <div {...this.props} className={`wrapper ${this.props.className}`}>
        Hello
      </div>
    );
  }
}

export default Grid;
