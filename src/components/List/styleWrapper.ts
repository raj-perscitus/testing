
import styled from "@mui/material/styles/styled";

const CustomListWrapper = styled("div")(() => {
    return {
      width: "100%",
      "&.pointer-events-none": {
        pointerEvents: "none",
      },
      "& :hover >": {
        ".MuiListItemText-secondary": {
          color: "#fff",
        },
      },
      ".cursor-hand-hover": {
        cursor: "pointer",
      },
      "& .MuiListItem-root": {
        padding: "0px 10px",
        "&:hover": {
          color: "#fff",
          background: "#4782C4",
          width: "100%",
        },
      },
      "& .MuiGrid-item": {
        width: "100%",
      },
      ".only-description": {
        padding: "5px 0px",
        display: "block",
      },
    };
  });

export default CustomListWrapper;