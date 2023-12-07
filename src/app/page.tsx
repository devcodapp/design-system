'use client'

import useAlert from '@/components/Alert/useAlert'

export default function Home() {
    const { alerts, createToast }= useAlert()

    const addAlert = () => {
        createToast({
            title: "Warning alert:",
            children:"Alert with title and longer description.",
            variant: "warning",
            onClose: () => {},
            size: "small",
            link: 'https://www.google.com/',
            textLink: 'Saiba Mais',

        }
        )
    }
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-900">
        <button onClick={addAlert} className="bg-primary-600 text-white px-6 py-2 rounded-md">Adicionar Alert</button>
        {alerts}
    </div>
  )
}