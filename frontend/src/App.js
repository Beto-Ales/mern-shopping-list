import React, { useState, useEffect } from 'react'

import itemServices from './services/items'

import ItemForm from './components/ItemForm'
import Items from './components/Items'
import TotalItems from './components/TotalItems'



const App = () => {

  const [items, setItems] = useState([])
  const [newItemName, setNewItem] = useState('')

  useEffect(() => {
    itemServices
      .getAll()
      .then(list => {
        setItems(list)
      })
  }, [])

  const handleItemNameChange = (event) => {
    setNewItem(event.target.value)    
  }

  const handleCheckItem = id => {
    const item = items.find(i => i.id === id)
    const changedItem = {...item, checked: !item.checked}

    itemServices
      .update(id, changedItem)
      .then(returnedItem => {
        setItems(items.map(item => item.id !== id ? item : returnedItem))
      })
      .catch(error => {
        alert(
          `the item '${item.name}' was already deleted from server`
        )        
      })    
  }

  const addItem = (event) => {
    event.preventDefault()

    let exist = false

    const itemObject = {
      name: newItemName,      
    }

    items.forEach((item) => {

      if( JSON.stringify(item.name.toLocaleLowerCase()) === JSON.stringify(itemObject.name.toLocaleLowerCase())) {
        
        exist = true
        
        alert(`${item.name} is already in the list, you're taking: ${item.number}`)

        return
      }
    })

    if(exist) { return }

    itemServices
      .create(itemObject)
      .then(returnedItem => {
        setItems(items.concat(returnedItem))
        setNewItem('')        
      })
      .catch(error => {
        console.log(error.message)
      })    
  }
  
  



  const handleDelete = id =>{

    let confimed = window.confirm('Confirm Delete')

    if(confimed){
      itemServices.remove(id)      
      setItems(items.filter(item => item.id !== id))
    }
    return
  }

  const handleClearList = () => {
    itemServices
      .clearList()
      setItems(items.filter(item => item.checked === false))
  }


  return (
    <div style={{textAlign: 'center'}}>
      <div className='appDiv'>
        <h2>List</h2>      
        <h3>Add New Item</h3>        
        <ItemForm addItem={addItem}
          newItemName={newItemName}
          handleItemNameChange={handleItemNameChange}          
        />        
        <TotalItems items={items} handleClearList={handleClearList}/>        
        <Items items={items} handleCheckItem={handleCheckItem} handleDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default App