import  Alert  from "./Alert";
import { Meta, StoryObj } from "@storybook/react"
import { AlertProps } from "./Alert"


export default {
    title: "Alert",
    component: Alert,
    args: {
        title: "Warning alert:",
            children:"Alert with title and longer description Alert with title and longer description Alert with title and longer description Alert with title and longer description.",
            variant: "warning",
            onClose: () => {},
            size: "large",
            link: 'https://www.google.com/',
            textLink: 'Saiba Mais',
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
} as Meta<AlertProps>   

export const Default: StoryObj<AlertProps> = {}
