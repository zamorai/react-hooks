import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

const App = () => {

  return (
    <div>
      <Search />
    </div>
  )
}

export default App;

//<Accordion items = {items} />