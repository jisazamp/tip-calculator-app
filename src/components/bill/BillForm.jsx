import { useState } from 'react';
import PropTypes from 'prop-types';

import DollarIcon from '../../images/icon-dollar.svg';
import PersonIcon from '../../images/icon-person.svg';

const BillForm = ({ bill }) => {
  const [checked, setChecked] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(0);

  const { amount, tip, people } = bill;

  const percentages = [5, 10, 15, 25, 50];

  return (
    <form>
      <label className='form-label' htmlFor='amount'>
        Bill
      </label>
      <div className='form-group'>
        <input className='form-input' id='amount' type='number' step='any' />
        <img src={DollarIcon} alt='Dollar' />
      </div>

      <label>Select Tip %</label>
      <div className='tip-container'>
        {percentages.map((percentage) => (
          <div className='tip-radio' key={percentage}>
            <input
              type='radio'
              id={percentage.toString()}
              name='tip'
              value={percentage}
              onChange={() => setTipPercentage(percentage)}
              checked={checked === tipPercentage}
            />
            <span onClick={() => setTipPercentage(percentage)}>
              {percentage.toString()}%
            </span>
          </div>
        ))}
      </div>

      <label htmlFor='people'>Number of People</label>
      <div className='form-group'>
        <input className='form-input' id='people' type='number' />
        <img src={PersonIcon} alt='Person' />
      </div>
    </form>
  );
};

BillForm.propTypes = {
  bill: PropTypes.object.isRequired,
};

export default BillForm;
