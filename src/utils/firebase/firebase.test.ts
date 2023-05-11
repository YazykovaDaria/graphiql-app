import { auth } from './firebase';

describe('firebase', () => {
  it('has api key', () => {
    const { config } = auth;
    expect(config.apiKey).not.toBeUndefined();
  });
});
