import { AvatarComponent } from "@/components/Avatar";

export default function Home() {
  return (
    <>
    <AvatarComponent.Group max={5} total={4} >
      <AvatarComponent.Avatar className="bg-neutral-500" isFocusable={false} />
      <AvatarComponent.Avatar src="https://github.com/bezerra-lucas.png"  />
      <AvatarComponent.Avatar src="https://github.com/Eduardo-BarrosoS.png"  />
      <AvatarComponent.Avatar src="https://github.com/Anderson22-dev.png"  />
      <AvatarComponent.Avatar src="https://github.com/andrebellico.png"  />
    </AvatarComponent.Group>
    </>
  )
}
