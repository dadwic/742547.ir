import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import data from "./data";

export default function Domains() {
  return (
    <Box sx={{ flexGrow: 1, mt: 4, direction: "ltr" }}>
      <Grid container spacing={2}>
        {data.sort().map((domain, key) => (
          <Grid size={{ xs: 6, md: 3 }} key={key}>
            <Card>
              <CardActionArea href={`https://${domain}`} target="_blank">
                <CardMedia
                  sx={{ width: "100%", height: { xs: 180, md: 280 } }}
                  image={`/images/${domain.split(".")[0]}.jpg`}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    textAlign="center"
                    sx={{ direction: "ltr" }}
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
    </Box>
  );
}
