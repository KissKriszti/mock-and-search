import {useState} from 'react';

export default function Books({book}) {

    const [buttonText, setButtonText] = useState("Show More")

    function showMore() {
        if(buttonText === "Show More") {
            setButtonText("Close")
        } else {
            setButtonText("Show More")
        }
    }

    return (
        <div>
            <h2>{book.title}</h2>
            {buttonText === "Close" && 
                <>
                    <h5>Author: {book.author}</h5>
                    <h5>Year: {book.year}</h5>
                </>
            }
            <button onClick={showMore}>{buttonText}</button>
        </div>
    )
}