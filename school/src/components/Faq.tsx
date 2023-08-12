import React from "react";
import "../css/Faq.css";
import {questions} from "../interfaces/interface";
import {useState} from "react";

const Faq = () => {
    const [selected, setSelected]=useState(null)
    const toggle = (index :any) =>  {
            if (selected === index){
                setSelected(null)
            }
            else {
                setSelected(index)
            }

    }
    const data: questions[] =[
        {
            question:"WHAT CURRICULUM DOES THE SCHOOL FOLLOW?",
            answer:"The School follows the Nigerian and British Curriculum."
        },
        {
            question:"WHAT'S THE SCHOOL DURATION?",
            answer:"From 8:00am - 3:00pm."
        },
        {
            question:"WHAT'S THE AGE RANGE?",
            answer:"From 3 Months - 11.5 Years."
        },
        {
            question:"RELIGION?",
            answer:"Honey Rock School is a Christian School but everyone is treated equally."
        },
    ]
    return(
        <section className="faq-section">
            <div className="accordion"
                    >
                {data.map((item,index)=> {
                    return(
                        <div className="item"
                             onClick={() => toggle(index)}>
                            <div className="question">
                                {item.question}
                                <span>{selected === index ? "-" : "+"}</span>
                            </div>
                            <div className={selected === index ? "answer answer-active" : "answer"}>
                                {item.answer}
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}
export default Faq