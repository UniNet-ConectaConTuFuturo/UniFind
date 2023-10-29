import { Descriptions, List } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
function SendTicket({mail_user,tel_user}) {
    const items = [
        { label: "Correo", children: mail_user, span: 1 },
        { label: "Telefono", children: tel_user, span: 1 },
    ]

    
    return (
        <List.Item>
            <Descriptions
                size="small"
                title="Solicitud de Comunicación"
                items={items}
                extra={
                    <section className="grid gap-8">
                        <button>
                            Aceptar Comunicacion
                        </button>
                        <button>
                            Rechazar Comunicacion
                        </button>
                    </section>
                  }/>
        </List.Item>
        /*<div className="card silhouette">
          <div className="card-title"><b><i>Solicitud de Comunicación</i></b></div>
          <div className="info">
              <div className="name"><b>Nombre:</b> Pablo Gambacorta</div>
              items = {items};
          </div>
          <div className="buttons button-container">
              <button className="button button-green">Aceptar Comunicación</button>
              <button className="button button-red">Rechazar Comunicación</button>
          </div>
          
      </div>*/
    )
}

export default SendTicket;