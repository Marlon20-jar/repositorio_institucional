import React, { Component } from 'react'
//import M from 'materialize-css';

export default class CreateUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      correo: "",
      password: "",
      matricula: "",
      Roles: [{"name": "name"}]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { nombre, apellido, correo, password, matricula, Roles } = this.state;
    console.log(nombre, apellido, correo, password, matricula, Roles);
    fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        nombre,
        apellido,
        correo,
        password,
        matricula,
      }),
    }).then((res) => res.json())
      .then((data) => {
        alert("Registro exitoso");
        console.log(data, "userRegister");
        window.location.href = "/"
      });
  }

  render() {
    return (
      <section>
        <h1>INSTITUAQ</h1>

        <form className="formulario" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>REGISTRATE</legend>

            <div className="contenedor_campo">
              <div className="campo">
                <label>Nombre(s)</label>
                <input className="input-text" type="text" placeholder="Tu(s) Nombre(s)" 
                onChange={(e) => this.setState({ nombre: e.target.value })}/>
              </div>

              <div className="campo">
                <label>Apellido(s)</label>
                <input className="input-text" type="text" placeholder="Tu(s) Apellido(s)" 
                onChange={(e) => this.setState({ apellido: e.target.value })}/>
              </div>

              <div className="campo">
                <label>Correo</label>
                <input className="input-text" type="email" placeholder="Tu Correo" 
                onChange={(e) => this.setState({ correo: e.target.value })}/>
              </div>

              <div className="campo">
                <label>Matricula</label>
                <input className="input-text" type="number" placeholder="Tu Matricula" 
                onChange={(e) => this.setState({ matricula: e.target.value })}/>
              </div>

              <div className="campo">
                <label>Contraseña</label>
                <input className="input-text" type="password" placeholder="Tu Contraseña" 
                onChange={(e) => this.setState({ password: e.target.value })}/>
              </div>

              <div className="campo">
              <label>Tipo de usuario</label>
              <select 
                onChange={(e) => this.setState({ Roles: e.target.value[{"name:": "name"}] })}>
                <option disabled="">Selecciona una opción</option>
                <option value="Usuario">Vistante</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Docente">Docente</option>
              </select>

            </div>

            </div> {/*--contenedor-campo--*/}

            <div className="alinear-derecha flex">
              <input className="boton w-sm-100" type="submit" value="ENTRAR" />
            </div>
            <br></br>
            <a href="./">
              <i className="fa-solid fa-right-from-bracket"></i>
            </a>
          </fieldset>
        </form>
      </section>
    )
  }
}