import md5 from 'md5';

export const createHash = (publicKey: String, privateKey: String, timeStamp: number) => md5(`${timeStamp}${publicKey}${privateKey}`)
