import { useState } from 'react'

export default function Form({ onAddItems }) {
  const [desc, setDesc] = useState('')
  const [qua, setQua] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!desc) return
    const newItem = { desc, qua, id: Date.now(), packed: false }
    onAddItems(newItem)

    setDesc('')
    setQua('')
  }

  return (
    <form className='add-form' onSubmit={e => handleSubmit(e)}>
      <h3>What do you need for trip?</h3>
      <select value={qua} onChange={e => setQua(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='item'
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}
