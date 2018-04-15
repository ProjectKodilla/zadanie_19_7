import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment} from './action'
import {thumbDownComment} from './action'
import {removeComment} from './action'

const mapDispatchToProps = dispatch => ({
    thumbUpComment: id => dispatch(thumbUpComment(id)),
    thumbDownComment: id => dispatch(thumbDownComment(id)),
    removeComment: id => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);