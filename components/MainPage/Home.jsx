import React, { useState } from 'react'
import Header from '../Header/Header'
import Interesting from './Interesting'
import LastBook from './LastBook'
import NextLeson from './NextLeson'

const Home = (props) => {
    const [state, setState] = useState(props.state)
  return (
    <div>
      <Header date={state.date.getDate()} day={state.date.getDay()} month={state.date.getMonth()} logo={state.logo}></Header>

      <LastBook lastBook={state.lastBook} lastBookLink={state.lastBookLink} lastDate={state.lastDate}></LastBook>
      <Interesting></Interesting>
      <NextLeson nextLeson={state.nextLeson} nextLesonTime={state.nextLesonTime}></NextLeson>
    </div>
  )
}

export default Home