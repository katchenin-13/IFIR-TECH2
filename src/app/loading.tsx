// app/loading.tsx
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center animate-pulse">
        <Image
          src="/images/logo/logo-blue.png"
          alt="Loading..."
          width={150}
          height={50}
          className="h-12 w-auto object-contain mb-4 grayscale"
        />
        <div className="w-12 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="w-full h-full bg-primary animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  )
}
