import { Link } from "react-router-dom"

function NextButton({ next })
{
    return(<div className="next-button-container">
        <Link to={`/${next}`} className="next-button">Next: {next.toUpperCase()} Gate</Link>
    </div>)
}

export default NextButton