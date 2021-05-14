export const initialData = {
  tasks: [
    { id: 'task-1', content: 'Take out the garbage' },
    { id: 'task-2', content: 'Watch my favorite show' },
    { id: 'task-3', content: 'Charge my phone' },
    { id: 'task-4', content: 'Cook dinner' },
  ],
  columns: [
    {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  ],
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    thumb: 'https://images.unsplash.com/photo-1611095973512-45224aae1990?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: 'https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: 'https://images.unsplash.com/photo-1620955206348-a6835f8e383a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    thumb: 'https://images.unsplash.com/photo-1620887145520-fc916eea31af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: 'https://images.unsplash.com/photo-1620941601872-d37f560f3887?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1134&q=80'
  }
]
