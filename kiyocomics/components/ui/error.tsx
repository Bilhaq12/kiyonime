import { AlertCircle } from "lucide-react"

interface ErrorProps {
  message: string
}

export function Error({ message }: ErrorProps) {
  return (
    <div
      className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
      role="alert"
    >
      <AlertCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
      <span className="sr-only">Error</span>
      <div>
        <span className="font-medium">Error:</span> {message}
      </div>
    </div>
  )
}

