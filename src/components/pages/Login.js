import React, {  useState /*, useContext,*/ } from 'react'
//import { UserContext } from '../../App';

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  //const { state, dispatch } = useContext(UserContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    //const { correo, password } = this.state;
    //console.log(correo, password);
    await fetch("http://localhost:4000/api/auth/signin", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        correo,
        password,
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Inicio de sesión exitoso");
          window.localStorage.setItem("jwt", data.data);
          window.localStorage.setItem("user", JSON.stringify(data.userFound));
          //dispatch({ type: "USER", payload: data.userFound })
          window.location.href = "/HomePageInstS";
        } else
          alert("Correo o Contraseña invalidos");
      });
  }

  return (
    <section>
      <h1>INSTITUAQ</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <fieldset>
          <legend>INICIO DE SESIÓN</legend>

          <div className="contenedor_campo">
            <div className="campo">
              <label>Correo</label>
              <input className="input-text" type="email" placeholder="Tu Correo" 
              onChange={(e) => setCorreo( e.target.value )} />
            </div>

            <div className="campo">
              <label>Contraseña</label>
              <input className="input-text" type="password" placeholder="Tu Contraseña" 
              onChange={(e) => setPassword( e.target.value )}/>
            </div>

          </div>

          {/*--Boton entrar--*/}
          <div className="alinear-derecha flex">
            <input className="boton w-sm-100" type="submit" value="Entrar" />
          </div>

          <br></br>

          {/*--¿Olvidaste tu contraseña?--*/}
          <div className="password">
            <a href="./Recuperacion-password">¿Olvidaste tu contraseña?</a>
          </div>

          {/*--Registro--*/}
          <nav className="navegacion">
            <a>¿No tienes cuenta?</a>
            <a className="navegacion__registro navegacion__registro--activo" href="./user">Registrate</a>
          </nav>


          <a href="./">
            <i className="fa-solid fa-right-from-bracket"></i>
          </a>
        </fieldset>
      </form>
    </section>
  )
}

export default Login