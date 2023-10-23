import "./TableIMC.css";

const TableIMC = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>IMC</th>
          <th>Classificação</th>
          <th>Obesidade</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.classification}</td>
            <td>{item.info}</td>
            <td>{item.obesity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableIMC;
