import React, { useState } from 'react'
import Header from '../Header/Header'
import UnderNav from '../UnderNav'
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
      <NextLeson nextleson={state.nextleson} lastDate={state.lastDate}></NextLeson>

      <UnderNav></UnderNav>
    </div>
  )
}

export default Home