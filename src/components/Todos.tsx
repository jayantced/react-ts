import React from 'react'

const Todos: React.FC<{items: string[]}> = (props) => {
  return (
    <ul>
        <li>React</li>
        <li>Typescript</li>
    </ul>
  )
}

export default Todos