import React from 'react'

const style = {
    backgroundColor: '#a1c394',
    display: 'flex',
    borderRadius: '10px',
    width: '8em',
    height: '1.7em',
    margin: 'auto',   
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2em'
}

const clearBtn = {
  backgroundColor: '#d1ae51',
  fontWeight: '800',
  borderRadius: '5px',
  height: '3em',
  width: '7em',
  marginTop: '1em'
}

function TotalItems({items, handleClearList}) {
  return (
    <div>
      <h3 style={style}>Items {items.length}</h3>
      <button style={clearBtn} onClick={() => handleClearList()}>Clear list</button>
    </div>
  )
    
}

export default TotalItems
