import { Agent } from 'http';

import { MessageAttachment, Block, KnownBlock } from '@slack/types';

/**
 * Performs the fetch request and formats the data for ogs
 *
 * @param {string} url - URL to fetch
 * @param {object} options - options for ogs
 * @returns {Promise<{ data: string, response: { status: number, headers: object } }>} formatted request data and response
 */
export class Slack {
  private webhookURL: string;

  /**
   * Creates a new instance of the Slack class.
   * @param {string} webhookURL - The URL of the Slack webhook.
   * @throws {Error} Throws an error if webhookURL is not provided.
   */
  constructor(webhookURL: string) {
    if (!webhookURL) throw new Error('A webhook URL is required!');
    this.webhookURL = webhookURL;
  }

  /**
   * Posts a message to a Slack channel.
   * @param {SlackParameters} options - Options for configuring the Slack message.
   * @returns {Promise<Response>} A Promise that resolves to the fetch response.
   */
  public send({
    text = '<hello, world>',
    channel = '#general',
    username = 'bot',
    icon_emoji = ':robot_face:',
  }: WebhookSendArguments = {}): Promise<Response> {
    const payload: WebhookSendArguments = {
      text,
      channel,
      username,
      icon_emoji,
    };

    const body = this.createRequestBody(payload);
    return this.sendMessage(body);
  }

  /**
   * Creates the request body for the Slack message.
   * @param {SlackParameters} payload - The payload for the Slack message.
   * @returns {string} The formatted request body.
   */
  private createRequestBody(payload: WebhookSendArguments): string {
    return new URLSearchParams({
      payload: JSON.stringify(payload),
    }).toString();
  }

  /**
   * Sends the Slack message using fetch.
   * @param {string} body - The request body for the Slack message.
   * @returns {Promise<Response>} A Promise that resolves to the fetch response.
   */
  private sendMessage(body: string): Promise<Response> {
    return fetch(this.webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });
  }
}

type MetadataType = {
  event_type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event_payload: Record<string, any>;
};

export interface WebhookDefaultArguments {
  username?: string;
  icon_emoji?: string;
  icon_url?: string;
  channel?: string;
  text?: string;
  link_names?: boolean;
  agent?: Agent;
  timeout?: number;
}

export interface WebhookSendArguments extends WebhookDefaultArguments {
  attachments?: MessageAttachment[];
  blocks?: (KnownBlock | Block)[];
  unfurl_links?: boolean;
  unfurl_media?: boolean;
  metadata?: MetadataType;
}
