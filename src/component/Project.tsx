import * as React from "react";
import { useTheme } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab, tabClasses } from "@mui/base/Tab";

const Project = () => {
  const cyan = {
    50: "#E9F8FC",
    100: "#BDEBF4",
    200: "#99D8E5",
    300: "#66BACC",
    400: "#1F94AD",
    500: "#0D5463",
    600: "#094855",
    700: "#063C47",
    800: "#043039",
    900: "#022127",
  };
  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };
  function useIsDarkMode() {
    const theme = useTheme();
    return theme.palette.mode === "dark";
  }
  function Styles() {
    // Replace this with your app logic for determining dark mode
    const isDarkMode = useIsDarkMode();
    return (
      <style>
        {`
            .CustomTabsListIntroduction {
              min-width: 400px;
              background-color: ${cyan[500]};
              border-radius: 12px;
              margin-bottom: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              align-content: space-between;
              box-shadow: 0px 4px 6px ${isDarkMode ? grey[900] : grey[200]};
            }
      
            .CustomTabIntroduction {
              font-family: 'IBM Plex Sans', sans-serif;
              color: #fff;
              cursor: pointer;
              font-size: 0.875rem;
              font-weight: 600;
              background-color: transparent;
              width: 100%;
              padding: 10px 12px;
              margin: 6px;
              border: none;
              border-radius: 7px;
              display: flex;
              justify-content: center;
            }
      
            .CustomTabIntroduction:hover {
              background-color: ${cyan[400]};
            }
      
            .CustomTabIntroduction:focus {
              color: #fff;
              outline: 3px solid ${cyan[200]};
            }
      
            .CustomTabIntroduction.${tabClasses.selected} {
              background-color: #fff;
              color: ${cyan[600]};
            }
      
            .CustomTabIntroduction.${buttonClasses.disabled} {
              opacity: 0.5;
              cursor: not-allowed;
            }
      
            .CustomTabPanelIntroduction {
              width: 100%;
              font-family: 'IBM Plex Sans', sans-serif;
              font-size: 0.875rem;
              padding: 20px 12px;
              background: ${isDarkMode ? grey[900] : "#fff"};
              border: 1px solid ${isDarkMode ? grey[700] : grey[200]};
              border-radius: 12px;
              opacity: 0.6;
            }
            `}
      </style>
    );
  }
  return (
    <div>
      <div className="text-center mt-6 mb-6">
        <h2 className="text-5xl font-extrabold text-indigo-800">My Project</h2>
      </div>
      <React.Fragment>
        <Tabs defaultValue={0}>
          <TabsList className="CustomTabsListIntroduction">
            <Tab className="CustomTabIntroduction" value={0}>
              All
            </Tab>
            <Tab className="CustomTabIntroduction" value={1}>
              React
            </Tab>
            <Tab className="CustomTabIntroduction" value={2}>
              Angular
            </Tab>
            <Tab className="CustomTabIntroduction" value={3}>
              ASP.NET
            </Tab>
          </TabsList>
          <TabPanel className="CustomTabPanelIntroduction" value={0}>
            All
          </TabPanel>
          <TabPanel className="CustomTabPanelIntroduction" value={1}>
            React
          </TabPanel>
          <TabPanel className="CustomTabPanelIntroduction" value={2}>
            Angular
          </TabPanel>
          <TabPanel className="CustomTabPanelIntroduction" value={3}>
            ASP.NET
          </TabPanel>
        </Tabs>
        <Styles />
      </React.Fragment>
    </div>
  );
};

export default Project;
