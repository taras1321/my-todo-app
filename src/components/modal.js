import { connect } from 'react-redux'
import { closeModal, deleteTodo } from '../store/actions'

const Modal = (props) => {
  return (
    <div className="modal-back" onClick={props.closeModal}>
      <div className="modal-el" onClick={(e) => e.stopPropagation()}>
        <h6 style={{ marginBottom: 16 }}>Видалити задачу?</h6>

        <button
          style={{ marginRight: 15 }}
          href="/"
          className="waves-effect waves-light btn-small red lighten-2"
          onClick={() => props.deleteTodo(props.id)}
        >
          Видалити
        </button>

        <button
          href="/"
          className="waves-effect waves-light btn-small grey lighten-1"
          onClick={props.closeModal}
        >
          Скасувати
        </button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    id: state.activeId,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => dispatch(closeModal()),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
