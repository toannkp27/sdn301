import EditIcon from "@mui/icons-material/Edit";
import {
  Avatar,
  Box,
  Card, IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme
} from "@mui/material";
import { Paragraph } from "../components/Typography";
const CardHeader = styled(Box)(() => ({
  display: "flex",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginBottom: "12px",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  textTransform: "capitalize",
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: "pre",
  "& small": {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
  },
  "& td": { borderBottom: "none" },
  "& td:first-of-type": { paddingLeft: "16px !important" },
}));

const Small = styled("small")(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: "#fff",
  padding: "2px 8px",
  borderRadius: "4px",
  overflow: "hidden",
  background: bgcolor,
  boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
}));

const TopSellingTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: "20px", mb: 3 }}>
      <CardHeader>
        <Title>top selling products</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Revenue
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Stock Status
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell
                  colSpan={4}
                  align="left"
                  sx={{ px: 0, textTransform: "capitalize" }}
                >
                  <Box display="flex" alignItems="center">
                    <Avatar src={product.imgUrl} />
                    <Paragraph sx={{ m: 0, ml: 4 }}>{product.name}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell
                  align="left"
                  colSpan={2}
                  sx={{ px: 0, textTransform: "capitalize" }}
                >
                  $
                  {product.price > 999
                    ? (product.price / 1000).toFixed(1) + "k"
                    : product.price}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {product.available ? (
                    product.available < 20 ? (
                      <Small bgcolor={bgSecondary}>
                        {product.available} available
                      </Small>
                    ) : (
                      <Small bgcolor={bgPrimary}>in stock</Small>
                    )
                  ) : (
                    <Small bgcolor={bgError}>out of stock</Small>
                  )}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton>
                    <EditIcon color="primary">edit</EditIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const productList = [
  {
    imgUrl: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4eb226710c1d4baab6256b741b7d0be7_9366/gi%C3%A0y-ultraboost-light.jpg",
    name: "Ultraboost Light",
    price: 100,
    available: 15,
  },
  {
    imgUrl: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/67e3732b3fee450092aae2724526d569_9366/gi%C3%A0y-superstar-slip-on.jpg",
    name: "Superstar Slip-On",
    price: 1500,
    available: 30,
  },
  {
    imgUrl: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e5f3f5011d04322a1914a8aa7fd670d_9366/gi%C3%A0y-superstar.jpg",
    name: "Superstar",
    price: 1900,
    available: 35,
  },
  {
    imgUrl: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/6bf90d60370e41df970a2a8b920aad5f_9366/stan-smith-pf-w.jpg",
    name: "Stan Smith PF W",
    price: 100,
    available: 0,
  },
  {
    imgUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg",
    name: "TRAINER TRAE YOUNG 3 LOW",
    price: 1190,
    available: 5,
  },
];

export default TopSellingTable;
