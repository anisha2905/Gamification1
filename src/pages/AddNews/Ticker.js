import React from 'react'

function Ticker(props) {
  return (
    <div>
        <p>{props.title}</p>
        <p>{props.description}</p>
        {/* {tickers.map(ticker => (
            <p>{ticker.title}</p>
        ))} */}
    </div>
  )
}

export default Ticker;