import ImageBlock from "../components/image-block"
import NextButton from "../components/next-button"
import TruthTable from "../components/truth-table"

function XOR()
{
    const headers = ["Input A", "Input B", "Output"]
    const data = [
        [0, 0, 0],
        [0, 1, 1],
        [1, 0, 1],
        [1, 1, 0]
    ]
    const items = [
        {type: "input", top: 35, left: 28},
        {type: "input", top: 64, left: 28},
        {type: "output", top: 49, left: 73}
    ]

    return(<div className="content">
        <h1>XOR Gate</h1>
        <p>The XOR (<mark>Exclusive OR</mark>) gate is a logic gate that takes two inputs and returns <mark>true</mark> if <b>exactly
          one</b> of them is <mark>true</mark>, <b>but not both</b>. As long as only one of them is <mark>true</mark> and the other one
          is <mark>false</mark>, the result will be <mark>true</mark>. If the two  inputs are identical,
          the output will be <mark>false</mark>.
        </p>

        <ImageBlock image="/xorgate.png" alt="XOR gate image" items={items} logic="XOR"/>

        <p>The truth table looks like this:</p>

        <TruthTable headers={headers} data={data}/>

        <NextButton next="xnor"/>
    </div>)
}

export default XOR