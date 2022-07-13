import BillForm from './BillForm';

import '../../styles/bill.css';

const BillPage = () => {
  const bill = {
    amount: 123,
    tip: 15,
    people: 5,
  };

  return (
    <div className='container'>
      <BillForm bill={bill} />
    </div>
  );
};

export default BillPage;
