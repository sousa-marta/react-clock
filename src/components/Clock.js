import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        setInterval(() => {
            // this.state.timer = new Date().toLocaleTimeString() // já havia sido iniciado, então precisa atualizar o estado
            this.setState({  //chama o método render automaticamente
                timer: new Date().toLocaleTimeString()
            })
        }, 1000) // a cada 1 segundo 1000ms
    }

    render(){
        return (
            <div>
                {this.state.timer}
            </div>
        )
    }

}