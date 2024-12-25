import React, { useState, useEffect, useContext } from 'react'
import "./formulario.css"
import { UserContext } from '../../context/userContext';
export const Formulario = () => {
  const { form, setForm, modal, setModal } = useContext(UserContext);
  const categorias = [
    { cd_categoria: 1, ds_categoria: "Marketing" },
    { cd_categoria: 2, ds_categoria: "Designer" },
    { cd_categoria: 3, ds_categoria: "WebSite" },
    { cd_categoria: 4, ds_categoria: "Edição e desing motion" },
  ];

  const [formError, setformError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form, formError)
    const isValid = validateForm();
    if (!isValid) return;
    sendWhatsAppMessage();
    setModal(null)
  };

  const generateWhatsAppMessage = () => {
    const { name, nameinterprise, categoria, number, nicho} = form;
  

    return `Olá, meu nome é ${name}
    Represento a empresa ${nameinterprise || "N/A"}
    Tipo de Serviço  ${categoria} 
    Meu número de contato é ${number}
    Estou interessado em serviços relacionados a ${nicho || "N/A"}
    Aguardo retorno. Obrigado!`;
  };
  
  const sendWhatsAppMessage = () => {
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5511954480557?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };
  


  const handleFieldChange = (field, event) => {
    const newValue = event.target.value;

    setForm((prevform) => ({
      ...prevform,
      [field]: newValue,
    }));


  };
  const validateForm = () => {
    const errors = {};
    Object.entries(form).forEach(([field, value]) => {
      if (!value || value.trim() === "") {
        errors[field] = "Este campo é obrigatório.";
      } else if (field === "number" && value.replace(/\D/g, "").length < 11) {
        errors[field] = "O número de telefone deve ter pelo menos 11 dígitos.";
      }
    });
    setformError(errors);

    return Object.keys(errors).length === 0;
  };


  return (
    <>

      {modal != null && (
        <div className='formsubit'>
          <div className='form-content'>
            <h2>Orçamento siteando</h2>
            <p>O que procura pra melhorar seu negócio?</p>
            <select
              id="categoriaSelect"
              className="categorias"
              onChange={(e) =>
                setForm((prevForm) => ({
                  ...prevForm,
                  categoria: e.target.value,
                }))
              }
            >
              <option value="" disabled selected>
                Selecione um serviço
              </option>
              {categorias.map((categoria) => (
                <option
                  key={categoria.cd_categoria}
                  name={categoria.ds_categoria}
                  value={categoria.ds_categoria}
                >
                  {categoria.ds_categoria}
                </option>
              ))}
            </select>

            <div>
              <input
                type="text"
                id="input-nome"
                onChange={(event) => handleFieldChange("name", event)}
              />
              {formError.name && <span className="error">{formError.name}</span>}
            </div>

            <div>
              <input
                type="text"
                id="input-nome"
                onChange={(event) => handleFieldChange("nameinterprise", event)}
              />
              {formError.nameinterprise && (
                <span className="error">{formError.nameinterprise}</span>
              )}</div>

            <div>
              <input
                type="text"
                id="input-nome"
                onChange={(event) => handleFieldChange("number", event)}
              />
              {formError.number && <span className="error">{formError.number}</span>}
            </div>

            <div>
              <input
                type="text"
                id="input-nome"
                onChange={(event) => handleFieldChange("nicho", event)}
              />
              {formError.nicho && <span className="error">{formError.nicho}</span>}
            </div>
            <div className='formSender' onClick={handleSubmit}>enviar</div>


          </div>
        </div>
      )}
    </>
  )
}

