import React,{useState, createContext} from 'react';
import props from 'prop-types';

export const TickerContext = createContext();
const TickerProvider = () =>{
    const[tickers, setTickers] = useState([
        {
            title: 'sample title',
            description: 'sample description',
            id:1
        }
    ]);
    return(
        <TickerContext.Provider value={[tickers, setTickers]}> 
            {props.children}
        </TickerContext.Provider>
    )
}
export default TickerProvider;
