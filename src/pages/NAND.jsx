import ImageBlock from "../components/image-block";
import TruthTable from "../components/truth-table"
import NextButton from "../components/next-button";

function NAND()
{
    const headers = ["Input A", "Input B", "Output"]
    const data = [
        [0, 0, 1],
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
        <h1>NAND Gate</h1>

        <p>The NAND gate is a NOT variation of the AND gate. A NOT variation is formed by adding a NOT gate right
            before the output of any other gate. The NAND gate does exactly the opposite of an AND gate. If both
            inputs are <mark>true</mark>, the output will be <mark>false</mark>. In any other case the gate will
            output <mark>true</mark>.
        </p>

        <ImageBlock image="/nandgate.png" alt="NAND gate image" items={items} logic="NAND" />

        <p>As you can see, all of the outputs of the AND gate have been reversed:</p>

        <TruthTable headers={headers} data={data}/>

        <NextButton next="or"/>        
    </div>)
}

export default NAND