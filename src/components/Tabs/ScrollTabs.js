import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      // maxWidth: 50,
      width: "100%",
      backgroundColor: "white",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
    // "&$selected": {
    //   color: "#1890ff",
    //   fontWeight: theme.typography.fontWeightMedium,
    // },
  },
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      style={{ marginTop: "32px" }}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: "16px",
  },
  tabs: {},
  tab: {
    textTransform: "none",
  },
  indicator: {
    color: "white",
  },
});

export default function ScrollableTabs({ tabData, tabPanelData }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <StyledTabs
        value={value}
        // className={classes.tabs}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabData?.map((item) => (
          <StyledTab
          key={item.id}
            // className={classes.tab}
            label={item.label}
            {...a11yProps(item.id)}
          />
        ))}
      </StyledTabs>

      {tabPanelData?.map((item) => {
        const { id, component: Component } = item;
        return (
          <TabPanel key={id} value={value} index={id}>
            {Component}
          </TabPanel>
        );
      })}
    </div>
  );
}

//implementation
//   {/* <ScrollableTabs tabData={tabData} tabPanelData={tabData} /> */}

// const data = {
//     tabData: [
//       {
//         id: 0,
//         label: "Exterior",
//       },
//       {
//         id: 1,
//         label: "Interior",
//       },
//       {
//         id: 2,
//         label: "All",
//       },
//     ],
//     tabPanelData: [
//       {
//         id: 2,
//         component: <AllProductsComponents />,
//       },
//       {
//         id: 1,
//         component: <InteriorEmulsionComponent />,
//       },
//       {
//         id: 0,
//         component: <ExteriorEmulsionComponent />,
//       },
//     ],
//   };

// {/* <ScrollableTabs
// tabData={data.tabData}
// tabPanelData={data.tabPanelData}
// /> */}
