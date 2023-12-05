import { Text } from "./Text";
import { Meta, StoryObj } from "@storybook/react"
import { TextProps } from "./Text"


export default {
    title: "Typography/Text",
    component: Text,
    args: {
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        size: "md",
        className: 'text-white'
    },
    decorators: [
        (Story) => { 
            return (
                <div className="flex justify-center items-center h-screen max-w-full text-center">
                    {Story()}
                </div>
            )
        }
    ]
} as Meta<TextProps>   

export const Default: StoryObj<TextProps> = {}
