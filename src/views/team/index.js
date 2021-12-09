import * as React from "react";
import * as anchor from "@project-serum/anchor";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from '@mui/material/Link'
import Avatar from "@mui/material/Avatar";
import { autocompleteClasses, Typography } from "@mui/material";

export default function Team() {
  return (
    <Grid container justifyContent="center" marginTop={5}>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontWeight: "600",
          fontSize: "42px",
          color: "#01FFA3",
        }}
      >
        The Team
      </Typography>
      <Grid container justifyContent="center" marginTop={5}>
        <Box
          sx={{
            bgcolor: "#FCF8EA",
            border: "4px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            color: "black",
            width:'30%',
            paddingBottom:'20px'
          }}
        >
          <Avatar alt="Khalil" src="/images/khalil.png" sx={{ width: 131, height: 131 }}></Avatar>
          <Grid container justifyContent="center">
            <Typography
              sx={{
                color: "#DC1FFF",
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: "42px"
              }}
            >
              Khalil
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography>Developer/Creator</Typography>
          </Grid>
          <Grid container justifyContent="center">
          <Link href="https://twitter.com/khaiilnafis">@KhaIilnafis</Link>
          </Grid>
        </Box>
      </Grid>
      <Grid container justifyContent="center" marginTop={5}>
        <Box
          sx={{
            bgcolor: "#FCF8EA",
            border: "4px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            color: "black",
            width:'30%',
            paddingBottom:'20px'
          }}
        >
          <Avatar alt="Allan" src="/images/allan.png" sx={{ width: 131, height: 131 }}></Avatar>
          <Grid container justifyContent="center">
            <Typography
              sx={{
                color: "#DC1FFF",
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: "42px",
              }}
            >
              Allan
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography>Front-end Developer</Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Link href="https://twitter.com/so1a11ana">@so1a11ana</Link>
          </Grid>
        </Box>
      </Grid>
      <Grid container justifyContent="center" marginTop={5}>
        <Box
          sx={{
            bgcolor: "#FCF8EA",
            border: "4px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            color: "black",
            width:'30%',
            paddingBottom:'20px'
          }}
        >
          <Avatar alt="DreLaSol" src="images/dre.png" sx={{ width: 131, height: 131 }}></Avatar>
          <Grid container justifyContent="center">
            <Typography
              sx={{
                color: "#DC1FFF",
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: "42px",
              }}
            >
              DeAndre
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Typography>Product Manager / Designer</Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Link href="https://twitter.com/DreLaSOL">@DreLaSol</Link>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}