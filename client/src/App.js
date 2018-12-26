import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios';

class App extends Component {
  state = {
    update: false,
    items: [],
    level: '',
    nickname: '',
    class_name: ''
  }

  componentDidMount() {
    this.getItems()
  }

  getItems = () => {
    axios.get('http://localhost:8888/items').then((res) => this.setState({items: res.data}))
  }

  handleRemoveItem = (id) => {
    axios.delete(`http://localhost:8888/items/${id}`).then(() => this.getItems());
  }

  handleChange = (name) => event => {
    this.setState({[name]: event.target.value})
  }

  handleSubmit = () => {
    axios.post('http://localhost:8888/items', 
      {nickname: this.state.nickname, level: this.state.level, class_name: this.state.class_name})
      .then(() => this.setState({nickname: '', level: '', class_name: ''}))
      .then(() => this.getItems())
  }

  render() {
    const {items, level, nickname, class_name} = this.state;

    return (
      <div className="App" style={{width: '500px', margin: '0 auto'}}>
        <div className="title" style={{padding: '20px 20px 0 20px'}}>add some cat fighter</div>
        <div className="add-item" style={{padding: ' 20px 20px'}}>
          <input placeholder="level" type="number" value={level} onChange={this.handleChange('level')}/>
          <input placeholder="nickname" type="text" value={nickname} onChange={this.handleChange('nickname')}/>
          <input placeholder="classname" type="text" value={class_name} onChange={this.handleChange('class_name')} />
          <button onClick={this.handleSubmit}>add cat</button>
        </div>
        <div className="title" style={{padding: '20px', borderTop: '1px solid grey'}}>list of cat fighters:</div>
        <div className="list">
          {items && items.length ? items.map(x => 
            <Item id={x._id} nickname={x.nickname} level={x.level} class_name={x.class_name} key={x._id} remove={() => this.handleRemoveItem(x._id)}/>
          ): <div>empty</div>}
        </div>
      </div>
    );
  }
}

export default App;
