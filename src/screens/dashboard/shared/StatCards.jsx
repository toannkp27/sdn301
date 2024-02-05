import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  Box,
  Card,
  Grid, IconButton,
  styled,
  Tooltip
} from "@mui/material";
import { Small } from "../components/Typography";
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px !important",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: { padding: "16px !important" },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  "& small": { color: theme.palette.text.secondary },
  "& .icon": {
    opacity: 0.6,
    fontSize: "44px",
    color: theme.palette.primary.main,
  },
}));

const Heading = styled("h6")(({ theme }) => ({
  margin: 0,
  marginTop: "4px",
  fontSize: "14px",
  fontWeight: "500",
  color: theme.palette.primary.main,
}));

const StatCards = () => {
  const cardList = [
    {
      name: "New Leads",
      amount: 3050,
      icon: "pi pi-user",
    },
    {
      name: "This week Sales",
      amount: "$80,500",
      icon: "pi pi-dollar",
    },
    {
      name: "Inventory Status",
      amount: "8.5% Stock Surplus",
      icon: "pi pi-briefcase",
    },
    {
      name: "Orders to deliver",
      amount: "305 Orders",
      icon: "pi pi-shopping-cart",
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: "24px" }}>
      {cardList.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>
              <i className={item.icon} style={{ fontSize: "2.5rem" }}></i>
              <Box ml="12px">
                <Small>{item.name}</Small>
                <Heading>{item.amount}</Heading>
              </Box>
            </ContentBox>

            <Tooltip title="View Details" placement="top">
              <IconButton>
                <ArrowRightAltIcon>arrow_right_alt</ArrowRightAltIcon>
              </IconButton>
            </Tooltip>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCards;
