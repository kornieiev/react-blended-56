import { exchangeCurrency } from 'service/exchangeCurrency';

export const Form = () => {
  const handleSubmite = evt => {
    evt.preventDefault();
    const { value } = evt.target.elements.currency;

    const [amount, from, , to] = value.split(' ');
    exchangeCurrency({ amount, from, to });
  };

  return (
    <form onSubmit={handleSubmite}>
      <input placeholder="15 USD in UAH " name="currency" />
      <button type="submit">Exchange</button>
    </form>
  );
};

// {
// amount:15,
// from:"USD",
// to:"UAH"
// }
