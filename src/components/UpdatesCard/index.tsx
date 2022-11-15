import React from "react";
import styled from "@mui/material/styles/styled";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Divider, Link } from "@mui/material";

export interface UpdatesCardsProps {
  image?: string;
  title?: string;
  subheader?: string;
  Component?: React.ComponentType;
  maxWidth?: string
}

const CustomCard = styled(Card)(({ theme }) => {
  return {
    marginBottom: 10,
    "& .MuiCardHeader-avatar": {
      marginRight: 0,
      img: {
        width: 40,
      },
    },
    "& .MuiCardContent-root": {
      height: 250,
      maxHeight: 250,
      backgroundColor: "#fff",
      overflow: "hidden",
      overflowY: "scroll",
      padding: 0,
      "&::-webkit-scrollbar": {
        width: 7,
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "darkgrey",
        outline: `1px solid slategrey`,
      },
    },
    "& .MuiCardHeader-content": {
      "& span": {
        marginLeft: "0.3vw",
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 1,
        letterSpacing: 0.15,
        color: "#162242",
      },
    },
    "& .MuiCardHeader-action": {
      alignSelf: "auto",
      margin: 0,
      "& a": {
        fontSize: 12,
        color: "#8c827a",
      },
    },
  };
});

export const UpdatesCard: React.FunctionComponent<UpdatesCardsProps> = (
  props: UpdatesCardsProps
) => {
  const { image, Component, maxWidth = 345 } = props;
  return (
    <CustomCard  sx={{ maxWidth }}>
      <CardHeader
        avatar={<img src={image} alt={props.title} />}
        action={
          <Link href="test" underline="none" onClick={console.log}>
            View all
          </Link>
        }
        title={props.title}
        subheader={props.subheader}
      />
      <Divider />
      <CardContent>{Component && <Component />}</CardContent>
    </CustomCard>
  );
};
