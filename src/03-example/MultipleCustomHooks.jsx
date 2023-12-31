

import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";


export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
  const { author, quote } = !!data && data[0];  // Si la data tiene un valor entonces toma a la data en la posicion cero

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading
          ? <LoadingQuote />
          : <Quote  author={ author } quote={ quote } />
      }
      
      <button
        className="btn btn-primary"
        disabled={ isLoading }
        onClick={ () => increment() }>
        Next quote
      </button>
        
    </>
  )
}
