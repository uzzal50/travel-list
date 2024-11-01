export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className='stats'>
        <em>Start Adding</em>
      </p>
    )
  }

  const numItems = items.length
  const packedItems = items.filter(i => i.packed).length
  const per = Math.round((packedItems / numItems) * 100)

  return (
    <footer className='stats'>
      <em>
        {per === 100
          ? 'You got everything to go🏄‍♂️'
          : ` You have ${numItems} items on your list , and you already packed 
        ${packedItems} (${per}%)`}
      </em>
    </footer>
  )
}
