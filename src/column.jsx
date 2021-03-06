import React from 'react';
import styled from 'styled-components';
import Task from './task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  flex-grow: 1;
  min-height: 100px;
`;


const Column = ({column, tasks, index}) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          <Title {...provided.dragHandleProps}>{column.title}</Title>
          <Droppable droppableId={column.id} type="task">
            {provided => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
          {provided.placeholder}
        </Container>
      )}
    </Draggable>

  );
}

export default Column;
