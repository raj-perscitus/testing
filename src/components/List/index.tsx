import React, { SyntheticEvent } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import CustomListWrapper from "./styleWrapper";
import PrimaryText from "./PrimaryText";

export interface ListProps {
  label?: string;
  labelRight?: string;
  description?: string;
}

export interface InteractiveListProps {
  image?: string;
  link: string;
  list: ListProps[];
  onClick?: (event: SyntheticEvent, data: ListProps) => void;
}

export const InteractiveList: React.FunctionComponent<InteractiveListProps> = (
  props: InteractiveListProps
) => {
  const { image } = props;
  return (
    <CustomListWrapper className={!props?.onClick ? "pointer-events-none" : ""}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <List disablePadding>
            {props.list?.map((data: ListProps, index) => {
              return (
                <div key={`${data.label}-${index}`}>
                  <ListItem
                    className={props?.onClick ? "cursor-hand-hover" : ""}
                    disableGutters
                    onClick={(event) => props?.onClick?.(event, data)}
                  >
                    {image ? (
                      <ListItemIcon>
                        <img src={image} alt={`${data.label}`} />
                      </ListItemIcon>
                    ) : null}
                    <ListItemText
                      primary={<PrimaryText {...data} />}
                      secondary={
                        <span className={data.label ? "" : "only-description"}>
                          {data?.description}
                        </span>
                      }
                    />
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </CustomListWrapper>
  );
};
