import { Text } from "./Text";
import type { Meta, StoryObj } from "@storybook/react"
import { TextProps } from "./Text"


export default {
    title: "Typography/Text",
    component: Text,
    tags: ['autodocs'],
    args: {
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        size: "md",
        className: 'text-white',
        style: {
            background: '#32324D' // Defina a cor de fundo desejada aqui
        }
    },
    parameters: { layout: 'centered'}, 
    decorators: [
        (Story) => { 
            return (
                Story()
            )
        }
    ]
} as Meta<TextProps>   

export const Text_: StoryObj<TextProps> = {}
