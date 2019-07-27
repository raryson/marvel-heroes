import React from 'react'
import Character from '../components/Character'
import { getAllHeroes } from '../services/heroes-service'

interface Props {

}

interface State { 
    Heroes: []
}

export default class AllStatus extends React.Component<Props, State> {
    state: State = { Heroes: [] }
    async componentDidMount () {
        const allHeroes = await getAllHeroes()
        console.log(allHeroes)
        this.setState({})
    }
    render() { 
        return (<Character />)
    }
}