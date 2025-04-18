import React from "react";
import { headers } from "next/headers";
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
import data from "@/components/data";

export async function generateMetadata() {
  const host = headers().get("host");
  const current = data.find((v) => v.domain === host);
  const en_name = current?.en ? ` ${current.en} ` : "";
  return {
    title: current?.name
      ? "ریالیر | خرید مستقیم محصولات اورجینال " +
        current.name +
        en_name +
        " از ترکیه، تحویل در ایران با تضمین اصالت کالا"
      : "ریالیر | مرجع خرید از ترکیه | خرید از آمازون",
    description: current?.name
      ? "خرید مستقیم از " +
        current.name +
        en_name +
        " ترکیه با ریالیر! محصولات اورجینال " +
        current.name +
        en_name +
        " را به صورت آنلاین در سایت ریالیر سفارش دهید و با ضمانت اصالت کالا در ایران تحویل بگیرید."
      : "ریالیر، مرجع خرید از ترکیه | تجربه خرید آنلاین محصولات اورجینال از برندهای معتبر و تحویل سریع در ایران با تضمین اصالت کالا",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

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
            sx={{ padding: 0 }}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            label="قیمت لیر ترکیه"
            target="_blank"
            href="https://www.rialir.com/lir/"
            icon={<LiraIcon />}
            sx={{ padding: 0 }}
          />
          <BottomNavigationAction
            LinkComponent={Link}
            label="نقد کردن درآمد یوتیوب"
            target="_blank"
            href="https://www.rialir.com/youtube-earnings/"
            icon={<YouTubeIcon />}
            sx={{ padding: 0 }}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
