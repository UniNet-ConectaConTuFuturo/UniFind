import { Descriptions, List } from "antd";
//import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { post } from "../../api/api";

function SendTicket({
    user,
    mail_user,
    tel_user,
    id_usuario,
    estado 
    }){
    const items = [
        { label: "Nombre", children: user, span: 1 },
        { label: "Correo", children: mail_user, span: 1 },
        { label: "Telefono", children: tel_user, span: 1 },

    ]
    const { token } = useOutletContext();
    console.log("token", token)
    const acceptTicket = async ()=>{
        /* const formData = new FormData()
        formData.append('id_usuario',id_usuario);
        formData.append('estado',"aceptado")
        formData.append('token', token) */
        try {
        /* const res = await axios.post(
            "http://localhost:4000/api/aceptarticket",
            formData
        ); */
        await post("/aceptarticket", {
            id_usuario, estado: "aceptado", token
        })
        } catch (ex) {
        console.log(ex);
        }
    }
    const declineTicket = async ()=>{
        /* const formData = new FormData()
        formData.append('id_usuario',id_usuario);
        formData.append('estado',"rechazado")
        formData.append('token', token) */
        try {
        /* const res = await axios.post(
            "http://localhost:4000/api/rechazarticket",
            formData
        ); */
        await post("/rechazarticket", {
            id_usuario, estado: "rechazado", token
        })
        } catch (ex) {
        console.log(ex);
        }
    }
    console.log(estado  )
    
    return (
        <List.Item>
            <Descriptions
                size="small"
                title="Solicitud de Comunicación"
                items={items}
                extra={ 
                    estado != 1 ? (
                    <section className="grid gap-8">
                        
                        <button className="w-36 border rounded-md p-2 text-center" onClick={acceptTicket}>
                            Aceptar Comunicacion
                        </button>
                        <button className="w-36 border rounded-md p-2 text-center" onClick={declineTicket}>
                            Rechazar Comunicacion
                        </button>
                    </section>):(<p>Comunicacion aceptada</p>)
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