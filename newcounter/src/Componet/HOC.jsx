
import { useState } from "react"

const HOC = (OriginalComponent) => {

    const Myadd = () => {
        const [state, setState] = useState(0)
        const handleClick = () => {
            setState(state + 1)
        }

        const handledecrese = () => {
            setState(state -1)
        }
        return (
            <>
                <OriginalComponent
                    state={state}
                    handle={handleClick}
                    decrese={handledecrese}
                />
            </>
        )
    }

    return Myadd

}

export default HOC