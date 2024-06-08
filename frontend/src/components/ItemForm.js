import React from "react"

const btnStyle = {
  backgroundColor: '#d1ae51',
  fontWeight: '800',
  borderRadius: '5px',
  height: '3em',
  width: '4em',
  marginTop: '1em'
}

const inputStyle = {
  width: '8em',
  border: 'none',
  borderRadius: '5px',
  textAlign: 'center',
  height: '2em',
  backgroundColor: '#d7d5b9',
  fontWeight: '800',
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  margin: 'auto'
}

const ItemForm = ({addItem, newItemName, handleItemNameChange, newNumber, handleNumberChange}) => {
    return(
        <form style={formStyle} onSubmit={addItem}>
        <div style={{alignSelf: 'end'}}>
          <input style={inputStyle} value={newItemName} onChange={handleItemNameChange} placeholder="Item Name"/>
        </div>        
        <div>
          <button style={btnStyle} type="submit" >Add</button>
        </div>
      </form>
    )    
}

export default ItemForm