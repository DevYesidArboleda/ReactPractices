import React, { useState } from 'react'

export const ButtonState = () => {
    //let count = 0;
    const [FinalCount, setFinalCount] = useState(0)

    const handleClick = () => {
        console.log("clickeame")
        setFinalCount(FinalCount+1)
    }

    return (
        <button onClick={handleClick}>ButtonState{FinalCount}</button>
    )
}
export default ButtonState;