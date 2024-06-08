import React from "react"

const liStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2.6em'
}

const btnStyle = {
    backgroundColor: '#d1ae51',
    fontWeight: '800',
    borderRadius: '5px',
    height: '3em',
    width: '3em'
  }



const Item = ({name, checked, handleCheckItem, handleDelete, id}) => {

    const spanStyle = {
        margin: '0.5em',
        backgroundColor: '#d7d5b9',
        borderRadius: '10px',
        padding: '0.4em',
        fontWeight: '600',
        width: '12em',
    }

    if (checked) {
        spanStyle['textDecoration'] = 'line-through'
    } else {
        spanStyle['textDecoration'] = 'none'
    }

    return (
        
        <li style={liStyle}>
            <span style={spanStyle}>{name} </span>
            <button style={btnStyle} onClick={() => handleCheckItem(id)}>&#10003;</button>                
            <button style={btnStyle} onClick={() => handleDelete(id)}>&#10007;</button>
        </li>
        
    )
}

const itemStyle = {
    padding: 0,
    textAlign: 'left'
}


const Items = ({ items, handleCheckItem, handleDelete }) => {
    return(
        <ul style={itemStyle}>     
            {items.map(item => <Item key={item.id}name={item.name} number={item.number} id={item.id} checked={item.checked} handleCheckItem={handleCheckItem} handleDelete={handleDelete}/>)}
        </ul>
    )
}

export default Items