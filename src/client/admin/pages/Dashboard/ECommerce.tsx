import TotalSignupsCard from '../../components/TotalSignupsCard';
import TotalPageViewsCard from '../../components/TotalPaidViewsCard';
import TotalPayingUsersCard from '../../components/TotalPayingUsersCard';
import TotalProfitCard from '../../components/TotalProfitCard';
import DailyActiveUsersChart from '../../components/DailyActiveUsersChart';
import ReferrerTable from '../../components/ReferrerTable';
import DefaultLayout from '../../layout/DefaultLayout';

const ECommerce = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <TotalPageViewsCard />
        <TotalProfitCard />
        <TotalPayingUsersCard />
        <TotalSignupsCard />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <DailyActiveUsersChart />
        {/* <ChartThree /> */}

        <div className="col-span-12 xl:col-span-8">
          <ReferrerTable />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;