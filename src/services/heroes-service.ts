import axios from 'axios'
import { createHash } from './hash-generator'

const authInfos = { 
  publicKey: process.env.MARVEL_PUBLIC_KEY || '',
  privateKey: process.env.MARVEL_PRIVATE_KEY || ''
}

export const getAllHeroes = () => {
  const timeStamp = Date.now()
  const hash = createHash(authInfos.publicKey, authInfos.privateKey, timeStamp)
  return axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${authInfos.publicKey}&hash=${hash}`)
}   