import "../css/Counter.css"
import {schoolNumbers} from "../interfaces/interface";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const Counter = () => {
    const schoolDetails: schoolNumbers[] =[
        {
            title: "Years of creating excellence",
            number: 10,
        },
        {
            title: "Buildings",
            number: 2
        },
        {
            title:"Students Enrolled",
            number:200
        },
        {
            title:"Qualified Teachers",
            number: 15
        }
    ]
    return(
        <div className="section">
            <section className="quote">
                <div className="quote-container">
                    <BiSolidQuoteAltLeft/>
                    <h1>
                      
                        The child is made of one hundred. The child has a hundred languages,
                        a hundred hands, a hundred thoughts, a hundred ways of thinking, of playing, of speaking.
                       
                    </h1>
                    <BiSolidQuoteAltRight/>
                    <p>
                        Margaret McMillan
                    </p>
                </div>
            </section>
            <section className="counter">
                <div className="counter-container">
                    {
                        schoolDetails.map((details, index) =>{
                            return <div key={index}>
                                    <ul>
                                        <li>
                                            <p className="number">{details.number}</p><p className="title">{details.title}</p>
                                        </li>

                                    </ul>
                                </div>
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Counter