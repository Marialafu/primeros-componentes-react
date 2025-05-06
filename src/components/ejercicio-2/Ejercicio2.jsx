const Ejercicio2 = props => {
  const amountBookmarks = props.bookmarks * props.boxes;
  return (
    <p>
      {props.title} {amountBookmarks + 'marcadores en total'}
    </p>
  );
};

export default Ejercicio2;
