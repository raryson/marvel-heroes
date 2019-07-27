import md5 from 'md5';

export const createHash = (publicKey: String, privateKey: String) => {
  const timeStamp = Date.now()
  return md5(`${timeStamp}${publicKey}${privateKey}`)
}