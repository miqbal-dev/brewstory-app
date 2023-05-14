import React from 'react'

import Author from '../components/Author'
import List from '../components/List'

function Uikit() {

  const dummy = [
    {
      id: "1",
      title: "Difference between latte and cappucino",
      subtitle: "The underlying blockchain technology was more or less a new concept, and like most new concepts was poorly understood in general.",
      date: "April 19, 2023",
      content: null
    },
    {
      id: "2",
      title: "Iced Latte Art",
      subtitle: "Cold foam has become pretty popular over the last few years, and yet, visually, cold foam lattes are firmly stuck in the 1980s.",
      date: "February 5, 2023",
      content: null
    },
  ]

  return (
    <>
      <section className='mt-4 md:mt-3'>
        <div className='o-container'>
          <Author></Author>
        </div>
      </section>

      <section className='mt-16'>
        <div className='o-container'>
          <ul className='grid grid-cols-1 gap-y-12'>
            {
              dummy.map(item => {
                const { id, title, subtitle, date } = item;

                return (
                  <List
                    key={`l-${id}`}
                    id={id}
                    title={title}
                    subtitle={subtitle}
                    date={date}
                  ></List>)
              })
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Uikit