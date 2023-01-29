import React, { useEffect, useState } from "react";
import Context from "./Context"


const Statedata = (props) => {
    const [color, setcolor] = useState('white')
    const [textcolor, settextcolor] = useState('#05001E')
    const [text, settext] = useState('Switch To Dark Mode')
    const [show, setshow] = useState(false)
    const [counter, setcounter] = useState(0)
    const [isEnabled, setIsEnabled] = useState(false);

    const changecolor = () => {
        if (color === 'white') {
            settext('Switch To Light Mode')
            setcolor('#05001E')
            settextcolor('white')
            setIsEnabled(previousState => !previousState);
        }
        else {
            settext('Switch To Dark Mode')
            setcolor('white')
            settextcolor('#05001E')
            setIsEnabled(previousState => !previousState);
        }
    }
    const change = () => {
        if (show === true) {
            setshow(false)
            setcounter(counter)
            if (counter > 0) {
                setcounter(counter - 1)
            }
        } else {
            setshow(true)
            setcounter(counter + 1)
        }
    }
    return (
        <Context.Provider value={{ color, setcolor, changecolor, text, settext, textcolor, settextcolor, show, setshow, counter, setcounter, change, isEnabled, setIsEnabled }}>
            {props.children}
        </Context.Provider>
    )
}

export default Statedata