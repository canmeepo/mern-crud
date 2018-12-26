import React, { Component } from 'react';
import axios from 'axios';

class Item extends Component {
  state = {
    update: false,
    nickname: this.props.nickname,
    level: this.props.level,
    class_name: this.props.class_name
  }

  handleUpdate = () => {
      if (this.state.update) {
        axios.patch(`http://localhost:8888/items/${this.props.id}`, 
            {nickname: this.state.nickname, level: this.state.level, class_name: this.state.class_name})
            .then(() => this.setState({update: false}));
      } else {
          this.setState({update: true});
      }
  }

  handleChange = (name) => event => {
    this.setState({[name]: event.target.value})
  }

  render() {
    const {nickname, level, class_name, update} = this.state;

    return (
        <div className="item" style={{padding: '10px', margin: '10px', border: '1px solid grey'}}>
            <div className="name">level: {!update? <span>{level}</span> : <input value={level} type="number" onChange={this.handleChange('level')} />}</div>
            <div className="name">nickname: {!update? <span>{nickname}</span> : <input defaultValue={nickname} type="text" onChange={this.handleChange('nickname')} />}</div>
            <div className="class">class: {!update? <span>{class_name}</span> : <input defaultValue={class_name} type="text" onChange={this.handleChange('class_name')} />}</div>
            <button onClick={this.handleUpdate}>{update ? 'save' : 'update'}</button>
            <button onClick={this.props.remove}>delete</button>
        </div>
    );
  }
}

export default Item;
