import React, { useRef, useState, useEffect } from 'react';
import { Button, Tour } from 'antd';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useLista } from '../../hooks/useLista';
const App = () => {
  const [open, setOpen] = useState(false);
  const {refButton1} = useLista();
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
      title: 'Top',
      description: 'On the top of target.',
      placement: 'top',
      target: () => ref.current,
    },
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