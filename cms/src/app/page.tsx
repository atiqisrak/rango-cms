import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <Image
          src="/rango.webp"
          alt="Rango CMS"
          width={100}
          height={100}
        />
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to CMS</h1>
        <div className="flex justify-center">
          <Button>Get Started</Button>
        </div>
      </div>
    </main>
  )
}