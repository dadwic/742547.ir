import * as React from "react";
import { headers } from "next/headers";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import Domains from "@/components/Domains";

export default function Home() {
  const host = headers().get("host");
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          dir="ltr"
          variant="h2"
          component="h1"
          textAlign="center"
          fontWeight={700}
        >
          {host}
        </Typography>
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight={600}
          gutterBottom
        >
          این دامنه برای فروش می‌باشد.
        </Typography>
        <Typography
          variant="h6"
          component="a"
          textAlign="center"
          href="https://t.me/+989200742547"
          fontWeight={600}
          target="_blank"
        >
          تماس از طریق تلگرام با شماره ۰۹۲۰۰۷۴۲۵۴۷
        </Typography>
        <Domains host={host} />
      </Box>
    </Container>
  );
}
