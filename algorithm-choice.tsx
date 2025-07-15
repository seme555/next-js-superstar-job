import { Smile } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-black rounded-lg overflow-hidden">
        {/* Header */}
        <div className="text-center py-4">
          <div className="text-yellow-400 font-bold text-lg">
            <span className="text-white">(</span>inner<span className="text-white">)</span>
          </div>
        </div>

        {/* Main Split Content */}
        <div className="grid grid-cols-2 min-h-[500px]">
          {/* Left Side - Algorithms */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 flex flex-col justify-center items-center text-center relative">
            {/* Character illustration placeholder - dark/menacing */}
            <div className="w-48 h-48 mb-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-sm">Dark Character with VR Glasses</div>
            </div>

            <h2 className="text-yellow-400 text-3xl font-bold mb-4">algorithms</h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
              Let the algorithms harvest your anxiety, monetize your timelines, and hook you on machines that will never
              love you.
            </p>

            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Smile className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>

          {/* Right Side - Wellgorithms */}
          <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 p-8 flex flex-col justify-center items-center text-center relative">
            {/* Character illustration placeholder - serene */}
            <div className="w-48 h-48 mb-6 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
              <div className="text-purple-200 text-sm">Serene Character with Future Glasses</div>
            </div>

            <h2 className="text-yellow-400 text-3xl font-bold mb-4">wellgorithms</h2>

            <p className="text-purple-100 text-sm leading-relaxed mb-6 max-w-xs">
              Create works of unimaginable beauty, cultivate your mind like a garden, and share flowers of the spirit in
              the age of AI.
            </p>

            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Smile className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Center Choice Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/80 px-6 py-2 rounded-full">
            <span className="text-purple-300 text-lg font-medium">choose your reality</span>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="grid grid-cols-2 py-4 text-center">
          <div className="text-gray-400 text-sm">
            <span className="text-white">link: (</span>inner<span className="text-white">)</span>Wars
          </div>
          <div className="text-gray-400 text-sm">
            <span className="text-white">link: (</span>inner<span className="text-white">)</span>Garden
          </div>
        </div>
      </div>
    </div>
  )
}
