import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import ToDoLists from './ToDoLists';

function App() {
  // State avriables
  const [inputList,setinputList] = useState(""); 
  const [items, setItems] =useState([]);


  const itemEvent = (event) => {
    setinputList(event.target.value)
  }

  // adding new items in the array
  const listOfItems = () => {
    setItems((oldItems) => {
      setinputList('')
      return [...oldItems, inputList]
    }) 
   
  }

  // Function to delete items
  const deleteItems = (id)=> {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id; 
      })
    })
  }

  return (
    <>
      <div className="main-div">
        <div className="center-div">
        <br/>
          
          <h1>Amaan's Todo List</h1> {/* This is the heading in center-div part */}
          <br/>
          <input type="text" placeholder='add-items'  value={inputList} onChange={itemEvent} /> 
          <button className='btn' onClick={listOfItems} > Add Items </button>  {/* This is the add item button */}

          {/* List part  */}
          <ul>  
              {items.map((itemval, index) => {
                // Here ToDoLists is a props and text,id,key,onSelect are the properties
                return <ToDoLists 
                  text={itemval}
                  id={index}
                  key={index}
                  onSelect={deleteItems}
                  />
              })}
          </ul>

        </div>
      </div>
        
          
    </>
    
  );
}

export default App;
