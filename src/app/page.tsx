import { Text } from '@/components/Text'


import React from "react";
import { Button, useDisclosure} from "@nextui-org/react";
import { ModalAlert } from "@/components/Alert-Modal";
import { AlertCircle } from "lucide-react";


export default function Home() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <>
        <Button onPress={onOpen}>Open Modal</Button>
        <ModalAlert.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalAlert.Content>
        <ModalAlert.Header>
            Confirmação
        </ModalAlert.Header>
            <AlertCircle className="mt-2 mb-0 self-center" color="#B72B1A" size={28}/>
            <span className="font-semibold text-center m-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, beatae?</span>
        <ModalAlert.Footer>
            Botoes
        </ModalAlert.Footer>
        </ModalAlert.Content>
        </ModalAlert.Root>
    </>
  );
}
