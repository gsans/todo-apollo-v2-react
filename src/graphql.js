import gql from 'graphql-tag';

export const TODOS = gql`
  query todos {
    allTodoes { id text complete }
  }
`

export const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    createTodo(text: $text, complete: false) { id text complete }
  }
`

export const TOGGLE_TODO = gql`
  mutation toggleTodo($id: ID!, $complete: Boolean!) {
    updateTodo(id: $id, complete: $complete) { id complete }
  }
`

export const TODOS_SUBSCRIPTION = gql`
  subscription {
    Todo(filter: {
      mutation_in: [CREATED, UPDATED, DELETED]
    }) {
      mutation
      node {
        id
        text 
        complete
      }
      previousValues {
        id
        text
        complete
      }
    }
  }
`