import React, { useRef, useState, useEffect } from 'react';
import { Button, Tour } from 'antd';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useLista } from '../../hooks/useLista';
const App = () => {
  const [open, setOpen] = useState(false);
  const {refButton1} = useLista();
  const {refButton2} = useLista();
  const {refButton3} = useLista();
  const {refButton4} = useLista();
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
      target: () => refButton1.current
    },
    {
      title: 'Consultar',
      description: 'Aquí se enviará una solicitud al representante de la universidad para que puedas comunicarte con él y despejar tus dudas.',
      placement: 'right',
      target: () => refButton2.current
    },
    {
      title: 'Ver Carreras',
      description: 'Aquí podrás ver las diferentes carreras que podrás seguir al cursar en la universidad.',
      placement: 'right',
      target: () => refButton3.current
    },
    {
      title: 'Ver en Mapa',
      description: 'Aquí te redireccionará al mapa y te mostrará en donde se encuentra la universidad.',
      placement: 'top',
      target: () => refButton4.current
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