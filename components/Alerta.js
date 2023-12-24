import React, { useContext } from "react";
import authContext from "@/context/auth/authContex";

const Alerta = () => {
  const AuthContext = useContext(authContext);
  const { mensaje } = AuthContext;

  console.log(mensaje);

  let claseAlerta =
    "bg-green-500 py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto";

  if (
    mensaje === "El usuario ya esta registrado" ||
    mensaje === "Password Incorrecto" ||
    mensaje === "El usuario No existe"
  ) {
    claseAlerta =
      "bg-red-500 py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto";
  }

  return <div className={claseAlerta}>{mensaje}</div>;
};

export default Alerta;
