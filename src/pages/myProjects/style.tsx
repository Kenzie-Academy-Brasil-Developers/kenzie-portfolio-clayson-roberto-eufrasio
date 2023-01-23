import { styled } from "@/styles/stitches.config";

export const ContrainerProjetcs = styled("ul",{
    margin: "auto",
    display: "flex",

    "@mobile": {
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
    
}) 

export const CardProjects = styled("li",{
    listStyle: "none",
    margin: "50px"
    
}) 