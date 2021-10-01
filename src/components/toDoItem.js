import { connect } from 'react-redux'
import { toggleTodo } from '../store/actions'

const ToDoItem = (props) => {
  function deleteItemHandler(event) {
    event.preventDefault()

    props.onDelete(props.id)
  }

  function toggleHandler() {
    props.toggleTodo(props.id)
  }

  const cls = ['todo']
  if (props.complited) {
    cls.push('complited')
  }

  return (
    <>
      <div className={cls.join(' ')}>
        <label>
          <input
            type="checkbox"
            onChange={toggleHandler}
            checked={props.complited}
          />

          <span>{props.title}</span>
          <i
            className="material-icons grey-text trash"
            onClick={deleteItemHandler}
          >
            delete
          </i>
        </label>
      </div>
    </>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  }
}

export default connect(null, mapDispatchToProps)(ToDoItem)
