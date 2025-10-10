import DashboardFeatures from "./dashboard/DashboardFeatures"
import DashboardStatistics from "./dashboard/DashboardStatistics"
import DontSettle from "./dashboard/DontSettle"


const Dashboard = ({ data }) => {
    const { dashboardFeaturesSection } = data
    return (
        <div className='w-full'>
            <DontSettle />
            <DashboardStatistics />
            <DashboardFeatures data={dashboardFeaturesSection} />
            {/* <StoreDashboardFeatures /> */}
            {/* <BusinessInterfaces /> */}
            {/* <EcommerceFlow /> */}
            {/* <AppFeatures /> */}
        </div>
    )
}

export default Dashboard