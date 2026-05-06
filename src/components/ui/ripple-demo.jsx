import { Ripple } from "./ripple";

export function RippleDemo({children}) {
  return (
    <div className="bg-background relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
      <p className="z-10 text-center text-5xl font-medium whitespace-pre-wrap text-black">
        {children}
      </p>
     
      <Ripple />
    </div>
  )
}
