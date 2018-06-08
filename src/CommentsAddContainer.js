import {connect} from 'react-redux';
import AddComment from './AddComment';
import {addComment} from './actions';

const mapDispatchToProps = dispatch => ({
  	addComment: (id) => dispatch(addComment(id))
});

export default connect(null, mapDispatchToProps)(AddComment);