import React from 'react'
import Checkbox from 'material-ui/Checkbox';
import { graphql } from 'react-apollo';
import { TODOS, TOGGLE_TODO } from './graphql';

const styles = {
  checkbox: {
    margin: 15,
    fontSize: 20,
  },
  icon: {
    fill: '#ff4081',
  },
  icon2: {
    fill: 'rgba(0, 0, 0, 0.54)',
  }
};

class Todo extends React.Component {

  state = {
    complete: this.props.todo.complete,
  }

  componentWillReceiveProps(nextProps) {
    this.setState((state) => {
      return {
        complete: nextProps.todo.complete,
      };
    });
  }

  updateCheck() {
    this.props.toggleTodo(this.props.todo.id, !this.state.complete)
    this.setState((state) => {
      return {
        complete: !state.complete,
      };
    });
  }

  render () {
    return ( 
      <div className="container" onClick={this.updateCheck.bind(this)}>
        <Checkbox
          label={this.props.todo.text}
          checked={this.state.complete}
          style={styles.checkbox}
          iconStyle={this.state.complete?styles.icon:styles.icon2}
        />
      </div>
    )
  }
}

const withToggleTodo = graphql(TOGGLE_TODO,{
  props: ({ ownProps, mutate }) => ({
    toggleTodo (id, complete) {
      return mutate({
        variables: { id, complete },
        update: (store, { data: { updateTodo } }) => {
          const data = store.readQuery({ query: TODOS });
          data.allTodoes.map(t => {
            if (t.id === updateTodo.id) {
              return {
                id: updateTodo.id,
                text: t.text,
                complete: updateTodo.complete
              }
            }
            return t;
          });
          store.writeQuery({ query: TODOS, data });
        },
      })
    },
  }),
})

export default withToggleTodo(Todo)