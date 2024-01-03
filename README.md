<img style="display: block;-webkit-user-select: none;max-width: 100%;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://github.com/cmg8431/react-slack-webhook/assets/38885265/f67384d9-8a28-4ae2-879b-ab548c11aab5">

<h1 align="center">react-slack-webhook</h1>
<p align="center">📢 Send a message directly to a Slack channel from a React app</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-slack-webhook">
    <img src="https://img.shields.io/npm/dm/react-slack-webhook.svg" alt="downloads" height="18">
  </a>
  <a href="https://www.npmjs.com/package/react-slack-webhook">
    <img src="https://img.shields.io/npm/v/react-slack-webhook.svg" alt="npm version" height="18">
  </a>
  <a href="https://github.com/gvergnaud/react-slack-webhook">
    <img src="https://img.shields.io/npm/l/react-slack-webhook.svg" alt="MIT license" height="18">
  </a>
    <a href="https://coveralls.io/github/cmg8431/react-slack-webhook?branch=main">
    <img src="https://coveralls.io/repos/github/cmg8431/react-slack-webhook/badge.svg?branch=main" alt="Coverage Status" height="18">
  </a>
</p>

<br />

## 📦 Installation
```bash
$ npm install react-slack-webhook
$ yarn add react-slack-webhook
$ pnpm add react-slack-webhook
```

<br />

## 🚀 Usage

```ts
import { Slack } from 'react-slack-webhook';
import { SLACK_WEBHOOK_URL } from '@/constants'

...
const onClick = () => {
  const slack = new Slack(SLACK_WEBHOOK_URL)

  return slack.send({
      text: 'hello, world',
      channel: '#channel',
      username: 'bot',
      icon_emoji: ':robot_face:',
  })
}
...
```

[More Example]('https://github.com/cmg8431/react-slack-webhook/tree/main/example')


<br />


## 🎈 Props
| Key  | Default | Type | 
| ---  | --- | --- |
| text  | "hello, world" | string | 
| channel  | "#general" | string |
| username  | "bot" | string |
| icon_emoji  | ":robot_face:" | string |

<br />

## 📝 License

[MIT](./LICENSE). Made with ❤️ by [cmg8431](https://github.com/cmg8431)
