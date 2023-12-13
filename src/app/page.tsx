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
        <Dialog.Root isOpen={isOpen} onOpenChange={onOpenChange}>
                <Dialog.Header onClose={onOpenChange}>
                    <Text size="md" className="font-bold">Titulo do Modal</Text>
                </Dialog.Header>
            <Dialog.Content className="gap-4 p-4">
                    <div className='justify-end flex gap-3'>
                    <button className=" gap-1 body-semi inline-flex items-center justify-center rounded px-4 py-3 transition-all duration-300 focus:border-2 focus:outline-none focus:ring-2  focus:ring-primary-700 focus:dark:ring-dark-primary-700 focus:dark:ring-dark-primary-700 disabled:border-neutral-200 disabled:bg-neutral-150 disabled:text-neutral-600
                    text-neutral-0 bg-primary-700 hover:bg-primary-600 dark:bg-dark-primary-600 hover:dark:bg-dark-primary-700 dark:border-transparent">Botões</button>
                    <button className=" gap-1 body-semi inline-flex items-center justify-center rounded px-4 py-3 transition-all duration-300 focus:border-2 focus:outline-none focus:ring-2  focus:ring-primary-700 focus:dark:ring-dark-primary-700 focus:dark:ring-dark-primary-700 disabled:border-neutral-200 disabled:bg-neutral-150 disabled:text-neutral-600
                    text-neutral-0 bg-primary-700 hover:bg-primary-600 dark:bg-dark-primary-600 hover:dark:bg-dark-primary-700 dark:border-transparent">Botões</button>
                    </div>
                    <Text size="lg" className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
                   
            </Dialog.Content>
                <Dialog.Footer>
                    <button className=" gap-1 body-semi inline-flex items-center justify-center rounded px-4 py-3 transition-all duration-300 focus:border-2 focus:outline-none focus:ring-2  focus:ring-primary-700 focus:dark:ring-dark-primary-700 focus:dark:ring-dark-primary-700 disabled:border-neutral-200 disabled:bg-neutral-150 disabled:text-neutral-600
                    text-neutral-0 bg-primary-700 hover:bg-primary-600 dark:bg-dark-primary-600 hover:dark:bg-dark-primary-700 dark:border-transparent">Botões</button>

                </Dialog.Footer>
        </Dialog.Root>
    </>
  );
}