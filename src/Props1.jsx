import Props from "./Props"

const Props1 = () => {
    const product = [{
        id: 1,
        name: "Car",
        brand: "BMW",
        color: "red",
    }]
  

        return (
            <div>
                {product.map((p1) => {
                    return(
                        <Props key={p1.id} {...p1} />
                    )
                })}
            </div>
        )
}

export default Props1