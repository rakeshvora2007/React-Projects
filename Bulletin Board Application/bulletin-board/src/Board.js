import React, {Component} from 'react';
import './App.css';
import Note from './Note';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {notes:[]};
  }



  nextId = () => {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  }

  add = (text) => {
    var notes = [
      ...this.state.notes,
      {
        id: this.nextId(),
        note:text
      }
    ]
    this.setState({notes})
  }

  update = (newText, id) => {
    var notes = this.state.notes.map(
        note => (note.id != id) ?
          note :
          {
            ...note,
            note: newText
          }
    )
    this.setState({notes})
  }

  remove = (id) => {
    var notes = this.state.notes.filter(note => note.id != id)
    this.setState({notes})
  }

  eachNote = (note) => {
    return (<Note key={note.id}
                  id={note.id}
                  onChange={this.update}
                  onRemove={this.remove}>
                  {note.note}
            </Note>)
  }

  render() {
    return (<div className="board">
              {this.state.notes.map(this.eachNote)}
              <button onClick= {() => this.add("New Note")}>+</button>
            </div>)
  }
}
Board.propTypes = {
  count:(props, propName, componentName, location, propFullName) => {
    if (typeof props[propName] !== "number"){
      return new Error ("The count must be a number");
    }

    if (props[propName] > 100) {
      return Error ("Creating " + props[propName] + " notes is ridiculous");
    }
  }
}

export default Board;
