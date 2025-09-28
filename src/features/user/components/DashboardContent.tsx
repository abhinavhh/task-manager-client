import { Card } from '@/Components/common/card'
import StatCard from './StatCard'

const DashboardContent = () => {
  return (
    <div className="grid grid-rows-3 gap-4 mx-2">
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-2">
                <StatCard title="Total Task" value="24" />
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </div>
              <div className="grid grid-cols-[2.08fr_1fr_1fr] gap-2">
                <Card className=""></Card>
                <Card></Card>
                <Card></Card>
              </div>
              <div className="grid grid-cols-[1.5fr_1.5fr_1fr] gap-2">
                <Card></Card>
                <Card></Card>
                <Card></Card>
              </div>
            </div>
  )
}

export default DashboardContent