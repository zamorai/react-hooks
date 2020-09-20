import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

  return (
    <div>
      <Header />
      <Route path = "/">
        <Accordion items = {items} />
      </Route>
      <Route path = "/list">
        <Search />
      </Route>
      <Route path = "/dropdown">
        <Dropdown label = "Select a colot" options = {options} selected= {selected} onSelectedChange = {setSelected}/>
      </Route>
      <Route path = "/translate">
        <Translate />
      </Route>
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