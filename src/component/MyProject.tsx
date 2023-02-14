import * as React from "react";
import { useTranslation } from "react-i18next";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MyProject: React.FC = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="myProject">
      <h1 className="mt-16 mb-11 text-center text-5xl font-black text-sky-600 wow animate__fadeInDownBig">
        {t("MY PROJECT")}
      </h1>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="React Js" {...a11yProps(0)} />
            <Tab label="React TypeScript" {...a11yProps(1)} />
            <Tab label="Angular Ts" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="flex">
            <div className="des max-w-2xl">
              <h1 className="text-3xl">{t("Web-App: Booking Movie-Ticket")}</h1>
              <b>{t("Description")}:</b>
              <p>
                {t(
                  "I applied ReactJs for this project. As for the website interface: I utilized “ant design” library and some relevant kinds of library, after that, I used a combination of bootstraps, tailwindcss and scss to perform some nescessary adjustments to the interface. Afterwards, some codes were created to complete the website's functions, such as new ticket booking, adding/removing tickets, price calculation, and so on. As for web data: I applied ajax to call api from backend, after data collecting was in place, I continued to utilize redux store and hook to load data for users' interface. This is currently not a commercial project, but it plays an basic role for building up relevant websites which can offer to every single user more advantages as well as satisfied and convenient experiences."
                )}
              </p>
              <a
                href="https://github.com/TheFlash2022/Movie-Ticket.git"
                target={"_blank"}
                rel="noreferrer"
              >
                Source code
              </a>
              <br />
              <a
                href="https://movie-ticket-gamma.vercel.app"
                target={"_blank"}
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
            <div className="w-full">
              <img
                src={require("../assets/images/movie-ticket.png")}
                alt="..."
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-3xl mb-6">{t("App: taskify")}</h1>
              <a
                href="https://github.com/TheFlash2022/Taskify.git"
                target={"_blank"}
                rel="noreferrer"
              >
                Source code
              </a>
              <br />
              <a
                href="https://taskify-roan.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
            <div className="taskify">
              <img
                className="max-w-5xl"
                src={require("../assets/images/taskify.png")}
                alt="..."
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-3xl mb-6">{t("Ticket chair Angular")}</h1>
              <a
                href="https://github.com/TheFlash2022/BaiTapDatVe-Angular.git"
                target={"_blank"}
                rel="noreferrer"
              >
                Source code
              </a>
              <br />
              <a
                href="https://bai-tap-dat-ve-angular.vercel.app"
                target={"_blank"}
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
            <img
              src={require("../assets/images/BT-datveAngular.png")}
              alt="..."
            />
          </div>
        </TabPanel>
      </Box>
    </div>
  );
};

export default MyProject;
