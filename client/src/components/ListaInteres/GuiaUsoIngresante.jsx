import React, { useRef, useState, useEffect } from 'react';
import { Button, Tour } from 'antd';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useLista } from '../../hooks/useContexts';
const App = () => {
  const [open, setOpen] = useState(false);
  const {refButtonEnviarCarta} = useLista();
  const {refButtonConsultar} = useLista();
  const {refButtonVerCarreras} = useLista();
  const {refButtonVerEnMapa} = useLista();
  const ref = useRef();
  const steps = [
    
    {
      title: 'Guía de Uso',
      description: 'Esta es una guía para ayudarte a entender cómo funciona nuestra plataforma.',
      target: null,
    },
    {
      title: 'Enviar Carta',
      description: 'Aquí podrás enviar tu solicitud para entrar a la universidad, a través de nuestras cartas.',
      placement: 'right',
      target: () => refButtonEnviarCarta.current
    },
    {
      title: 'Consultar',
      description: 'Aquí se enviará una solicitud al representante de la universidad para que puedas comunicarte con él y despejar tus dudas.',
      placement: 'right',
      target: () => refButtonConsultar.current
    },
    {
      title: 'Ver Carreras',
      description: 'Aquí podrás ver las diferentes carreras que podrás seguir al cursar en la universidad.',
      placement: 'right',
      target: () => refButtonVerCarreras.current
    },
    {
      title: 'Ver en Mapa',
      description: 'Aquí te redireccionará al mapa y te mostrará en donde se encuentra la universidad.',
      placement: 'top',
      target: () => refButtonVerEnMapa.current
    }
  ];
  return (
    <>
      <AiOutlineQuestionCircle className="guia cursor-pointer" size="40" type="primary" onClick={() => setOpen(true)} ref={ref} > 
        Begin Tour
      </AiOutlineQuestionCircle>

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;