import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import data from "./data";

export default function Domains({ is74, host }) {
  const domain = is74 ? [] : [host];
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={2} flexDirection="row-reverse">
        {[...domain, ...data.filter((item) => item !== host).sort()].map(
          (domain, key) => (
            <Grid size={{ xs: 6, md: 3 }} key={key}>
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
          )
        )}
      </Grid>
    </Container>
  );
}
