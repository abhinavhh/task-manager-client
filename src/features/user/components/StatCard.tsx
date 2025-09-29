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
    <Card className="flex flex-col justify-between bg-gradient-to-b from-secondary to-background pt-2 px-4 max-w-40 max-h-40">
        <div className="flex gap-2 justify-between items-center">
            <h1 className="text-background text-shadow-2xs">{title}</h1>
            <Button className='bg-gray w-4 h-4 hover:bg-gray-400'><ArrowUpRight/></Button>
        </div>
        <div className="flex items-center justify-center mx-4">
            <h1 className="text-4xl text-foreground">{value}</h1>
        </div>
    </Card>
  )
}

export default StatCard