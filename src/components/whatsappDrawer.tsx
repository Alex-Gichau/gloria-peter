import { Button } from "./ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"

const whatsappDrawer = () => {
  return (
    <div>
        <Drawer>
            <DrawerTrigger>Join Us</DrawerTrigger>
            <DrawerContent className="items-center justify-items-center align-middle">
                <DrawerHeader>
                    <div className="bg-amber-400 rounded-full h-16 w-16"></div>
                    <DrawerTitle>
                        We are Happy to Have You
                    </DrawerTitle>
                    <DrawerDescription>
                        Join Our WhatsApp Family. Click Below
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>WhatsApp Family</Button>
                    <DrawerClose>
                        <Button variant="outline">Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </div>
  )
}

export default whatsappDrawer