'use client'

import { useEffect } from 'react'
import { RefreshCcw } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 px-6">
            <div className="max-w-md w-full text-center">
                {/* SVG DESCRIPTIVO */}
                <svg
                    className="mx-auto mb-8 h-40 w-40 text-red-500"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Server box */}
                    <rect
                        x="40"
                        y="30"
                        width="120"
                        height="100"
                        rx="12"
                        stroke="currentColor"
                        strokeWidth="4"
                    />

                    {/* Server lines */}
                    <line x1="60" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="4" />
                    <line x1="60" y1="80" x2="140" y2="80" stroke="currentColor" strokeWidth="4" />

                    {/* Error X */}
                    <line x1="70" y1="110" x2="130" y2="150" stroke="currentColor" strokeWidth="4" />
                    <line x1="130" y1="110" x2="70" y2="150" stroke="currentColor" strokeWidth="4" />

                    {/* Status dot */}
                    <circle cx="140" cy="45" r="6" fill="currentColor" />
                </svg>

                {/* Texto */}
                <h1 className="text-6xl font-extrabold tracking-tight text-white">
                    500
                </h1>

                <p className="mt-3 text-xl font-semibold text-gray-200">
                    Server Error
                </p>

                <p className="mt-2 text-gray-400 text-sm">
                    Our server had a problem processing your request.
                </p>

                {/* CTA */}
                <button
                    onClick={reset}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
                >
                    <RefreshCcw size={16} />
                    Try again
                </button>
            </div>
        </div>
    )
}
