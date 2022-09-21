/**
 * The program calculates how long it will take to reheat your specific
 * lunch (pizza,sub,soup)
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-09-21
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
const sub = 60
const pizza = 45
const soup = 105
const two = 1.5
const three = 2
let time = 0
let minutes = 0
let seconds = 0

// input
const userInput = prompt('What are you reheating (sub,pizza,soup): ')
const secondInput = prompt(
  'What amount of this lunch item do you want to reheat?: '
)
const foodNumber = parseFloat(secondInput)
// process
if (userInput === 'sub' || userInput === 'pizza' || userInput === 'soup') {
  if (userInput === 'sub') {
    time = sub
  } else if (userInput === 'pizza') {
    time = pizza
  } else if (userInput === 'soup') {
    time = soup
  }

  if (foodNumber === 1 || foodNumber === 2 || foodNumber === 3) {
    if (foodNumber === 2) {
      time = time * two
    } else if (foodNumber === 3) {
      time = time * three
    }
    seconds = time / 60
    minutes = Math.floor(seconds)
    seconds = (seconds - minutes) * 60
    // output
    console.log(
      `The ${userInput} will be done reheating in ${minutes} minutes ${seconds} seconds`
    )
  } else {
    console.log('Invalid Number!')
  }
} else {
  // catch if an input is invalid
  console.log('That is not a valid input')
}
console.log('\nDone.')
