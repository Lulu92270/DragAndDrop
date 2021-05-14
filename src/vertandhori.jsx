import React, { useState } from 'react';
import { finalSpaceCharacters } from './initial-data';
import '@atlaskit/css-reset';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useHistory } from 'react-router-dom';
import './style.scss';

const VertiAndHori = () => {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  const history = useHistory();

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div>
      <a onClick={() => history.push("/")}>BACK</a>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div className="parent" ref={provided.innerRef}>
              {characters.map(({id, name, thumb}, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div className="characters-thumb" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <img src={thumb} alt={`${name} Thumb`} />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default VertiAndHori;
