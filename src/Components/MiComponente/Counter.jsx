import { useCallback } from 'react'

function Counter({ count, onIncrement }) {
  const handleIncrement = useCallback(() => {
    onIncrement(count)
  }, [count, onIncrement])

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  )
}
export default Counter;

