import ImageBlock from "../components/image-block";
import TruthTable from "../components/truth-table"
import NextButton from "../components/next-button";

function AND()
{
    const headers = ["Input A", "Input B", "Output"]
    const data = [
        [0, 0, 0],
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
        <h1>AND Gate</h1>

        <p>The AND gate is a logical gate that takes two input values and
            only returns <mark>true</mark> if <b>both</b> of the inputs are also <mark>true</mark>. 
            In any other case, the result will be <mark>false</mark>.
        </p>

        <ImageBlock image="/andgate.png" alt="AND gate image" items={items} logic="AND" />

        <p>It's behavior can be summarized in a truth table like this:</p>

        <TruthTable headers={headers} data={data}/>

        <NextButton next="nand"/>        
    </div>)
}

export default AND