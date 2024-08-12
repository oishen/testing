import { useState } from "react"

const UpdateNum = () => {

    const [num, setNum] = useState(0)
    const [name, setName] = useState("Sen")

    const onAdd = (e) => {
        e.preventDefault()
        if(num < 5){
            setNum(num + 1)
        }
    }

    const onSub = (e) => {
        e.preventDefault()
        if(num > 0){
            setNum(num - 1)
        }
    }

    const onReset = (e) =>{
        e.preventDefault()
        setNum(0)
    }

    const onChange = (e) =>{
        // console.log(name)
        setName(e.target.value)
    }

  return (
    <>
        {/* <div>Number: {num} </div>
        <button onClick={onAdd} >Add 1</button>
        <button onClick={onReset} >Reset</button>
        <button onClick={onSub} >Sub 1</button> */}
        <h2>Name: {name}</h2>
        <form onChange={onChange}>
            <input type="text" value={name} />
        </form>
    </>

  )
}

export default UpdateNum