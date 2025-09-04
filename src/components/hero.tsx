"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner"
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Hero() {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = (): boolean => {
    return !!(formData.name && formData.email && formData.subject && formData.message);
  }

  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) {
      toast('Please fill in all required fields or try again later.')
      return
    }

    try {
      const response = await fetch('https://formspree.io/f/xeolpedn', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        toast('Your message has been sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Network response was not ok')
      }
    } catch (error) {
      console.error('Submit error:', error);
      toast('Please fill in all required fields or try again later.')
    }
  }

  return (
    <section className="pt-22 pb-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="flex justify-center gap-8">
        <div className="flex items-center justify-center">
          <img
            src={"/picture.webp"}
            className="rounded-full w-40 h-40 shrink-0"
          />
        </div>
        <div className="max-w-4xl">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 text-balance text-left">
            Hi, I am Angelo Miguel Cruz
          </h1>
          <p className="text-md sm:text-2xl text-muted-foreground mb-4 text-pretty max-w-2xl text-left">
            A passionate web developer crafting clean, functional web experiences with modern technologies.
          </p>

          <div className="flex justify-left gap-4 items-center">
            <div className="flex gap-2 font-semibold">
              <div className="flex md:hidden">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <MapPin className="hover:scale-115 transition-transform duration-200 ease-in-out " />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span className="font-bold">Manila, Philippines</span>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="hidden md:flex md:gap-2">
                <MapPin />
                <span >Manila, Philippines</span>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild className="cursor-pointer hover:scale-115 transition-transform duration-200 ease-in-out">
                <Mail />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Send me a message</DialogTitle>
                  <DialogDescription>
                    Want to collaborate or ask a question? Don&apos;t hesitate to email me here.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <label htmlFor="name">Name *</label>
                    <input id="name" name="name" placeholder="Name" required className="border-foreground border-1 rounded p-2"
                      value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div className="grid gap-3">
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" placeholder="Email" required className="border-foreground border-1 rounded p-2"
                      value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div className="grid gap-3">
                    <label htmlFor="subject">Subject *</label>
                    <input id="subject" name="subject" placeholder="e.g., Job Opportunity, Collaboration, etc." required className="border-foreground border-1 rounded p-2"
                      value={formData.subject} onChange={handleInputChange} />
                  </div>
                  <div className="grid gap-3">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" required className="border-foreground border-1 rounded p-2" placeholder="Tell me about the opportunity or project you have in mind..."
                      value={formData.message} onChange={handleInputChange} />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button type="submit" onClick={handleSubmit}>Send Message</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <a href="https://github.com/Angelo-Miguel-E-Cruz" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="hover:scale-115 transition-transform duration-200 ease-in-out" />
            </a>
            <a href="https://linkedin.com/in/angelo-miguel-cruz" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} className="hover:scale-115 transition-transform duration-200 ease-in-out" />
            </a>
          </div>
        </div>
      </div >
    </section >
  )
}
