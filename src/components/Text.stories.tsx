import { Text } from "./Text";
import { Meta, StoryObj } from "@storybook/react"
import { TextProps } from "./Text"


export default {
    title: "Typography/Text",
    component: Text,
    args: {
        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        size: "md",
        className: ''
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
            return (
                Story()
            )
        }
    ]
} as Meta<TextProps>   

export const Default: StoryObj<TextProps> = {}
