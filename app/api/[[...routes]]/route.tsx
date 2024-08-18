/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  basePath: '/api',
  // hub: neynar({ apiKey: process.env.NEYMAR_API_KEY }),
  browserLocation: '/',
  imageOptions: {
    fonts: [
      {
        name: 'Open Sans',
        weight: 400,
        source: 'google',
      },
      {
        name: 'Open Sans',
        weight: 700,
        source: 'google',
      },
      {
        name: 'Madimi One',
        source: 'google',
      },
    ],
  },
  title: 'NEW',
})


// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: 'https://i.ibb.co/r4nwgjh/Tomer-Sharoni-Headshot.jpg',
    intents: [
      <Button.Link href = 'https://www.dlnews.com/research/a-conversation-with-tomer-sharoni-ceo-of-addressable/'>Read Online!</Button.Link>,
      <Button action = '/second'>Read Inline!</Button>,
    ],
  })
})

app.frame('/second', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: 'https://i.ibb.co/cDHZc9W/Second.png',
    intents: [
      <Button.Reset>Back</Button.Reset>,
      <Button action = '/third'>Next</Button>,
    ],
  })
})

app.frame('/third', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({

    image: 'https://i.ibb.co/DbWMcZr/Third.png',

    intents: [
      <Button action = '/second'>Back</Button>,
      <Button action = '/fourth'>Next</Button>,
    ],
  })
})

app.frame('/fourth', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({

    image: 'https://i.ibb.co/ZVsmxnj/Fourth.png',

    intents: [
      <Button action = '/third'>Back</Button>,
      <Button action = '/fifth'>Next</Button>,
    ],
  })
})

app.frame('/fifth', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({

    image: 'https://i.ibb.co/HCvSF9s/Fifth.png',

    intents: [
      <Button action = '/fourth'>Back</Button>,
      <Button action = '/sixth'>Next</Button>,
    ],
  })
})

app.frame('/sixth', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({

    image: 'https://i.ibb.co/whJB5bn/Sixth.png',

    intents: [
      <Button action = '/fifth'>Back</Button>,
      <Button action = '//seventh'>Next</Button>,
    ],
  })
})

app.frame('/seventh', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({

    image: 'https://i.ibb.co/RHWDPyc/Seventh.png',

    intents: [
      <Button action = '/sixth'>Back</Button>,
      <Button action = '//eighth'>Next</Button>,
    ],
  })
})

app.frame('/eighth', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({

    image: 'https://i.ibb.co/XVsZ4Qr/Eighth.png',

    intents: [
      <Button action = '/seventh'>Back</Button>,
      <Button action = '/Last'>Next</Button>,
    ],
  })
})

app.frame('/Last', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({

    image: 'https://i.ibb.co/ZBRjL4Z/Closing-Slide-1.png',

    intents: [
      <Button.Reset>Back To The Start</Button.Reset>
    ],
  })
})





devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
