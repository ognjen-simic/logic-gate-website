import TruthTable from "../components/truth-table"
import ImageBlock from "../components/image-block";
import NextButton from "../components/next-button";

function NOT()
{
    const headers = ["Input", "Output"];
    const data = [
        [1, 0],
        [0, 1]
    ];

    const items = [
    { type: "input", top: 49.5, left: 24 },
    { type: "output", top: 49, left: 76 },
  ];

    return(<div className="content">
        <h1>NOT Gate</h1>

        <p>The NOT gate is the simplest of all the logic gates.
            It takes only one input value and returns <b>the opposite</b> of that input. 
            For example, if the given input is 0 (<mark>false</mark>), the NOT gate will return
            1 (<mark>true</mark>) and vice versa.
        </p>

        <ImageBlock image="/notgate.png" alt="NOT gate image" items={items} logic="NOT" />

        <p>Try interacting with the image above and see how the gate behaves. <br/>
            The NOT gate is usually used for inverting the signals of other gates, creating
            more complex ones like <b>NOR</b>, <b>NAND</b> and <b>XNOR</b>. We'll cover those in the future lessons.
            A gate's behavior can be summarized in a <b>truth table</b>:
        </p>

        <TruthTable headers={headers} data={data}/>

        <NextButton next="and" />

    </div>)
}

export default NOT