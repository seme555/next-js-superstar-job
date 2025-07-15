import { Smile } from "lucide-react"

// Component for hexagonal GO button
const HexagonButton = ({ children }: { children: React.ReactNode }) => (
  <div 
    className="w-12 h-12 bg-yellow-400 flex items-center justify-center pointer-events-auto cursor-pointer relative" 
    style={{
      clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
    }}
  >
    <span className="text-black font-bold text-xs">{children}</span>
  </div>
)

// Component for connecting line
const ConnectingLine = () => (
  <div className="w-16 h-0.5 bg-gray-400"></div>
)

// Component for navbar
const Navbar = () => (
  <div className="w-full bg-gradient-to-r from-black via-purple-900 to-purple-600 py-4 relative z-20">
    <div className="text-center">
      <span className="font-bold text-xl">
        <span className="text-yellow-400">&lt; </span>
        <span className="text-white">inner</span>
        <span className="text-yellow-400">&gt; </span>
      </span>
    </div>
  </div>
)

// Component for content sections
const ContentSection = ({ 
  title, 
  description 
}: { 
  title: string; 
  description: string; 
}) => (
  <div className="p-8 flex flex-col justify-center items-center text-center relative mt-16">
    <h2 className="text-yellow-400 text-3xl font-bold mb-6">{title}</h2>
    <p className="text-white text-sm leading-relaxed max-w-xs">
      {description}
    </p>
  </div>
)

// Component for choice section
const ChoiceSection = () => (
  <div className="absolute bottom-20 left-0 right-0 flex justify-center pointer-events-none">
    <div className="flex items-center">
      <HexagonButton>GO</HexagonButton>
      <ConnectingLine />
      <div className="px-6 py-2">
        <span className="text-white text-lg font-medium">choose your reality</span>
      </div>
      <ConnectingLine />
      <HexagonButton>GO</HexagonButton>
    </div>
  </div>
)

// Component for footer links
const FooterLinks = () => (
  <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 py-4 text-center bg-gray-600">
    <div className="text-white text-sm">
      <span className="text-white">link: (</span>inner<span className="text-white">)</span>Wars
    </div>
    <div className="text-white text-sm">
      <span className="text-white">link: (</span>inner<span className="text-white">)</span>Garden
    </div>
  </div>
)

export default function Component() {
  return (
    <div className="w-full h-screen relative">
      <Navbar />
      
      {/* Background Image Container */}
      <div 
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{ 
          backgroundImage: "url('/bg.jpg')",
          height: "calc(100vh - 60px)"
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col">
          {/* Main Split Content */}
          <div className="grid grid-cols-2 flex-1">
            <ContentSection 
              title="algorithms"
              description="Let the algorithms harvest your anxiety, monetize your timelines, and hook you on machines that will never love you."
            />
            <ContentSection 
              title="wellgorithms"
              description="Create works of unimaginable beauty, cultivate your mind like a garden, and share flowers of the spirit in the age of AI."
            />
          </div>

          <ChoiceSection />
          <FooterLinks />
        </div>
      </div>
    </div>
  )
}
