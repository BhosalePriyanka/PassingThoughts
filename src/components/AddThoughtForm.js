import React from 'react';
import {useState} from 'react'
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = ({target}) => {
  const {value} = target
  setText(value);
};

const handleSubmit = (event) =>{
event.preventDefault();
if(text.length > 1){
  const thought =
  {
     id: generateId(),
     text: text,
     expiresAt: getNewExpirationTime(),
   }
props.addThought(thought)
setText('')
}
}

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
      value = {text}
      onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add"  />
    </form>
  );
}
