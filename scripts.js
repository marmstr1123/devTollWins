console.log('wired!')

  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

  function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
  }

  // Regular
  console.log('hello!')

  // Interpolated
  const thingy = 'something'
  console.log('hello, i am a %s string', 6787)
  console.log(`hello i am a ${thingy}`)

  // Styled
  console.log('%c im a styled log text', 'font-size: 25px')

  // warning!
  console.warn('OH NOOO!!!')

  // Error :|
  console.error('shit!')
  // Info
 console.info('corcks eat 3-4 people per year')
  // Testing
  console.assert(1 === 2 , 'that is wrong')

  // clearing
  //console.clear()

  // Viewing DOM Elements
   p = document.querySelector("p")
  console.log(p)
  console.dir(p);
  //console.clear()

  // Grouping together
  dogs.forEach(dog => {
     console.groupCollapsed(`${dog.name}`) //or groupCollapsed
     console.log(`this is ${dog.name}`)
     console.log(`${dog.name} is ${dog.age} years old`)
     console.log(`${dog.name} is ${dog.age * 7} dog years old`)
     console.groupEnd(`${dog.name}`)
 })
  // counting
  console.count('mike')
  console.count('mike')
  console.count('bob')
  console.count('mike')
  console.count('bob')
  console.count('mike')

  // timing
  console.time('fetching Data')
  fetch('https://api.github.com/users/marmstr1123').then(data => data.json()).then(data => {console.timeEnd('fetching Data');
   console.log(data)
})


//also
console.table(dogs)
