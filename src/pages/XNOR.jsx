import ImageBlock from "../components/image-block"
import NextButton from "../components/next-button"
import TruthTable from "../components/truth-table"

function XNOR()
{
    const headers = ["Input A", "Input B", "Output"]
    const data = [
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 1]
    ]
    const items = [
        {type: "input", top: 35, left: 28},
        {type: "input", top: 64, left: 28},
        {type: "output", top: 49, left: 73}
    ]

    return(<div className="content">
        <h1>XNOR Gate</h1>
        <p>The XNOR gate is a NOT variation of the XOR gate. If only one of its inputs
            is <mark>true</mark>, while the other is <mark>false</mark>, the output will be
            <mark>false</mark>. But if both of the inputs are the same, the gate will output <mark>
            true</mark>.
        </p>

        <ImageBlock image="/xnorgate.png" alt="XNOR gate image" items={items} logic="XNOR"/>

        <p>The truth table looks like this:</p>

        <TruthTable headers={headers} data={data}/>
    </div>)
}

export default XNOR