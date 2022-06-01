import React from 'react';
import HeaderPhone from './components/HeaderPhone';
import UnderPhone from './components/UnderPhone';
import Home from './components/MainPage/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './styles/main.css';
import BooksList from './components/BooksPage/BooksList';
import Book from './components/BooksPage/Book';
import Timetable from './components/TimetablePage/Timetable';
import UnderNav from './components/UnderNav';
import NotebooksList from './components/NotebooksPage/NotebooksList';
import CreateNotebook from './components/NotebooksPage/CreateNotebook';
import Notebook from './components/NotebooksPage/Notebook';


class App extends React.Component {

  state = {
    date: new Date(),
    lastDate: new Date(),

    lastBook: "chemistry",
    lastBookLink: "1RNU8UkxKeS7j8J6rba8eqeWbmpAMzPFd",

    timetable:[
    ["Ukrainian","English","Chemistry","Physics","Math","Physics","English","None"],
    ["Ukrainian","English","Chemistry","Physics","Math","Physics","English","None"],
    ["Ukrainian","English","Chemistry","Physics","Math","Physics","English","None"],
    ["Ukrainian","English","Chemistry","Physics","Math","Physics","English","None"],
    ["Ukrainian","English","Chemistry","Physics","Math","Physics","English","None"],
    ["none","none","none","none","none","none","none","none"],
    ["none","none","none","none","none","none","none","none"]],
    timetableTimes:[[8,30],[9,30],[10,30],[11,30],[12,30],[13,30],[14,30]],

    
    nextLeson: "Ukrainian",
    nextLesonTime: [8,30],

    notebooksListDate:[
      [0,"Notebooks1","Some text1"],
      [1,"Notebooks2","Some text2"],
    ],
    
    logo: "https://cdn.discordapp.com/attachments/736633764930912257/972189609750573076/Screenshot_1.png",
    booksListData:[["ukrainian","1qYKKuTtDOu3P0vHTltb5IxVlis3Ohrfd"],["english","12Iq_mKym8d4Ja-h9rQYG5DIkKJsAfjdC"],["physics","1uGQ_ur5OL1D7BxBCIWUn3OTHuUHEOiVc"],["chemistry","1RNU8UkxKeS7j8J6rba8eqeWbmpAMzPFd"],["english","12Iq_mKym8d4Ja-h9rQYG5DIkKJsAfjdC"],["chemistry","1RNU8UkxKeS7j8J6rba8eqeWbmpAMzPFd"]]
  };

  componentDidMount() {
    this.timer()
    this.checkTimetable()
  }

  componentWillUnmount() {
    clearInterval(this.timerID); 
  }

  setNewLastBookTime=(lastUserBook,lastUserBookLink)=>{
    this.setState({lastDate: new Date(),lastBook:lastUserBook,lastBookLink:lastUserBookLink})
  }

  timer(){
    this.timerID = setInterval(
      () => this.checkTimetable(),
      1000
    );
  }
  updateTimetable=(text,index,index2)=>{
    const newtimtable = this.state.timetable
    newtimtable[index][index2] = text
    this.setState({timtable:newtimtable})
  }

  updateNotebooks=(text,index,index2)=>{
    const newNotebooks = this.state.notebooksListDate
    newNotebooks[index][index2] = text
    this.setState({notebooksListDate:newNotebooks})
  }

  crateNotebook=(text,index)=>{
    const newNotebooks = this.state.notebooksListDate
    newNotebooks.push([index,text,''])
    this.setState({notebooksListDate:newNotebooks})
  }

  checkTimetable(){
    let nextTime = ''
    let nextLeson = [0,0]
    const hour = this.state.date.getHours()
    const day = this.state.date.getDay() -1
    const timetableTimes = this.state.timetableTimes
    const timetable = this.state.timetable

    for (let i = 0; i < timetableTimes.length-1; i++) {
      if (hour > timetableTimes[i][0]){
        nextTime = timetable[day][i+1]
        nextLeson = timetableTimes[i+1]
      }else{
        nextLeson = timetableTimes[0]
        nextTime = timetable[day][0]
      }
    }
    this.setData(nextTime,nextLeson)
  }

  setData=(nextLesonUpdate,nextLesonTimeUpdate)=>{
    this.setState({nextLeson: nextLesonUpdate,nextLesonTime: nextLesonTimeUpdate,date: new Date()})
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

          <Route path="timetable" element={<Timetable updateTimetable={this.updateTimetable}timetable={this.state.timetable} timetableTimes={this.state.timetableTimes}/>} />

          <Route path="notebooks" element={<NotebooksList notebooksList={this.state.notebooksListDate}/>} />
          <Route path="createnotebook" element={<CreateNotebook crateNotebook={this.crateNotebook}notebooksList={this.state.notebooksListDate}/>} />
          <Route path="notebook/:id" element={<Notebook updateNotebooks={this.updateNotebooks} notebooksList={this.state.notebooksListDate}/>} />

          <Route path="home" element={<Home state={this.state}/>} />
        </Route>
      </Routes>
      
   
      </div>
      <UnderNav></UnderNav>
      <UnderPhone></UnderPhone>
      
      </Router>
      </>
    );
  }
}

export default App;
