import { connect } from 'react-redux'
import { addTodo } from '../store/actions'

const Form = (props) => {
  const keyPressHandler = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value === '') return

      const item = {
        value: event.target.value,
        complited: false,
      }

      event.target.value = ''

      props.addTodo(item)
    }
  }

  return (
    <div
      className={'input-field'}
      style={{
        marginTop: '2rem',
      }}
    >
      <input
        required
        type="text"
        id="title"
        placeholder="Введіть назву задачі"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor={'title'} className="active">
        Введіть назву задачі
      </label>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (item) => dispatch(addTodo(item)),
  }
}

export default connect(null, mapDispatchToProps)(Form)
