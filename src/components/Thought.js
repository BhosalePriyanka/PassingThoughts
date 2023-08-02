import React from 'react';
import { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(()=>{
    
    const remove = setTimeout(() =>{
      removeThought(thought.id)
    },thought.expiresAt - Date.now())
    return ()=>{
      clearInterval(remove)
    }
  },[thought])
  

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
