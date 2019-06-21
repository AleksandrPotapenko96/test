
import { connect } from 'react-redux'
import { toggleTodo } from '../../store/todos/actions'
import { VisibilityFilters } from '../../store/visibilytyFilter/action'
import ListI from '../../components/list/list';

const getVisibleList = (todos, filter) => {
	switch(filter){
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(t => t.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(t => !t.completed)
		case VisibilityFilters.SHOW_ALL:
		default:
			return todos
	}
}

const mapStateToProps = state => {
	return{
		todos: getVisibleList(state.todos, state.visibilityFilter)
	}
}

const maoDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleList = connect(
	mapStateToProps,
	maoDispatchToProps
)(ListI)

export default VisibleList

