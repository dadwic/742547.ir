import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingIcon from "@mui/icons-material/ShoppingCart";
import LiraIcon from "@mui/icons-material/CurrencyLira";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DrawerAppBar from "@/components/DrawerAppBar";
import Domains from "@/components/Domains";

export default function Home() {
  return (
    <Box component="main">
      <DrawerAppBar />
      <Domains />
      <Paper
        elevation={3}
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            LinkComponent={Link}
            label="خرید از ترکیه"
            target="_blank"
            href="https://www.rialir.com/"
            icon={<ShoppingIcon />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            label="قیمت لیر ترکیه"
            target="_blank"
            href="https://www.rialir.com/lir/"
            icon={<LiraIcon />}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            label="نقد کردن درآمد یوتیوب"
            target="_blank"
            href="https://www.rialir.com/youtube-earnings/"
            icon={<YouTubeIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
