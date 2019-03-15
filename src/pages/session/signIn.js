import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import api from "../../services/api"
import { login } from "../../services/auth"


class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  }

  handleSignIn = async e => {
    e.preventDefault()
    const { email, password } = this.state
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" })
    } else {
      api.post("/users/sign_in", { user: { email, password } }).then((res) => {
        login(response.data.token)
        this.props.history.push("/")
      }).catch ((err) => {
        this.setState({
          error: "Houve um problema com o login, verifique suas credenciais. T.T"
        })
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSignIn}>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar conta grátis</Link>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn)
