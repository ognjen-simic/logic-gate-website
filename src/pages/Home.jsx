import { Link } from "react-router-dom"

function Home()
{
    return(<div className="content">

        <h1>Introduction</h1>

        <p>
            This website will teach you all the basics you need to know about logic gates. You will learn
            what they are, how they work and how they are used in today's technology. We will start with
            the basics.
        </p>

        <h1>What are logic gates?</h1>

        <p>Logic gates are, in short, small devices that take input signal and give output based on logical
            rules they've been given. They most often take 1-2 inputs, which can have one of 2 states: 0 (<mark>false</mark>)
            and 1 (<mark>true</mark>). By themselves, they don't seem to do much, but by combining thousands of logic gates
            into bigger contraptions, we can have everything necessary to build our own processors, memory
            and all kinds of electronics we use every day.
        </p>

        <h1>Types of logic gates</h1>

        <p>There are several types of logic gates, each with their own unique behaviour. The difference between them
            can vary from the number of inputs they take, to the logical operation they perform. Knowing this, you
            are ready to start learning.
        </p>

        <div className="next-button-container">
             <Link to="/not" className="next-button">Next: NOT Gate</Link>
        </div>

    </div>)
}

export default Home