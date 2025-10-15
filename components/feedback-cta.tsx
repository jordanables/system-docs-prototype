"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import { FeedbackForm } from "./feedback-form"

export function FeedbackCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <Button onClick={() => setIsFormOpen(true)} className="shadow-lg hover:shadow-xl transition-shadow" size="sm">
          <MessageSquare className="w-4 h-4 mr-2" />
          Feedback
        </Button>
      </div>
      <FeedbackForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  )
}
