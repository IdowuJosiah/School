import "../css/Counter.css"
import {useRef} from "react";
import {useState, useEffect} from "react";

const Counter = () => {
    const [actualValue] = useState(400)
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        if(counter === 0){
            setTimeout(function (){
                setCounter(counter + 1)
            },10)
        }
        if (counter === actualValue){
            setCounter(actualValue)
        }
    } )
    return(
        <div>
            <section>
                <div>
                    <h1>
                        "The child is made of one hundred. The child has a hundred languages,
                        a hundred hands, a hundred thoughts, a hundred ways of thinking, of playing, of speaking."
                    </h1>
                    <p>
                        Margaret McMillan
                    </p>
                </div>
            </section>
            <section>
                <div>
                    {counter}
                </div>
            </section>
        </div>
    )
}

export default Counter