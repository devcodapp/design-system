
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center pt-3 gap-3'>
      <Button variant='primary' loading size='large' loadingText='Salvando...'>Salvar</Button>
    </div>
  )
}
