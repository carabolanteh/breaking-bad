import styled from 'styled-components';

const Frase = ({frase:{quote, author}}) =>{
    return(
        <ContenedorFrase>
            <h1>{quote}</h1>
            <p>{author}</p>
        </ContenedorFrase>
    )
}

const ContenedorFrase = styled.div`
  padding: 2rem;
  border-radius: .5rem;
  background-color: #fff;
  max-width: 1000px;
  
  @media(min-width: 992px) {
    margin-top: 20rem;
  }
  h1{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    &::before{
      content: open-quote;   
      font-size: 4rem;
      color: black;
      position: absolute;  
      left: -1rem;
      top: -2rem;
    }
  }
  p{
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem  
  }
`

export default Frase;