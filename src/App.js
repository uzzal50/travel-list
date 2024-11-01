import { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

export default function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems(oldItems => [...oldItems, item])
  }

  function handleDeleteItem(id) {
    setItems(oldItems => oldItems.filter(i => i.id !== id))
  }

  function handleToggleItem(id) {
    setItems(old =>
      old.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  function handleClearItems() {
    const confirmed = window.confirm('sab delete garney ho ??????')
    if (confirmed) setItems([])
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearItems}
      />
      <Stats items={items} />
    </div>
  )
}
