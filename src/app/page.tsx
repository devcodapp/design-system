'use client'

import React from "react";
import { Button, useDisclosure} from "@nextui-org/react";
import { Dialog } from "@/components/Dialog";
import { Text } from "@/components/Text";

export default function Home() {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
        <Button onPress={onOpen}>Open Modal</Button>
        <Dialog.Root size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <Dialog.Content>
        <Dialog.Header>
            <Text size="lg">Titulo do Modal</Text>
        </Dialog.Header>
           <Text className="m-6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, autem distinctio quos commodi natus, error alias fugiat rerum nisi incidunt perferendis labore deserunt modi velit consequatur inventore eligendi nam ex!</Text>
        <Dialog.Footer>
            <Text size="md">Botões</Text>
        </Dialog.Footer>
        </Dialog.Content>
        </Dialog.Root>
    </>
  );
}