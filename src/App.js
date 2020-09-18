import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
  {
    title: "what is React?",
    content: 'React is a front end js framework'
  },
  {
    title: 'Why use React',
    content: 'react is a favorite js library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'you use react by creating components'
  }
]

const options = [
  {
    label: "Red text",
    value: 'red'
  },
  {
    label: "Green text",
    value: 'green'
  },
  {
    label: 'Blue text',
    value: 'blue'
  }
];

const App = () => {

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Translate />
    </div>
  )
}

export default App;

//<Accordion items = {items} />
//<Search />

/*<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
{showDropdown ?
  <Dropdown onSelectedChange = {setSelected} selected={selected} options = {options}/>
  : null
  }
*/