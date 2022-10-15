import VetLogo from "../../assets/vet.svg";
import Search from "../../assets/search.svg";
import Grid from "../../assets/grid.svg";
import Pet from "../../assets/pet.svg";
import Settings from "../../assets/settings.svg";
import UserMd from "../../assets/user-md.svg";
import User from "../../assets/user.svg";
import Avatar from "../../assets/users/avatar.png";
import "./App.css";
import { CardUser } from "../../Components/card-user";
import { SidebarItem } from "../../Components/sidebar-item";
import Menu from "../../assets/menu.svg";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(true);
  const [transition, setTransition] = useState(false);
  function handleClick() {
    setTransition(true);
    setTimeout(() => {
      setMenu(!menu);
      setTransition(false);
    }, 300);
  }
  return (
    <div className="app">
      <div className="container-sidebar">
        <div className="sidebar-header">
          <a href="#" className={`${menu ? " " : "disable"}`}>
            <img src={VetLogo} alt="" />
          </a>
          <div>
            <img
              className="menu-item"
              src={Menu}
              alt=""
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="sidebar-menu">
          <SidebarItem
            img={Search}
            name="Buscar"
            showText={menu}
            showTransition={transition}
          />
          <SidebarItem
            img={Grid}
            name="Dashboad"
            showText={menu}
            showTransition={transition}
          />
          <SidebarItem
            img={Pet}
            name="Pets"
            showText={menu}
            showTransition={transition}
          />
          <SidebarItem
            img={User}
            name="Clientes"
            showText={menu}
            showTransition={transition}
          />
          <SidebarItem
            img={UserMd}
            name="Vets"
            showText={menu}
            showTransition={transition}
          />
          <SidebarItem
            img={Settings}
            name="Ajustes"
            showText={menu}
            showTransition={transition}
          />
        </div>
        <div className="card-user">
          <CardUser
            avatar={Avatar}
            name="Eleanor Pena"
            profession="Veterinária"
            showIcon={menu}
          />
        </div>
      </div>
      <main>
        <h1>Dashboard</h1>
      </main>
    </div>
  );
}

export default App;
