import { Button } from '@/Components/common/button'
import { Card } from '@/Components/common/card'
import { ArrowUpRight } from 'lucide-react'

const DashboardContent = () => {
  return (
    <div className="grid grid-rows-3 gap-4 mx-2">
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-2">
                <Card className="flex flex-col justify-center py-4 bg-gradient-to-b from-secondary to-background">
                  <div className="flex justify-between mx-4">
                    <h1 className="text-background">Total Taks</h1>
                    <Button variant="secondary"><ArrowUpRight/></Button>
                  </div>
                  <div className="flex items-center mx-4">
                    <h1 className="text-5xl text-foreground">24</h1>
                  </div>
                </Card>
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