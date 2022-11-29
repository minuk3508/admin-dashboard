import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChar";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subTitle="원형그래프(sample)" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
