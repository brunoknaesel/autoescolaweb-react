import './table.css';

function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Aula</th>
                    <th>Tipo Aula</th>
                    <th>Categoria</th>
                    <th>Instrutor</th>
                    <th>Data</th>
                    <th>Horário</th>
                </tr>
            </thead>
            <tbody>
                <tr className="linhaRosada">
                    <td>Aula 1</td>
                    <td>Teórica</td>
                    <td>-</td>
                    <td>Elaine M</td>
                    <td>14/07/2022</td>
                    <td>08:00</td>
                </tr>
                <tr className="linhaBranquinha">
                    <td>Aula 2</td>
                    <td>Prática</td>
                    <td>Categoria A</td>
                    <td>Bruno H</td>
                    <td>15/07/2022</td>
                    <td>11:00</td>
                </tr>
                <tr className="linhaRosada">
                    <td>Aula 3</td>
                    <td>Prática</td>
                    <td>Categoria A</td>
                    <td>Elaine M</td>
                    <td>18/07/2022</td>
                    <td>10:00</td>
                </tr>
                <tr className="linhaBranquinha">
                    <td>Aula 4</td>
                    <td>Prática</td>
                    <td>Categoria A</td>
                    <td>Bruno H</td>
                    <td>19/07/2022</td>
                    <td>19:00</td>
                </tr>
                <tr className="linhaRosada">
                    <td>Aula 5</td>
                    <td>Prática</td>
                    <td>Categoria B</td>
                    <td>Yuri T</td>
                    <td>20/07/2022</td>
                    <td>20:00</td>
                </tr>
            </tbody>
        </table>
    );
}
export default Table;
