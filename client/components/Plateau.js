import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Coord = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: "#76ff03",
}));

function Position(props) {
  const { x = 1, y = 1 } = props;
  const xArray = [...Array(x).keys()];
  const yArray = [...Array(y).keys()];

  return (
    <React.Fragment>
      {xArray &&
        yArray &&
        yArray.length > 0 &&
        yArray
          .sort((a, b) => {
            return b - a;
          })
          .map((yPosition) => (
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              key={`y-${yPosition}`}
            >
              {xArray.length > 0 ? (
                xArray.map((xPosition) => (
                  <Grid item xs marginTop={2}>
                    <Coord>Coord {`${xPosition}${yPosition}`}</Coord>
                  </Grid>
                ))
              ) : (
                <Grid item xs>
                  <Coord>Coord</Coord>
                </Grid>
              )}
            </Grid>
          ))}
    </React.Fragment>
  );
}

export default function Plateau(props) {
  const { newBounds } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Position x={newBounds?.x || 1} y={newBounds?.y || 1} />
    </Box>
  );
}
