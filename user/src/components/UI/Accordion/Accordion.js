import * as React from "react";
import { styled } from "@mui/material/styles";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
<i class='fa-solid fa-angle-down' />;
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<i class='fa-solid fa-square-caret-right' />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
    color: "#000",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  "& .MuiAccordionSummary-content.Mui-expanded p": {
    fontWeight: "bold",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "2.5rem",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({ data }) {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((accordion) => (
        <Accordion
          expanded={expanded === `${accordion.title}`}
          onChange={handleChange(`${accordion.title}`)}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <Typography>{accordion.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
