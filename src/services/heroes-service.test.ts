import { getAllHeroes } from './heroes-service'
import axios from 'axios'; 

jest.mock('axios')

describe('Heroes Service', () => {
  describe('Get All Heroes', () => {
      it('should get heroes', async () => {
          await getAllHeroes()
          expect(axios.get).toHaveBeenCalled()
      })
  })
})