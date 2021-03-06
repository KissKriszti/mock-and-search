import {useState} from 'react';
import { Button } from "@mui/material";

export default function Books({book}) {

    const [buttonText, setButtonText] = useState("Show More")

    function showMore() {
        if(buttonText === "Show More") {
            setButtonText("Show Less")
        } else {
            setButtonText("Show More")
        }
    }

    return (
        <div>
            <h2>{book.title}</h2>
            {buttonText === "Show Less" && 
                <>
                    <h5>Author: {book.author}</h5>
                    <h5>Year: {book.year}</h5>
                </>
            }
            <Button variant="outlined" onClick={showMore}>{buttonText}</Button>
        </div>
    )
}