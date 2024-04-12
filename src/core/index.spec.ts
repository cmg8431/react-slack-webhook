import { Slack, SlackParameters } from './';

describe('Slack', () => {
  const webhookURL = 'https://slack.com/api/api.test';

  let slack: Slack;

  beforeEach(() => {
    slack = new Slack(webhookURL);
  });

  it('should throw an error if webhookURL is not provided', () => {
    expect(() => new Slack('')).toThrowError('A webhook URL is required!');
  });

  it('should send a message to slack with default parameters', async () => {
    const response = await slack.send();
    expect(response.status).toBe(200);
  });

  it('should send a message to slack with custom parameters', async () => {
    const parameters: SlackParameters = {
      text: '<custom message>',
      channel: '#custom-channel',
      username: 'bot',
      icon_emoji: ':custom-emoji:',
    };

    const response = await slack.send(parameters);
    expect(response.status).toBe(200);
  });
});
