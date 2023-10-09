import { Card, LineChart } from "@tremor/react";
import { TabGroup, TabList, Tab } from "@tremor/react";
import { chartdata } from "../data";

const Chart = () => {
  const dataFormatter = (number) => {
    return `${Intl.NumberFormat("en-ng", { style: "currency", currency: "NGN" })
      .format(number)
      .toString()}`;
  };
  return (
    <Card className='col-span-3 row-span-3 -z-10'>
      <div className='flex flex-col md:flex-inline justify-between'>
        <p className='text-xl font-bold'>Statistics</p>
        <TabGroup className='w-max'>
          <TabList variant='solid'>
            <Tab>1D</Tab>
            <Tab>1W</Tab>
            <Tab>1M</Tab>
            <Tab>6M</Tab>
            <Tab>1Y</Tab>
          </TabList>
        </TabGroup>
      </div>
      <LineChart
        className='mt-4'
        data={chartdata}
        index='date'
        categories={["Total Expense"]}
        colors={["yellow"]}
        yAxisWidth={65}
        valueFormatter={dataFormatter}
        showLegend={true}
      />
    </Card>
  );
};

export default Chart;
