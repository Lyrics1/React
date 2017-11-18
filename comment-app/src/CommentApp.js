import React,{Component} from 'react';

import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component{
	constructor(){
		super()
		this.state=({
			comment:[]
		})
	}
	componentWillMount(){
		this._loadSubmitComment();
	}
	_loadSubmitComment(){
		let comment = localStorage.getItem('comment');
		if(comment){
			comment = JSON.parse(comment);
			this.setState({comment})
		}
	}
	_saveSubmitComment(comment){
		localStorage.setItem('comment',JSON.stringify(comment))
	}
	handleSubmitComment(comment){
		// console.log(comment);
		this.state.comment.push(comment);
		this.setState({
			comment:this.state.comment
		})

		this._saveSubmitComment(this.state.comment)
	}


	handleDelComment(index){
		console.log(index)
		 const comment = this.state.comment
		comment.splice(index, 1)
    this.setState({ comment })
    this._saveSubmitComment(comment)

	}
	render(){
		return (
			<div className="wrapper">
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)}  />
				<CommentList comment={this.state.comment} onDelComment ={this.handleDelComment.bind(this)} />
			</div>
			)
	}
}

export default CommentApp;