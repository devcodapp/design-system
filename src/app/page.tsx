'use client'

import { Button } from '@/components/Button'

export default function Home() {
  return (
    <div className='flex flex-col gap-3'>
      <Button className='bg-primary-700' onClick={() => alert('Teste')}>Salvar</Button>
      <Button>Fechar</Button>
      <Button>Cancelar</Button>
      <Button className='bg-warning-500'>Continuar</Button>
    </div>
  )
}
