"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const EMAIL = "robertg1@usc.edu"

export function CopyEmailButton({
  label = "Email",
  className,
}: {
  label?: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      return
    }
    setCopied(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <button type="button" onClick={handleCopy} className={className}>
      {copied ? `Copied! ${EMAIL}` : label}
    </button>
  )
}
