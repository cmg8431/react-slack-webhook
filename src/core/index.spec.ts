import { Slack, SlackParameters } from '.';

describe('Slack', () => {
  const webhookURL = 'https://your-slack-webhook-url';

  test('should instantiate with a webhookURL', () => {
    const slack = new Slack(webhookURL);
    expect(slack).toBeInstanceOf(Slack);
  });

  test('should throw an error without webhookURL', () => {
    expect(() => new Slack('')).toThrow('Need a webhookURL!');
  });

  test('should post a message to Slack', async () => {
    const slack = new Slack(webhookURL);
    const response = await slack.post({ text: 'Test message' });

    expect(response.status).toBe(200);
  });

  test('should post a message with custom parameters', async () => {
    const slack = new Slack(webhookURL);
    const customParameters: SlackParameters = {
      text: 'Custom message',
      channel: '#random',
      username: 'custom-bot',
      icon_emoji: ':fire:',
    };
    const response = await slack.post(customParameters);

    expect(response.status).toBe(200);
  });
});
