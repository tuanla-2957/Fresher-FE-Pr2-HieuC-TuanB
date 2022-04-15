import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { Spinner } from "../../../../components/UI/Spinner";
import { THIS_YEAR } from "../../../../constant";

const SalesByDayChart = (props) => {
  const { salesByDay, loadSalesByDay } = useSelector((state) => state.orders);
  if (loadSalesByDay) {
    return <Spinner />;
  }

  const getMonthDays = (month, year) => {
    const months30 = [4, 6, 9, 11];
    const leapYear = year % 4 === 0;

    return month === 2
      ? leapYear
        ? 29
        : 28
      : months30.includes(month)
      ? 30
      : 31;
  };

  const modData = () => {
    const dayPerMonth = getMonthDays(props.month, THIS_YEAR);
    const returnData = [];
    for (let i = 1; i <= dayPerMonth; i++) {
      if (salesByDay.length > 0 && salesByDay.some((day) => day._id == i)) {
        salesByDay.map((day) => {
          if (day._id === i) {
            returnData.push({ name: i, totalSale: day.totalSale });
          }
        });
      } else {
        returnData.push({ name: i, totalSale: 0 });
      }
    }
    return returnData;
  };

  const returnChart = (
    <ResponsiveContainer width='100%' height='80%'>
      <LineChart
        width={500}
        height={300}
        data={modData()}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='totalSale'
          stroke='#55BCC9'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  return returnChart;
};

export default SalesByDayChart;
