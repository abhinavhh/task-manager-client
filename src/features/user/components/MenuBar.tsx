import { Card, CardHeader } from "@/Components/common/card"
import Logout from "@/Components/ui/Logout"

const MenuBar = () => {
  return (
    <Card className="grid">
        <CardHeader>
            <h1>Menu</h1>
            <Logout />
        </CardHeader>
    </Card>
  )
}
export default MenuBar