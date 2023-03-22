import { styled } from "@/styles/stitches.config";

export const ContrainerProjetcs = styled("ul", {
  margin: "auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",

  "@mobile": {
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
});

export const CardProjects = styled("li", {
  listStyle: "none",
  margin: "50px",
});
