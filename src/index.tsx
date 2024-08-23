import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Button, Frog } from 'frog'
import { devtools } from 'frog/dev'

export const app = new Frog({
  title: 'My First Farcaster Frame,This is a test',
})

app.use('/*', serveStatic({ root: './public' }))

app.frame('/', (c) => {
  const { buttonValue } = c
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(to right, #432889, #17101F)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {buttonValue ? `You clicked: ${buttonValue}` : 'Welcome to my Farcaster Frame!'}
        </div>
      </div>
    ),
    intents: [
      <Button value="Click me!">Click me!</Button>,
    ],
  })
})

const port = 3000
console.log(`Server is running on port ${port}`)

devtools(app, { serveStatic })

serve({
  fetch: app.fetch,
  port,
})