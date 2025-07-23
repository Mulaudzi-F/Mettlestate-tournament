"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ_DATA = [
  {
    id: "item-1",
    question: "How do I participate in the tournament?",
    answer:
      "Register using the form above and our team will contact you with further details.",
  },
  {
    id: "item-2",
    question: "What are the system requirements?",
    answer:
      "You need a PC capable of running the game at competitive settings (60+ FPS).",
  },
  {
    id: "item-3",
    question: "When will prizes be distributed?",
    answer:
      "Prizes will be distributed within 30 days after tournament completion.",
  },
];

export function FAQ() {
  return (
    <section className="container py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        {FAQ_DATA.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-left hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-400">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
