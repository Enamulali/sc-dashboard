import { useParams } from "react-router-dom";
import { Box, Typography, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header"; // Ensure Header is correctly imported

const ClubDetailsPage = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const tabs = ["Finances", "Students", "Staff"];

  return (
    <Box padding="20px">
      {/* Header component with dynamic title */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title={`CLUB DETAILS - ${id}`}
          subtitle="View and manage details of the club."
        />
      </Box>

      {/* Tabs for navigation */}
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {tabs.map((tab, index) => (
          <Tab label={tab} key={index} />
        ))}
      </Tabs>

      {/* Tab content based on selected tab */}
      <Box mt="20px">
        {selectedTab === 0 && <Typography>Manage Finances</Typography>}
        {selectedTab === 1 && <Typography>Manage Students</Typography>}
        {selectedTab === 2 && <Typography>Manage Staff</Typography>}
      </Box>
    </Box>
  );
};

export default ClubDetailsPage;
