const BASE_URL = '/api/v1/channels';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());
  return {
    type: 'FETCH_MESSAGES',
    payload: promise // Will be resolved by redux-promise
  };
}

export function createMessage(channel, csrfToken, content) {
  const url = `${BASE_URL}/${channel}/messages`;
  const body = { content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: 'MESSAGE_POSTED',
    payload: promise // Will be resolved by redux-promise
  };
}

export function selectChannel(channel) {
  return {
    type: 'CHANNEL_SELECTED',
    payload: channel
  }
}

export function appendMessage(message) {
   return {
      type: 'MESSAGE_POSTED',
      payload: message
   }
 }