import React, { useContext, useEffect } from "react";
import Link from "next/link";
import authContext from "@/context/auth/authContex";

const Header = () => {
  //Extraer El Usuario Autenticado del storage
  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado, cerrareSesion } = AuthContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <Link href="/">
        <img className="w-64 mb-8 md:mb-0" src="bingo.jpg" />
      </Link>
      <div>
        {usuario ? (
          <div className="flex items-center">
            <p className="mr-2">Hola {usuario.nombre}</p>
            <button
              type="button"
              className="bg-blue-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2"
              onClick={() => cerrareSesion()}
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <>
            <Link
              href="/login"
              className="bg-blue-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/registrarse"
              className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
            >
              Registrarse
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
