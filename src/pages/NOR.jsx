import ImageBlock from "../components/image-block"
import NextButton from "../components/next-button"
import TruthTable from "../components/truth-table"

function NOR()
{
    const headers = ["Input A", "Input B", "Output"]
    const data = [
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 0]
    ]

    const items = [
        {type: "input", top: 35, left: 28},
        {type: "input", top: 64, left: 28},
        {type: "output", top: 49, left: 73}
    ]


    return(<div className="content">
        <h1>NOR Gate</h1>
        <p>The NOR gate is a NOT variation of the OR gate. If all of the inputs are <mark>false</mark>,
        the output will be <mark>true</mark>, but if any of the inputs is <mark>true</mark>, the gate will output <mark>
        false</mark>.
        </p>

        <ImageBlock image="/norgate.png" alt="NOR gate image" items={items} logic="NOR" />

        <p>Here's the truth table for the NOR gate:</p>

        <TruthTable headers={headers} data={data}/>

        <NextButton next="xor"/>
    </div>)
}

export default NOR