import React from 'react';
import HeaderPhone from './components/HeaderPhone';
import UnderPhone from './components/UnderPhone';
import Home from './components/MainPage/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './styles/main.css';
import BooksList from './components/BooksPage/BooksList';
import Book from './components/BooksPage/Book';


class App extends React.Component {

  state = {
    date: new Date(),
    
    lastBook: "chemistry",
    lastBookLink: "1RNU8UkxKeS7j8J6rba8eqeWbmpAMzPFd",

    lastDate: new Date(),
    nextleson: "English",
    logo: "https://cdn.discordapp.com/attachments/736633764930912257/972189609750573076/Screenshot_1.png",
    booksListData:[["ukrainian","1qYKKuTtDOu3P0vHTltb5IxVlis3Ohrfd"],["english","12Iq_mKym8d4Ja-h9rQYG5DIkKJsAfjdC"],["physics","1uGQ_ur5OL1D7BxBCIWUn3OTHuUHEOiVc"],["chemistry","1RNU8UkxKeS7j8J6rba8eqeWbmpAMzPFd"],["english","12Iq_mKym8d4Ja-h9rQYG5DIkKJsAfjdC"],["chemistry","1RNU8UkxKeS7j8J6rba8eqeWbmpAMzPFd"]]
  };

  componentDidMount() {
    this.timer()
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  setNewLastBookTime=(lastUserBook,lastUserBookLink)=>{
    this.setState({lastDate: new Date(),lastBook:lastUserBook,lastBookLink:lastUserBookLink})
  }

  timer(){
    this.timerID = setInterval(
      () => this.setState({
        date: new Date()
      }),
      1000
    );
  }


  render(){
    return (
      <>
      <Router>
      <HeaderPhone date={this.state.date.toLocaleTimeString()}></HeaderPhone>
      <div className="App">

      <Routes>
        <Route path="/">
          <Route index element={<Home state={this.state}/>}></Route>

          <Route path="books" element={<BooksList booksListData={this.state.booksListData} setNewLastBookTime={this.setNewLastBookTime}/>} />
          <Route path="book/:link" exact element={<Book/>}></Route>

          <Route path="home" element={<Home state={this.state}/>} />
        </Route>
      </Routes>
      
   
      </div>
      <UnderPhone></UnderPhone>
      
      </Router>
      </>
    );
  }
}

export default App;
