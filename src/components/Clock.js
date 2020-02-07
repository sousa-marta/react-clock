import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        let interval_id = setInterval(() => {
            // this.state.timer = new Date().toLocaleTimeString() // já havia sido iniciado, então precisa atualizar o estado
            this.setState({  //chama o método render automaticamente
                timer: new Date().toLocaleTimeString()
            })
        }, 1000) // a cada 1 segundo 1000ms

        this.setState({
            ...this.state, //mantém o estado do jeito que estava
            interval_id: interval_id
        })
    }

    componentWillUnmount(){ //pra quando o componente parar de ser usado, para voltar para o estado inicial/ não deixar 'lixo' na memória
        clearInterval(this.state.interval_id)
    }

    render(){
        return (
            <div>
                {this.state.timer}
            </div>
        )
    }

}