

  import { createContext, useState } from "react";

// Criação do contexto
export const UserContext = createContext();

// Componente de provider do contexto
export const UserContextProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  // Objeto de registro
  const [form, setForm] = useState({
    name: null,
    nameinterprise: null,
    number: null,
    nicho: null,
  });

  const [formError, setformError] = useState(null);


  return (
    <UserContext.Provider
      value={{
        modal,
        setModal,
        form,
        setForm,
        formError,
        setformError,
      
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
