function TruthTable({ headers, data })
{
    return(
        <table className="truth-table">
            <thead>
                <tr>
                    {headers.map((header, index) => 
                        (<th key={index} className="table-header">{header}</th>))}
                </tr>   
            </thead>
            <tbody>
                 {data.map((row, rowIndex) => 
                        (<tr key={rowIndex}>{row.map((cell, cellIndex) => 
                        <td key={cellIndex}>{cell}</td>)}</tr>))}
            </tbody>
        </table>
    )
}

export default TruthTable