import { useState } from "react";
import "simplebar";
import "simplebar/dist/simplebar.css";
import { ConfigProvider, Table } from "antd";
import Form from "./Form";
import Collums from "./Collums";
import Footer from "./Footer";
function AccountSettings() {
  const [form, setForm] = useState(null);

  return (
    <main className="bg-[url(/images/examen.png)] bg-cover h-screen">
      <div className="backdrop-brightness-[0.10] h-full py-6 text-gray-300">
        <div data-simplebar className="ml-40 mr-4 pr-8 h-full ">
          <h1 className="bg-white/10 rounded-[1px] text-6xl mb-4 px-2 pb-2 inline-block font-sans">
            Configuración
          </h1>
          <ConfigProvider
            theme={{
              components: {
                Table: {
                  colorBgContainer: "#fff2",
                  colorBorderSecondary: "#000",
                  borderRadiusLG: 1,
                  colorText: "rgb(209 213 219)",
                  cellPaddingBlock: 24,
                },
              },
            }}
          >
            <Table
              pagination={false}
              showHeader={false}
              columns={Collums}
              dataSource={Form({ form, setForm })}
            />
            <Footer form={form} />
          </ConfigProvider>
        </div>
      </div>
    </main>
  );
}

export default AccountSettings;
