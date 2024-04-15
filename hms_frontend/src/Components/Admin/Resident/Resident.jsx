import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../SideBar";
import style from "./Resident.module.css";
import Table from "../Table";
import Graph from "../Graph";
import Card from "../Card";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

function Resident() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const residentData = [
    {
      id: 1,
      date: "2024-04-01",
      Residents: 200,
      pageViews: 500,
    },
    {
      id: 2,
      date: "2024-04-02",
      Residents: 180,
      pageViews: 480,
    },
    {
      id: 3,
      date: "2024-04-03",
      Residents: 150,
      pageViews: 460,
    },
    {
      id: 4,
      date: "2024-04-04",
      Residents: 220,
      pageViews: 520,
    },
    {
      id: 5,
      date: "2024-04-05",
      Residents: 250,
      pageViews: 540,
    },
    {
      id: 6,
      date: "2024-04-06",
      Residents: 190,
      pageViews: 490,
    },
    {
      id: 7,
      date: "2024-04-07",
      Residents: 280,
      pageViews: 580,
    },
    {
      id: 8,
      date: "2024-04-08",
      Residents: 210,
      pageViews: 550,
    },
    {
      id: 9,
      date: "2024-04-09",
      Residents: 230,
      pageViews: 560,
    },
    {
      id: 10,
      date: "2024-04-10",
      Residents: 260,
      pageViews: 590,
    },
    {
      id: 11,
      date: "2024-04-11",
      Residents: 180,
      pageViews: 470,
    },
    {
      id: 12,
      date: "2024-04-12",
      Residents: 300,
      pageViews: 600,
    },
    {
      id: 13,
      date: "2024-04-13",
      Residents: 220,
      pageViews: 530,
    },
    {
      id: 14,
      date: "2024-04-14",
      Residents: 240,
      pageViews: 580,
    },
    {
      id: 15,
      date: "2024-04-15",
      Residents: 280,
      pageViews: 610,
    },
    {
      id: 16,
      date: "2024-04-16",
      Residents: 320,
      pageViews: 640,
    },
    {
      id: 17,
      date: "2024-04-17",
      Residents: 360,
      pageViews: 670,
    },
    {
      id: 18,
      date: "2024-04-18",
      Residents: 400,
      pageViews: 700,
    },
    {
      id: 19,
      date: "2024-04-19",
      Residents: 420,
      pageViews: 730,
    },
    {
      id: 20,
      date: "2024-04-20",
      Residents: 380,
      pageViews: 690,
    },
  ];
  return (
    <>
      {/* <Graph data={data} /> */}
      <div>
        <Header OpenSidebar={OpenSidebar} />
        <div className={style["container"]}>
          <div className={style["container1"]}>
            <Sidebar
              openSidebarToggle={openSidebarToggle}
              OpenSidebar={OpenSidebar}
            />
          </div>
          <div className={style["container2"]}>
            <Card
              icon={BsPeopleFill}
              type={"RESEDENT"}
              number={400}
              color={"blue"}
            />
            <div className={style["body"]}>
              <Graph
                name={"Residents"}
                nextName={"pageViews"}
                data={residentData}
              />
              <div className={style["Table"]}>
                <Table forWho={"Residents"} data={residentData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resident;