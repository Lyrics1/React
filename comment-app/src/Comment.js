import React, { Component } from 'react';
import PropTypes from 'prop-types';
//类型验证
class Comment extends Component{

	static propTypes={
	comment:PropTypes.object

	}

	constructor(){
		super();
		this.state = {
			timeString :''
		}
	}
	componentWillMount(){
		this._updateTimeString();
		this._timer=setInterval(()=>{
			this._updateTimeString()
		},3000)
	}

	componentDidMount(){
		this._updateTimeString();
	}
	
	componentWillUnmount(){
		clearInterval(this._timer)
	}

	_updateTimeString(){
		const comment = this.props.comment;
		const duration = (+Date.now() - comment.createTime)/1000;
		this.setState({
			timeString:duration>60 ?`${Math.round(duration/60)}分钟前` : `${Math.round(Math.max(duration,1))}秒前`
		})
	}

	_getProcessedContent(content){
		  return content
	      .replace(/&/g, "&amp;")
	      .replace(/</g, "&lt;")
	      .replace(/>/g, "&gt;")
	      .replace(/"/g, "&quot;")
	      .replace(/'/g, "&#039;")
	      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')

	}

	handleDelComment(){
		if(this.props.onDelComment){
				this.props.onDelComment(this.props.index);
		}
	}
	

	render(){
		return(
			<div>
				<label className="comment">
					<span className="username">{this.props.comment.username}</span> :
					<span dangerouslySetInnerHTML={{ __html: this._getProcessedContent(this.props.comment.content)
}} />
					<span className='createdtime'>{this.state.timeString} </span>
					<button className="del" onClick={this.handleDelComment.bind(this)} > 删除</button>
				</label>
			</div>
			)
	}
}
export default Comment;




