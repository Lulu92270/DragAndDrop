import React, { useState } from 'react';
import { initialData } from './initial-data';
import Column from './column';
import styled from 'styled-components';
import '@atlaskit/css-reset';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  display: flex;
`;

const App = () => {
  const history = useHistory();
  const data = initialData
  const [count, setCount] = useState(0)

  function handleOnDragEnd(result) {
    const { destination, source, draggableId, type } = result;
    if(!destination) {
      return;
    }
    if(// The user drag the item at the same position to where it was
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if(type === 'column') {
      const newColumnOrder = Array.from(data.columnOrder)
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      data.columnOrder = newColumnOrder;
      setCount(count => count + 1)
      return;
    }

    const start = data.columns.find(column => column.id === source.droppableId)
    const finish = data.columns.find(column => column.id === destination.droppableId)

    if(start === finish) { // If the task is moved into the same column
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      data.columns.find(c => c.id === start.id).taskIds = newTaskIds
      setCount(count => count + 1)
      return;
    } 

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    data.columns.find(c => c.id === start.id).taskIds = startTaskIds

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    data.columns.find(c => c.id === finish.id).taskIds = finishTaskIds
    setCount(count => count + 1)
  }

  return (
    <div>
      <div className="nav">
        <div 
          className="inner-div"
          onClick={() => history.push("/example1")}
        >
          DND
        </div>
        <div 
          className="inner-div"
          onClick={() => history.push("/example2")}
        >
          VertAndHori
        </div>
        <div 
          className="inner-div"
          onClick={() => history.push("/grid")}
        >
          Grid
        </div>
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {(provided) => (
            <Container
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.columnOrder.map((column, index) => {
                const c = data.columns.find(col => col.id === column)
                return (
                  <Column 
                    key={c.id} 
                    column={c} 
                    tasks={c.taskIds.map(taskId => data.tasks.find(task => task.id === taskId))} 
                    index={index}        
                  />
                )}
              )}
              {provided.placeholder}
            </Container>
          )}

        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
