import { Button } from "./ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"

const whatsappDrawer = () => {
  return (
    <div>
        <Drawer>
            <DrawerTrigger>Join Us</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>
                        We are Happy to Have You
                    </DrawerTitle>
                    <DrawerDescription>
                        Join Our WhatsApp Family. Link Below
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>WhatsApp Family</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </div>
  )
}

export default whatsappDrawer