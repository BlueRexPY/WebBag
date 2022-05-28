import React from 'react'

const Interesting = () => {
  return (
    <div className='interesting'>
        <p className='dark small interestingText'>Interesting</p>
        <div className='interestingBox row'>
            <div>
                <div className='interestingBox1 col center'>
                    <div className='big'><i className="fa-solid fa-dna"></i></div>
                    <div className='col'>
                        <p className='normal'> Biology</p>
                        <p className='small'> 12 questions</p>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className='interestingBox2 row center'>
                    <div className='big'><i className="fa-solid fa-pen"></i></div>
                    <div className='col'>
                        <p className='normal'>120</p>
                        <p className='small'>Pages</p>
                    </div>
                </div>
                <div className='interestingBox3 row center'>
                    <div className='big'><i className="fa-solid fa-trophy"></i></div>
                    <div className='col'>
                        <p className='normal'>1</p>
                        <p className='small'>Top</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Interesting