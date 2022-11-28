import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="대쉬 보드" subTitle="전체 데이터 차트" />
      </Box>
    </Box>
  );
};
export default Dashboard;
