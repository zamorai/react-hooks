import React, {useState, useEffect, useRef} from 'react'

export default function Dropdown({options, selected, onSelectedChange}) {

  const[open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
        if(ref.current.contains(event.target)) {
         return;
        }
        setOpen(false);
      }
    

    document.querySelector("body").addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    }

  }, [])

  const renderedItems = options.map(option => {
    if(option.value===selected.value) {
      return null;
    }

    return (
      <div onClick={() => onSelectedChange(option)} key = {option.value} className = 'item'>
        {option.label}
      </div>
    );
  })
  
  //use ref.current to get where the ref us being used
  return (
    <div ref={ref} className ="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div onClick = {() => setOpen(!open)} className ={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">
            {selected.label}
          </div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedItems}
          </div>
        </div>
      </div>
    </div>
  )
}
