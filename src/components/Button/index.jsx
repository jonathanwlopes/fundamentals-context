export const Button = ({ children, handleClick, disabled = false }) => {
  return (
    <button disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  )
}
