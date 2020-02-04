import * as React from 'react'
import Nav from '../components/layout/Nav'
import Tree from '../components/layout/Tree'

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
