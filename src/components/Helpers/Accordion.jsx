import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

/* ---------- Styled components ---------- */

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

/* ---------- Component ---------- */

const FAQAccordion = ({ items }) => {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  return (
    <div>
      {items.map((item, index) => {
        const panelId = `panel-${index}`;

        return (
          <Accordion
            key={panelId}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
          >
            <AccordionSummary
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
            >
              <Typography component="span" fontWeight={500}>
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography color="text.secondary">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
