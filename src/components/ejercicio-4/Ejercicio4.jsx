const Ejercicio4 = props => {
  const kmPerHour = props.km / props.hours;
  return (
    <p>
      {props.title} {kmPerHour} Km/hora recorre Sabrina
    </p>
  );
};

export default Ejercicio4;
