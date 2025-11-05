"use client"

import * as React from "react"

type AccordionItemProps = {
  value: string
  trigger: React.ReactNode
  content: React.ReactNode
}

type AccordionProps = {
  items: AccordionItemProps[]
  defaultValue?: string
}

export function Accordion({ items, defaultValue }: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(defaultValue || null)

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.value}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          <button
            onClick={() => setOpenItem(openItem === item.value ? null : item.value)}
            className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex-1">{item.trigger}</div>
            <svg
              className={`w-6 h-6 text-accent-orange transition-transform duration-300 flex-shrink-0 ${
                openItem === item.value ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openItem === item.value ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export type { AccordionItemProps }
