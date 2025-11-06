import ImageBlock from "../components/image-block"
import NextButton from "../components/next-button"
import TruthTable from "../components/truth-table"

function OR()
{
    const headers = ["Input A", "Input B", "Output"]
    const data = [
        [0, 0, 0],
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ]

    const items = [
       {type: "input", top: 35, left: 28},
        {type: "input", top: 64, left: 28},
        {type: "output", top: 49, left: 73}
    ]


    return(<div className="content">
        <h1>OR Gate</h1>
        <p>The OR gate is a logic gate that takes two inputs and returns <mark>true</mark> as
        long as <b>any</b> of them are also <mark>true</mark>. If all of the inputs are <mark>false</mark>,
        only then will the result be <mark>false</mark>.
        </p>

        <ImageBlock image="/orgate.png" alt="OR gate image" items={items} logic="OR" />

        <p>Here's the corresponding truth table:</p>

        <TruthTable headers={headers} data={data}/>

        <NextButton next="nor"/>
    </div>)
}

export default OR