import React from "react";
import { Button, useDisclosure} from "@nextui-org/react";
import { Dialog } from "../Dialog";


export default {
    title: 'Components/Dialog',
    component: Dialog,
    args: {
        size: 'md',
        hideCloseButton: false,
        backdrop: 'opaque',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"],
            description: 'Tamanho do modal',
            table: {
                defaultValue: { summary: 'md' },
            }
        },
        hideCloseButton: {
            control: { type: 'boolean'}
    },
        backdrop: {
            control: { type: 'inline-radio' },
            options: ["transparent", "opaque", "blur"],
},
    },
    parameters: { layout: 'centered'},
}


export const Dialog_ = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
        <Button onPress={onOpen}>Open Modal</Button>
        <Dialog.Root isOpen={isOpen} onOpenChange={onOpenChange}>
            <Dialog.Header onClose={onOpenChange}>
                <p  className="font-bold">Título do Modal</p>
            </Dialog.Header>
                <Dialog.Content>
                    <p className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </Dialog.Content>
            <Dialog.Footer>
                <button className="flex items-center gap-1 body-semi justify-center rounded px-4 py-3 transition-all duration-300 focus:border-2 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:dark:ring-dark-primary-700 disabled:border-neutral-200 disabled:bg-neutral-150 disabled:text-neutral-600
                text-neutral-0 bg-primary-700 hover:bg-primary-600 dark:bg-dark-primary-600 hover:dark:bg-dark-primary-700 dark:border-transparent">Adicionar Conteúdo</button>
            </Dialog.Footer>
        </Dialog.Root>
    </>
  );
}