//page.tsx


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
        <Dialog.Root scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <Dialog.Content>
                <Dialog.Header  onClose={onOpenChange}>
                    <Text size="md" className="font-bold">Titulo do Modal</Text>
                </Dialog.Header>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                <Dialog.Footer>
                    <Text size="md" className="font-semibold">Botões</Text>
                </Dialog.Footer>
            </Dialog.Content>
        </Dialog.Root>
    </>
  );
}