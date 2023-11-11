import Header from "../UI/Header";
import { Avatar, List, theme } from "antd";
const data = [
  {
    title: "Campagna, Valentino",
    description: "Administrador De Base de Datos - Programador Back-end",
    image: "/nosotros/tuken.jpeg",
  },
  {
    title: "Gomez Waipán, Leonardo",
    description: "Analista - Programador Front-end",
    image: "/nosotros/leo.jpeg",
  },
  {
    title: "Ocampo, Julián",
    description: "Programador Front-end",
    image: "/nosotros/juliocampo.png",
  },
  {
    title: "Rivero, Julián",
    description: "Programador Back-end",
    image: "/nosotros/julir.jpeg",
  },
  {
    title: "Velázquez, Tiago",
    description: "Analista - Programador Back-end",
    image: "/nosotros/tiago.png",
  },
];
function Nosotros() {
  const { ["token"]: antd } = theme.useToken();
  return (
    <div className="min-h-[100vh] w-full bg-[url(/images/education.png)] bg-cover">
      <div className="backdrop-brightness-[0.20] min-h-[100vh]">
        <Header />
        <main className="py-32 px-[10vw] text-white">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <div
                className="px-4 py-3 mb-3 overflow-x-auto"
                style={{
                  background: "#fff2",
                  borderRadius: antd.borderRadiusLG,
                }}
              >
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar size="large" src={<img src={item.image} />} />
                    }
                    title={
                      <span className="text-white font-bold">{item.title}</span>
                    }
                    description={
                      <span className="text-gray-500">{item.description}</span>
                    }
                  />
                </List.Item>
              </div>
            )}
          />
        </main>
      </div>
    </div>
  );
}

export default Nosotros;
