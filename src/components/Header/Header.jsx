import React, { Component } from 'react'

export class Header extends Component {
    state = {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        months: ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']
    }
  render() {
    return (
        <div className='headerInfo row'>
            <div className='row'>
                <div className='calendarButton'>
                    <i className="fa-solid fa-calendar-days"></i>
                </div>
                <div className='col start'>
                    <p className='dark small'>{this.state.days[this.props.day]}</p>
                    <p className='normal'>{this.props.date} {this.state.months[this.props.month]}</p>
                </div>
            </div>
            <div className='logo'>
            </div>
        </div>
    )
  }
}

export default Header