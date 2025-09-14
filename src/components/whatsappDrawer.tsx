import { MdWhatsapp } from "react-icons/md"
import { Button } from "./ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"


const whatsappDrawer = () => {
  return (
    <div>
        <Drawer>
            <DrawerTrigger><Button>Join Us Our WhatsApp Family</Button></DrawerTrigger>
            <DrawerContent className="items-center justify-items-center align-middle">
                <DrawerHeader>
                    {/* <div className="bg-amber-400 rounded-full h-16 w-16"></div> */}
                    <DrawerTitle>
                       Gloria & Peter
                    </DrawerTitle>
                    <DrawerDescription>
                        Join Our WhatsApp Family. <br/>We are happy to have you.
                    </DrawerDescription>
                    <a href="web.whatsapp.com" target="_blank">
                        <Button className="mt-2"><MdWhatsapp/>WhatsApp Family</Button></a>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        {/* <Button variant="outline">X</Button> */}
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </div>
  )
}

export default whatsappDrawer