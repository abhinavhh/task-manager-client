import { Button } from "@/Components/common/button";
import { Card } from "@/Components/common/card";
import { ArrowUpRight } from "lucide-react";

interface StatsProps{
    title: string;
    value: string;
    onClick?: () => void;
}
const StatCard = ({title, value, onClick}: StatsProps) => {
  return (
    <Card className="flex flex-col justify-center py-4 bg-gradient-to-b from-secondary to-background">
        <div className="flex justify-between mx-4">
            <h1 className="text-background">{title}</h1>
            <Button variant="outline" className='bg-gray'><ArrowUpRight/></Button>
        </div>
        <div className="flex items-center mx-4">
            <h1 className="text-5xl text-foreground">{value}</h1>
        </div>
    </Card>
  )
}

export default StatCard