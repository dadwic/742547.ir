import React from "react";
import Head from "next/head";
import Image from "next/image";
import { headers } from "next/headers";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import data from "./data";

const brand = "742547.ir";
const isDev = process.env.NODE_ENV === "development";

export default function Domains() {
  const host = isDev ? brand : headers().get("host");
  const current = data.find((v) => v.domain === host);
  const is74 = host === brand;
  const domains = data
    .filter((item) => item.domain !== host)
    .sort((a, b) => ("name" in b) - ("name" in a));
  if (!is74) domains.unshift(current);

  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Grid container spacing={2} flexDirection="row-reverse">
        <Grid size={{ xs: 12 }} mb={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {is74 ? (
              <svg
                height={40}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 152.77 23.01"
                style={{ marginBottom: 16 }}
              >
                <g data-name="Layer_1">
                  <g>
                    <path d="M111.71,4.29V.51h-16.16v7.17h4.67v-2.88h5.63l-8,16.7h-7.68v-3.97h2.53v-4.32h-2.53v-3.9h-4.8v3.9h-3.17l7.58-12.7h-5.44l-7.97,13.22v3.81h8.99v3.97h-14.75c.96-.68,1.71-1.54,2.26-2.58.54-1.03.82-2.17.82-3.41,0-2.22-.78-3.98-2.34-5.28-1.56-1.3-3.41-1.95-5.57-1.95-.85,0-1.61.1-2.27.29v-3.74h8.83V.51h-13.5v10.91l2.08,2.24c1.49-.81,2.81-1.22,3.94-1.22s2.05.27,2.77.82c.71.54,1.07,1.32,1.07,2.32s-.33,1.76-.99,2.27c-.66.51-1.42.77-2.27.77s-1.71-.23-2.56-.69c-.85-.46-1.44-.83-1.76-1.1s-.58-.51-.77-.7l-2.62,3.65c.53.62,1.19,1.19,1.98,1.73h-5.28v-3.1h-8.83l4.03-4.19c1.58-1.64,2.66-2.99,3.25-4.05.59-1.06.88-2.16.88-3.31,0-2.11-.73-3.78-2.19-5.01-1.46-1.23-3.16-1.84-5.09-1.84s-3.52.42-4.77,1.25-2.4,2.06-3.44,3.68l4,2.37c1.26-2,2.59-3.01,4-3.01.77,0,1.4.25,1.89.75.49.5.74,1.13.74,1.87s-.28,1.52-.85,2.32c-.57.8-1.51,1.87-2.83,3.22l-6.56,6.72v2.34h-5.73v-3.97h2.53v-4.32h-2.53v-3.9h-4.8v3.9h-3.17L32.54.51h-5.44l-7.97,13.22v3.81h8.99v3.97H9.28L17.66,4.29V.51H1.5v7.17h4.67v-2.88h5.63L3.81,21.5H0v1.38h112.58v-1.38h-9.25l8.38-17.22Z" />
                    <path d="M115.78,20.29c-.36,0-.68.13-.94.38s-.4.58-.4.96.13.71.4.98.58.4.94.4.68-.13.94-.4.4-.59.4-.98-.13-.7-.4-.96-.58-.38-.94-.38Z" />
                    <polygon points="118.98 1.95 123.68 1.95 123.68 21.41 118.98 21.41 118.98 22.88 130.02 22.88 130.02 21.41 125.31 21.41 125.31 1.95 130.02 1.95 130.02 .48 118.98 .48 118.98 1.95" />
                    <path d="M147.17,15.04c1.69-.49,2.98-1.34,3.89-2.54.91-1.21,1.36-2.69,1.36-4.46,0-2.37-.8-4.22-2.4-5.55-1.6-1.33-3.81-2-6.62-2h-8.03v22.4h1.63v-7.33h6.4c.66,0,1.39-.05,2.18-.16l5.34,7.49h1.86l-5.6-7.84ZM143.39,14.11h-6.4V1.95h6.4c2.39,0,4.21.53,5.47,1.58,1.26,1.06,1.89,2.56,1.89,4.5s-.63,3.44-1.89,4.5c-1.26,1.06-3.08,1.58-5.47,1.58Z" />
                  </g>
                </g>
              </svg>
            ) : (
              <Typography
                dir="ltr"
                variant="h2"
                textAlign="center"
                fontWeight={700}
              >
                {host}
              </Typography>
            )}
            <Typography
              variant="h5"
              component="h1"
              textAlign="center"
              fontWeight={700}
              gutterBottom
            >
              {is74 ? (
                "دامنه‌ها متعلق به مجموعه ریالیر می‌باشد."
              ) : (
                <>
                  {current?.name
                    ? `خرید مستقیم از ${current.name} ترکیه`
                    : "این دامنه برای فروش می‌باشد."}
                </>
              )}
            </Typography>
            <Typography
              variant="h6"
              component="a"
              textAlign="center"
              href="https://t.me/+989200742547"
              target="_blank"
            >
              ارتباط با <b>ریالیر</b> در تلگرام با شماره <b>۰۹۲۰۰۷۴۲۵۴۷</b>
            </Typography>
          </Box>
        </Grid>
        {domains.map(({ domain, name }, key) => (
          <Grid size={{ xs: 6, md: 3 }} key={key}>
            {name && (
              <Head>
                <meta
                  name="description"
                  content={`ریالیر | خرید مستقیم از ${name} ترکیه`}
                />
              </Head>
            )}
            <Card>
              <CardActionArea href={`https://${domain}`} target="_blank">
                <CardMedia
                  sx={{
                    position: "relative",
                    filter: "brightness(0.95)",
                    height: { xs: 180, md: 280 },
                  }}
                >
                  <Image
                    alt={domain}
                    src={`/images/${domain.split(".")[0]}.jpg`}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                  />
                </CardMedia>
                <Divider />
                <CardContent>
                  <Typography
                    dir="ltr"
                    variant="h6"
                    component="div"
                    textAlign="center"
                    fontWeight={700}
                  >
                    {domain}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
