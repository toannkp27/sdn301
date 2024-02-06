import { Card, Grid, styled, useTheme } from "@mui/material";
import { TabPanel, TabView } from "primereact/tabview";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PersonFill, Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoooo.png";
import DoughnutChart from "./dashboard/shared/Doughnut";
import StatCards from "./dashboard/shared/StatCards";
import StatCards2 from "./dashboard/shared/StatCards2";
import TopSellingTable from "./dashboard/shared/TopSellingTable";
import UpgradeCard from "./dashboard/shared/UpgradeCard";
import ProductManage from "./ProductManage";
import TemplateDemo from "./TopSeller";
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
  const { palette } = useTheme();
  return (
    <>
      <Container fluid>
        <Row
          className="py-2 "
          style={{
            backgroundColor: "white",
            padding: "15px" /* Khoảng cách giữa nội dung và viền của header */,
            textAlign: "center",
            width: "100%",
            // position: "fixed" /* Đặt header ở vị trí cố định */,
            top: "0" /* Đặt header ở đỉnh của trang */,
            zIndex: "1000",
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, 0.1)" /* Thêm box shadow dưới header */,
          }}
        >
          <Col
            md={4}
            className="d-flex align-items-center justify-content-center  "
          >
            <Link to={"/"}>
              <img
                src={logo}
                height={80}
                alt="logo"
                style={{ objectFit: "contain" }}
              />
            </Link>
          </Col>
          <Col md={6} className="d-flex  align-items-center"></Col>
          <Col
            md={2}
            className="d-flex justify-content-end align-items-center pe-5"
          >
            <Row>
              <Col md={4}>
                <Search size={25} />
              </Col>
              <Col md={4}>
                <PersonFill size={25} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div
        style={{ paddingTop: "10px", paddingBottom: "20px" }}
        className="flex align-items-center justify-content-center no-underline"
      >
        <TabView className="w-full">
          <TabPanel header="Admin Dashboard">
            <div>
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
                        <DoughnutChart
                          height="300px"
                          color={[
                            palette.primary.dark,
                            palette.primary.main,
                            palette.primary.light,
                          ]}
                        />
                      </Card>
                      <UpgradeCard />
                      {/* <Campaigns /> */}
                    </Grid>
                  </Grid>
                </ContentBox>
              </Fragment>
            </div>
          </TabPanel>
          <TabPanel header="Top Seller">
            <TemplateDemo />
          </TabPanel>
          <TabPanel header="Product Manage">
            <ProductManage />
          </TabPanel>
          <TabPanel header="User Manage">
            <ProductManage />
          </TabPanel>
        </TabView>
      </div>
    </>
  );
};

export default Dashboard;
