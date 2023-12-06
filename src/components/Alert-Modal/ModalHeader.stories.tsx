import { AlertCircle } from "lucide-react";
import { ModalAlert } from ".";
import { ModalHeader, ModalHeaderProps }  from "./ModalHeader";
import { Meta, StoryObj } from "@storybook/react"
import { useDisclosure, Button } from "@nextui-org/react";


export default {
    title: "Components/Modal/ModalHeader",
    component: ModalHeader,
    args: {
        children: "Modal Header",
    },
    parameters: { layout: 'centered', backgrounds: {
        values: [
                { name: 'neutral', value: '#32324D' },
                { name: 'white', value: '#fff' },
            ],
        },
    },
    decorators: [
    (Story) => {
        const {isOpen, onOpen, onOpenChange} = useDisclosure();
        return (
            <>
            <Button onPress={onOpen}>Open Modal</Button><ModalAlert.Root isOpen={isOpen} onOpenChange={onOpenChange}>
                {Story()}
                <ModalAlert.Content>
                    <AlertCircle className="mt-2 mb-0 self-center" color="#B72B1A" size={28} />
                    <p className="font-semibold text-danger-500 text-center m-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, beatae?</p>
                </ModalAlert.Content>
            </ModalAlert.Root></>
         )
        }
    ],
} as Meta<ModalHeaderProps>   

export const Default: StoryObj<ModalHeaderProps> = {} 