'use client'

import React from "react";
import { Button, useDisclosure} from "@nextui-org/react";
import { ModalAlert } from "@/components/Alert-Modal";
import { AlertCircle } from "lucide-react";
import { Text } from "@/components/Text";

export default function Home() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
        <Button onPress={onOpen}>Open Modal</Button>
        <ModalAlert.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalAlert.Header>
            <Text className="text-black" size="lg">Confirmação</Text>
        </ModalAlert.Header>
        <ModalAlert.Content>
            <AlertCircle className="mt-10 self-center" color="#B72B1A" size={28}/>
            <Text className="font-semibold text-red-500 text-center m-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, beatae?</Text>
        </ModalAlert.Content>
        <ModalAlert.Footer>
            Botoes
        </ModalAlert.Footer>
        </ModalAlert.Root>
    </>
  );
}