import { Box } from "@mui/material";
import { borderRadius, styled } from "@mui/system";


const widgetWrapper = styled(Box)(({ theme }) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem",
    backgroundColor: theme.palette.background.alt,
    borderRadius: "0.75rem"
}));


export default widgetWrapper;