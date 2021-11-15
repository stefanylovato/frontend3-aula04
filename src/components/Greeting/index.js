function Greeting({user}){
    const greeting = () => {
        if (user.lastName == '02'){
          return `${user.firstName} ${user.lastName}`;
        }
        return 'turma desconhecida' 
      }

    return(
        <h1>Olá, {greeting()}</h1>
    )
}

export default Greeting;