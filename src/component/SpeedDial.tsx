import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ConstructionIcon from "@mui/icons-material/Construction";
import ApartmentIcon from "@mui/icons-material/Apartment";

const actions = [
  { icon: <ApartmentIcon />, name: "Experiences", id: "ex" },
  { icon: <ConstructionIcon />, name: "Skills", id: "ski" },
  { icon: <InfoIcon />, name: "About me", id: "about" },
  { icon: <HomeIcon />, name: "Home", id: "home" },
];

export default function BasicSpeedDial() {
  const handlePush = (id:string) => {
    const element = document.getElementById(`${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "fixed", top: 16, right: 16 }}
      icon={<MenuIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          icon={action.icon}
          tooltipTitle={action.name}
          key={action.name}
          onClick={()=>handlePush(action.id)}
        />
      ))}
    </SpeedDial>
  );
}
