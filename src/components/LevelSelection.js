import React from 'react';
function LevelSelection({ onLevelChange }) {
  function handleChange(event) {
    onLevelChange(event.target.value);
  }

  return (
    < div className="levels_container">
    <h4>Select Level</h4>
      <input type="radio" id="easy" name="level" value="easy" onChange={handleChange} checked />
      <label htmlFor="easy">Easy</label>
      
      <input type="radio" id="normal" name="level" value="normal" onChange={handleChange} />
      <label htmlFor="normal">Normal</label>
      
      <input type="radio" id="hard" name="level" value="hard" onChange={handleChange} />
      <label htmlFor="hard">Hard</label>
    </div>
  );
}
export default LevelSelection;