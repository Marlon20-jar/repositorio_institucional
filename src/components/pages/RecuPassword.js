import React from 'react'


export function RecuPassword() {
    var captcha, chars;

    function genNewCaptcha() {
        chars = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        captcha = chars[Math.floor(Math.random() * chars.length)];
        for (var i = 0; i < 6; i++) {
            captcha = captcha + chars[Math.floor(Math.random() * chars.length)]
        }
        //form1.text.value = captcha;
    }
    function checkCaptcha() {
        var check = document.getElementById("CaptchaEnter").value;
        if (captcha == check) {
            alert("Valid Captcha!! Success");
            document.getElementById("CaptchaEnter").value = "";
        } else {
            alert("Invalid Captcha!! Please Try Again");
            document.getElementById("CaptchaEnter").value = "";
        }

        genNewCaptcha();
    }
    return (
        <div className="recuperacion">
            <fieldset>Recuperación de contraseña</fieldset>
            <form className="formulario_password">
                <fieldset>
                    <div class="contenedor_password">
                        <div class="correo_electronico">
                            <label>Correo electronico</label>
                            <input class="input-text" type="email" placeholder="Tu Correo" />
                        </div>
                    </div>
                </fieldset>
            </form>


            <h2>Ingresa el captcha</h2>
            <div class="contenedor_captcha">
                <form name="form1">
                    <input type="text" id="captchaTxtArea" name="text" value="" /><br />
                    <input type="text" id="CaptchaEnter" placeholder="Introduce el código" /><br />
                        <input type="button" value="Refrescar" id="refreshbtn" onclick={() => genNewCaptcha} />
                        <input type="button" value="Checar" id="checkbtn" onclick={() => checkCaptcha} />
                </form>
            </div>




            <div class="btnregresar">
                <a href="inicio-sesion.html">
                    <button>Regresar</button>
                </a>
            </div>
        </div>
    )
}

export default RecuPassword