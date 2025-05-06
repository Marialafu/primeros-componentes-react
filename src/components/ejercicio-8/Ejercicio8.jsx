const Ejercicio8 = props => {
  const cookiesLeft = props.cookies % props.bags;
  return <p>8. {cookiesLeft} sobran</p>;
};

export default Ejercicio8;
