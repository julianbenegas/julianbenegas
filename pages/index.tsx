import * as React from 'react'
import Nav from '../components/nav/Nav'
import Tree from '../components/Tree'

export default () => {
  return (
    <div>
      <Nav />
      <Tree />
      <style jsx>{`
        div {
          display: flex;
        }
      `}</style>
    </div>
  )
}
