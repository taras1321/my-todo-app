import { connect } from 'react-redux'
import ToDoItem from './toDoItem'
import Loading from './loading'
import Modal from './modal'
import { fetchTodos, showModal } from '../store/actions'
import { Component } from 'react'

class ToDoList extends Component {
  async componentDidMount() {
    await this.props.fetchTodos()
  }

  onDelete = (id) => {
    this.props.showModal(id)
  }

  render() {
    if (this.props.loading) {
      return <Loading />
    }

    if (this.props.todos.length === 0) {
      return (
        <p
          style={{
            textAlign: 'center',
            color: 'rgba(0, 0, 0, .5)',
          }}
        >
          Ви ще нічого не добавили
        </p>
      )
    }

    return (
      <>
        {this.props.showModalItem ? <Modal /> : null}
        <ul>
          <li>
            {this.props.todos.map((item) => {
              return (
                <ToDoItem
                  key={item.id}
                  id={item.id}
                  title={item.value}
                  complited={item.complited}
                  onDelete={this.onDelete}
                />
              )
            })}
          </li>
        </ul>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    loading: state.loading,
    showModalItem: state.showModal,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    showModal: (id) => dispatch(showModal(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
