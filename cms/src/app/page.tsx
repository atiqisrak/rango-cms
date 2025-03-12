import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { MainLayout } from "@/components/layout/MainLayout"

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <div className="relative w-full h-32 mb-8">
          <Image
            src="/rango.webp"
            alt="Rango CMS"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <h1 className="text-5xl font-bold mb-4 gradient-text">
          Welcome to Rango CMS
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
          A modern, flexible content management system built with Next.js and shadcn/ui.
          Start managing your content with ease.
        </p>
        
        <div className="flex gap-4">
          <Link href="/dashboard">
            <Button size="lg" className="gap-2">
              Get Started
            </Button>
          </Link>
          <Link href="/docs">
            <Button size="lg" variant="outline" className="gap-2">
              Documentation
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}