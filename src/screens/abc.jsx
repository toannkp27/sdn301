import { Card, Grid, styled } from "@mui/material";
import { Fragment } from "react";
import StatCards from "./dashboard/shared/StatCards";
import StatCards2 from "./dashboard/shared/StatCards2";
import TopSellingTable from "./dashboard/shared/TopSellingTable";

const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  // const { palette } = useTheme();

  return (
    // <Fragment>
    //   <ContentBox className="analytics">
    //     <Grid container spacing={3}>
    //       <Grid item lg={8} md={8} sm={12} xs={12}>
    //         <StatCards />
    //         <TopSellingTable />
    //         <StatCards2 />

    //         <H4>Ongoing Projects</H4>
    //         <RowCards />
    //       </Grid>

    //       <Grid item lg={4} md={4} sm={12} xs={12}>
    //         <Card sx={{ px: 3, py: 2, mb: 3 }}>
    //           <Title>Traffic Sources</Title>
    //           <SubTitle>Last 30 days</SubTitle>

    //           <DoughnutChart
    //             height="300px"
    //             color={[
    //               palette.primary.dark,
    //               palette.primary.main,
    //               palette.primary.light,
    //             ]}
    //           />
    //         </Card>

    //         <UpgradeCard />
    //         <Campaigns />
    //       </Grid>
    //     </Grid>
    //   </ContentBox>
    // </Fragment>
    <div
      className="container"
      style={{ paddingTop: "90px", paddingBottom: "20px" }}
    >
      <Fragment>
        <ContentBox className="analytics">
          <Grid container spacing={3}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <StatCards />
              <TopSellingTable />
              <StatCards2 />
              <H4>Ongoing Projects</H4>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <Title>Traffic Sources</Title>
                <SubTitle>Last 30 days</SubTitle>

                {/* <DoughnutChart
                  height="300px"
                  color={[
                    palette.primary.dark,
                    palette.primary.main,
                    palette.primary.light,
                  ]}
                /> */}
              </Card>
              {/* <UpgradeCard /> */}
              {/* <Campaigns /> */}
            </Grid>
          </Grid>
        </ContentBox>
      </Fragment>
    </div>
  );
};

export default Dashboard;
