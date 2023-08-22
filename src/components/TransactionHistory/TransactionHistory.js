import PropTypes from 'prop-types'; 
import { TransaktionTable,
         TransaktionHead,
         TransaktionTitle,
         TableColor
         } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
<TransaktionTable className="transaction-history">
  <TransaktionHead>
    <TransaktionTitle>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </TransaktionTitle>
  </TransaktionHead>

  <tbody>
    {items.map(({id, type, amount, currency})=> (
      <TableColor key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </TableColor>
    ))}  
  </tbody>
</TransaktionTable>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };