
const Button = () => {
  return (
    <>
    <form >
        <input type="text" />
        <button type="submit" onClick={(e)=>{e.preventDefault(); console.log("Hello")
        }} >Click</button>
    </form>
    </>
  )
}

export default Button