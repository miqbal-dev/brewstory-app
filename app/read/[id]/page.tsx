import React from 'react'

function Read(props: any) {
  const { id } = props.params;

  return (
    <>
      <div className='o-container mt-14 md:mt-16'>
        <article>
          <h1 className='text-[36px] font-black'>Difference between latte and cappucino | art - {id}</h1>
          <time dateTime={`February 5, 2023`} className='text-sm mt-1'>{`February 5, 2023`}</time>
          <div className='o-wysiwyg mt-6 md:mt-10'>
            <p>
              If you're a coffee drinker, you've probably wondered what the difference is between a latte and a cappuccino. The answer is simple: not much! Both drinks are made with steamed milk and espresso, but they differ in how they're prepared.
            </p>
            <br />
            <p>Latte is one of the most popular drinks at cafes and coffee shops. It's made with espresso and steamed milk, which is poured over a layer of foam. The foam should be thick enough to hold its shape but not so thick that it doesn't mix easily with your drink.
              The espresso should be strong enough to give you a boost, but not so strong that it knocks you out or makes your stomach hurt!</p>
            <img src="/images/nyc.jpg" alt="nyc" />
            <p>
              A cappuccino is a latte with frothed milk and foam on top. The drink originated in Italy, where it was served at the Cappuccino coffee shop in Florence. It was named after the Capuchin order of friars who wore brown robes and hoods that resembled those of monks' cowls.
              The key difference between a cappuccino and a latte is that while both drinks have espresso as their base, only the latter has steamed milk added to it--and then more foam! With this extra step involved in its creation, you might think that your barista will charge more money for your order; however this isn't always true: some cafes offer discounts if you buy multiple drinks at once (like getting five lattes instead of four).
            </p>
            <br />
            <p>A latte is coffee with steamed milk, while a cappucino is coffee with steamed milk and frothed milk. The difference between these two drinks is that in a latte you get more liquid than foam, while in a cappuccino there's more foam than liquid.</p>
          </div>
        </article>
      </div>

    </>
  )
}

export default Read