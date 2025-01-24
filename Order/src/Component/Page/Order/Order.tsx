import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import StarsIcon from "@mui/icons-material/Stars";
import GroupIcon from "@mui/icons-material/Group";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BlockIcon from "@mui/icons-material/Block";
import LoopIcon from "@mui/icons-material/Loop";
import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import DoneIcon from "@mui/icons-material/Done";
import "./Order.css"

import {
  Box,
  Button,
  Checkbox,
  Container,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "DASHBOARD",
  },
  {
    segment: "overview",
    title: "Overview",
    icon: <ScatterPlotIcon />,
  },
  {
    segment: "analytics",
    title: "Analytics",
    icon: <InsertChartIcon />,
  },
  {
    segment: "orders",
    title: "Order",
    icon: <ShoppingCartIcon />,
  },
  {
    segment: "saved reports",
    title: "Saved reports",
    icon: <StarsIcon />,
  },
  {
    segment: "user reports",
    title: "User reports",
    icon: <AccountBoxIcon />,
  },
  {
    kind: "header",
    title: "WORKSPACE",
  },
  {
    segment: "groups",
    title: "Groups",
    icon: <GroupIcon />,
  },
  {
    segment: "authentication",
    title: "Authentication",
    icon: <ShoppingBagIcon />,
  },
  {
    segment: "billing",
    title: "Billing",
    icon: <CreditCardIcon />,
  },
  {
    segment: "analytics",
    title: "Analytics",
    icon: <InsertChartIcon />,
  },
];


const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height: `${height}px`,
  content: '""',
}));

const OrdersDashboard: React.FC = () => {
  const orders = [
    {
      invoice: "INV-1234",
      date: "Feb 3, 2023",
      status: "Refunded",
      customer: "Olivia Ryhe",
      email: "olivia@email.com",
    },
    {
      invoice: "INV-1234",
      date: "Feb 3, 2023",
      status: "Paid",
      customer: "Olivia Ryhe",
      email: "olivia@email.com",
    },
    {
      invoice: "INV-1233",
      date: "Feb 3, 2023",
      status: "Paid",
      customer: "Steve Hampton",
      email: "steve.hamp@email.com",
    },
    {
      invoice: "INV-1232",
      date: "Feb 3, 2023",
      status: "Cancelled",
      customer: "Steve Hampton",
      email: "steve.hamp@email.com",
    },
    {
      invoice: "INV-1231",
      date: "Feb 3, 2023",
      status: "Refunded",
      customer: "Ciaran Murray",
      email: "ciaran.murray@email.com",
    },
    {
      invoice: "INV-1234",
      date: "Feb 3, 2023",
      status: "Refunded",
      customer: "Olivia Ryhe",
      email: "olivia@email.com",
    },
    {
      invoice: "INV-1234",
      date: "Feb 3, 2023",
      status: "Paid",
      customer: "Olivia Ryhe",
      email: "olivia@email.com",
    },
    {
      invoice: "INV-1233",
      date: "Feb 3, 2023",
      status: "Paid",
      customer: "Steve Hampton",
      email: "steve.hamp@email.com",
    },
    {
      invoice: "INV-1232",
      date: "Feb 3, 2023",
      status: "Cancelled",
      customer: "Steve Hampton",
      email: "steve.hamp@email.com",
    },
    {
      invoice: "INV-1231",
      date: "Feb 3, 2023",
      status: "Refunded",
      customer: "Ciaran Murray",
      email: "ciaran.murray@email.com",
    },
  ];

  return (
    <Container sx={{ mt: "20px" }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ marginBottom: 2 }}
        separator={<ChevronRightIcon fontSize="small" />} // Replace default separator with ">"
      >
        <HomeIcon sx={{height:"20px" ,mt:"5px"}}/>
        <Link underline="hover" color="inherit" href=">dashboard">
          Dashboard
        </Link>
        <Typography color="#1976D2">Orders</Typography>
      </Breadcrumbs>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          Orders
        </Typography>
        <Button variant="contained" startIcon={<DownloadIcon />}>
          Download PDF
        </Button>
      </Box>

      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Search for order"
          variant="outlined"
          size="small"
          fullWidth
        />
        <Select size="small" defaultValue="All">
          <MenuItem value="All">All Status</MenuItem>
          <MenuItem value="Paid">
            {" "}
            <DoneIcon /> Paid
          </MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
          <MenuItem value="Refunded">Refunded</MenuItem>
        </Select>
        <Select size="small" defaultValue="All">
          <MenuItem value="All">All Categories</MenuItem>
        </Select>
        <Select size="small" defaultValue="All">
          <MenuItem value="All">All Customers</MenuItem>
        </Select>
      </Box>

      <TableContainer className="box">
        <Table >
          <TableHead>
            <TableRow sx={{bgcolor:"#E0E0E0"}}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell sx={{ color: "#1565C0", fontWeight: "600" }}>
                Invoice
              </TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Date</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Customer</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow
                key={index}
                sx={{ "&:not(:last-child)": { marginBottom: "16px" } }}
              >
                {" "}
                {/* Add margin between rows */}
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{order.invoice}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      backgroundColor:
                        order.status === "Paid"
                          ? "#e6f4ea"
                          : order.status === "Cancelled"
                            ? "#f8d7da"
                            : order.status === "Refunded"
                              ? "#fff3cd"
                              : "#cce5ff",
                      color:
                        order.status === "Paid"
                          ? "#388e3c"
                          : order.status === "Cancelled"
                            ? "#c62828"
                            : order.status === "Refunded"
                              ? "#856404"
                              : "#0d6efd",
                      borderRadius: "16px",
                      padding: "4px 12px",
                      fontWeight: "bold",
                    }}
                  >
                    {order.status === "Paid" && (
                      <DoneIcon sx={{ fontSize: 18, marginRight: "8px" }} />
                    )}
                    {order.status === "Cancelled" && (
                      <BlockIcon sx={{ fontSize: 18, marginRight: "8px" }} />
                    )}
                    {order.status === "Refunded" && (
                      <LoopIcon sx={{ fontSize: 18, marginRight: "8px" }} />
                    )}
                    {order.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        backgroundColor: "#e0e0e0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                        color: "#000000", // Black text
                      }}
                    >
                      {order.customer.charAt(0)}
                    </Box>
                    <Box>
                      <Typography variant="body2" fontWeight="bold">
                        {order.customer}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {order.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Button size="small">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography>Download</Typography>
                      <Typography
                        marginTop={"-10px"}
                        fontWeight={"600"}
                        color="black"
                      >
                        ...
                      </Typography>
                    </Box>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default function DashboardLayoutBasic(props: any) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <OrdersDashboard />
      </DashboardLayout>
    </AppProvider>
  );
}
