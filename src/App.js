import Greeting from './components/Greeting';
import Paragraph from './components/Paragraph';
import './App.css';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: '02'
  }

  const funcao = () => {
    console.log ('uepaaaaaaaaaaa');
  }

  return (
    <>
      <div className="App">
      <Greeting user={user} />
      <Paragraph usuario={user}>Lorem ipsum jsijdsljdlksasaudghisoadsalkndsa gdfgfd fniohdiosah {user.firstName} dhiosahdiosad </Paragraph>
      <Paragraph funcao={funcao} />
      </div>
    </>
  );
}

export default App;