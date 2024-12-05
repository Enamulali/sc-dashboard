import { Link } from "react-router-dom";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

const ClubsPage = () => {
  const clubs = [
    { id: 1, name: "Tuition Club" },
    { id: 2, name: "Saturday School" },
    { id: 3, name: "Qur'an School" },
    { id: 4, name: "Other Clubs" },
  ];

  return (
    <Box padding="20px">
      <Typography variant="h4" mb="20px">
        Clubs
      </Typography>
      <Box display="flex" flexWrap="wrap" gap="20px">
        {clubs.map((club) => (
          <Card key={club.id} style={{ width: "300px" }}>
            <CardContent>
              <Typography variant="h5">{club.name}</Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={`/clubs/${club.id}`}
              >
                View Club
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Button variant="outlined" color="secondary" sx={{ marginTop: "20px" }}>
        Create New Club
      </Button>
    </Box>
  );
};

export default ClubsPage;
