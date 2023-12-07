import  Alert  from "./Alert";
import { Meta, StoryObj } from "@storybook/react"
import { AlertProps } from "./Alert"
import { useAlert } from 


export default {
    title: "Components/Alert",
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
                <div className="flex justify-center items-center h-screen bg-zinc-900">
                    <button onClick={addAlert} className="bg-primary-600 text-white px-6 py-2 rounded-md">Adicionar Alert</button>
                    {Story()}
                </div>
              )
            },
    ]
} as Meta<AlertProps>   

export const Default: StoryObj<AlertProps> = {}
