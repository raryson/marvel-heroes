import { createHash } from './hash-generator'

describe('Hash generator', () => {
  it('Enter with valid public key and private key should generate a hash', () => {
      Date.now = jest.fn()
      const publicKey = '123456'
      const privateKey = 'abcde'
      const expectedHash = 'ace66ac836647b9f758e421fb1fa7994'
      expect(createHash(publicKey, privateKey)).toEqual(expectedHash)
  })
})