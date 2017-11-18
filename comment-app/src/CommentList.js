import React,{Component} from 'react';
import Comment from './Comment';

class CommentList extends Component{
	static defaultProps ={
		comment:[]
	}
	
	handleDelComment(index){
		if(this.props.onDelComment){
			this.props.onDelComment(index)
		}
	}


	render(){
		return(
			<div>
				
				 {this.props.comment.map((comment, i) => <Comment comment={comment} key={i} index={i} onDelComment={this.handleDelComment.bind(this)} />)}
			</div>
			)
	}
}

export default CommentList;