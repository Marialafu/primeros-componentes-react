import Ejercicio1 from './components/ejercicio-1/Ejercicio1';
import Ejercicio2 from './components/ejercicio-2/Ejercicio2.jsx';
import Ejercicio3 from './components/ejercicio-3/Ejercicio3.jsx';
import Ejercicio4 from './components/ejercicio-4/Ejercicio4.jsx';
import Ejercicio5 from './components/ejercicio-5/Ejercicio5.jsx';
import Ejercicio6 from './components/ejercicio-6/Ejercicio6.jsx';
import Ejercicio7 from './components/ejercicio-7/Ejercicio7.jsx';
import Ejercicio8 from './components/ejercicio-8/Ejercicio8.jsx';

const App = () => {
  return (
    <>
      <h1>Primeros Componentes</h1>
      <Ejercicio1 title='1.' mails={150} hours={5} />
      <Ejercicio2 title='2.' bookmarkers={10} boxes={6} />
      <Ejercicio3 title='3.' candies={34} groups={5} />
      <Ejercicio4 title='4.' km={120} hours={5} />
      <Ejercicio5 apples={320} boxes={10} />
      <Ejercicio6 screws={62} boxes={12} />
      <Ejercicio7 euros={40} worksDone={6} />
      <Ejercicio8 cookies={88} bags={7} />
    </>
  );
};

export default App;
