import { Menu } from "lucide-react"

import { Sheet,
    SheetContent,
    SheetTrigger
} from "./ui/sheet"

import { Button } from "./ui/button"
import { NavigationSidebar } from "./navigation/navigation-sidebar"
import { ServerSideBar } from "./server/server-sidebar"

export const MobileToggle = ({
    serverId
}: {
    serverId: string;
}) => {
    return (
        <Sheet>
                <Button variant="ghost" size="icon" className="md:hidden" asChild>
                    <SheetTrigger>
                        <Menu/>
                    </SheetTrigger>
                </Button>
            
            <SheetContent side="left" className="p-0 flex gap-0">
                <div className="w-[72px]">
                    <NavigationSidebar />
                </div>
                <ServerSideBar 
                    serverId={serverId}
                />
            </SheetContent>
        </Sheet>

    )
}