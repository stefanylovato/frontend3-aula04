import './style.css';

const Paragraph = ({usuario,children, funcao}) => {

    return(
        <>
        <p>Você, {usuario.firstName}, {children}</p>
        {funcao()}
        </>
    );
}

export default Paragraph;