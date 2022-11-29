import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummery from "@mui/material/AccordionSummary";
import AccordionDetail from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subTilte="주요 문의 사항" />
      <Accordion defaultExpanded>
        <AccordionSummery expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question
          </Typography>
        </AccordionSummery>
        <AccordionDetail>
          <Typography>질문 내용</Typography>
        </AccordionDetail>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummery expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question
          </Typography>
        </AccordionSummery>
        <AccordionDetail>
          <Typography>질문 내용</Typography>
        </AccordionDetail>
      </Accordion>
    </Box>
  );
};

export default FAQ;
