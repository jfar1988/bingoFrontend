import { useEffect, useState, useContext } from "react";
import Layout from "@/components/Layout";
import authContext from "@/context/auth/authContex";

const Card = () => {
  const generateRandomNumbers = (start, end) => {
    const numbers = [];
    while (numbers.length < 5) {
      const randomNumber =
        Math.floor(Math.random() * (end - start + 1)) + start;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };

  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns([
      generateRandomNumbers(1, 15),
      generateRandomNumbers(16, 30),
      generateRandomNumbers(31, 45),
      generateRandomNumbers(46, 60),
      generateRandomNumbers(61, 75),
    ]);
  }, []);

  const letters = ["B", "I", "N", "G", "O"];

  //Extraer El Usuario Autenticado del storage
  const AuthContext = useContext(authContext);
  const { usuarioAutenticado, usuario } = AuthContext;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      usuarioAutenticado();
    }
  }, []);

  return (
    <Layout>
      {usuario && (
        <div className="container mx-auto mt-10">
          <table className="border border-gray-300 mx-auto">
            <tbody>
              <tr>
                {letters.map((letter, index) => (
                  <td
                    key={index}
                    className="border border-gray-300 text-center p-2"
                  >
                    {letter}
                  </td>
                ))}
              </tr>
              {Array.from({ length: 5 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className="border border-gray-300 text-center p-2"
                    >
                      {rowIndex === 2 && colIndex === 2
                        ? "Free Space"
                        : column[rowIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
};

export default Card;
