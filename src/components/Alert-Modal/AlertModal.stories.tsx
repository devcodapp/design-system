import React from "react";
import { Button, useDisclosure} from "@nextui-org/react";
import { ModalAlert } from "../Alert-Modal";
import { AlertCircle } from "lucide-react";


export default {
    title: 'Components/Alert-Modal',
    component: ModalAlert,
    args: {
        hideCloseButton: true,
        className: '',
        size: 'md',
        title: 'Confirm',
        children: <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, beatae?</p>
    }
}


export const Modal = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
        <Button onPress={onOpen}>Open Modal</Button>
        <ModalAlert.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalAlert.Header>
            <p className="text-black">Confirmação</p>
        </ModalAlert.Header>
        <ModalAlert.Content>
            <AlertCircle className="mt-2 mb-0 self-center" color="#B72B1A" size={28}/>
            <p className="font-semibold text-red-500 text-center m-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, beatae?</p>
        </ModalAlert.Content>
        <ModalAlert.Footer>
            Botoes
        </ModalAlert.Footer>
        </ModalAlert.Root>
    </>
  );
}