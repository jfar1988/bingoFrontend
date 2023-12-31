import React, { useContext, useEffect } from "react";
import Layout from "@/components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import authContext from "@/context/auth/authContex";
import Alerta from "@/components/Alerta";
import { useRouter } from "next/router";

const Login = () => {
  //definir el context
  const AuthContext = useContext(authContext);
  const { mensaje, autenticado, iniciarSesion } = AuthContext;

  // Next Router
  const router = useRouter();
  useEffect(() => {
    if (autenticado) {
      router.push("/Card");
    }
  }, [autenticado]);

  //Formulario y validacion con formik y Yup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El Email no es válido")
        .required("El Email es Obligatorio"),
      password: Yup.string().required("El Password no puede ir vacio"),
    }),
    onSubmit: (valores) => {
      iniciarSesion(valores);
    },
  });
  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">
          Iniciar Sesión
        </h2>
        {mensaje && <Alerta />}
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-lg">
            <form
              className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  placeholder="Email De Usuario"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p className="font-bold">{formik.errors.email}</p>
                  </div>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  placeholder="Password De Usuario"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <input
                type="submit"
                className="bg-blue-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer"
                value="Iniciar Sesión"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                  <p className="font-bold">Error</p>
                  <p className="font-bold">{formik.errors.password}</p>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
