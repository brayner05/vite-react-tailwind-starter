import { useState } from "react"

const App = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className="bg-zinc-800 text-white w-full h-dvh p-5 flex flex-col justify-center items-center">
            <div className="flex-1 flex items-center">
                <h1 className="font-bold text-4xl text-center">
                    Vite + React +{" "}
                    <span className="text-sky-400">Tailwind CSS</span>
                </h1>
            </div>
            <div className="flex-1">
                <button
                    className="px-6 py-2.5 bg-sky-400 text-white font-medium rounded-lg"
                    onClick={() => setCount(count + 1)}
                >
                    Count: {count}
                </button>
            </div>
        </div>
    )
}

export default App
