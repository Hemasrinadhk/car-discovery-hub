import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is a Skipper?",
    a: "A Skipper is a verified host who delivers the car to your chosen location so you can test drive it without visiting a dealership.",
  },
  {
    q: "How much does a test drive cost?",
    a: "Test drives are completely free for buyers. We want you to love the car before you buy it.",
  },
  {
    q: "What cities do you serve?",
    a: "We currently serve Austin, Dallas, San Antonio, Houston, and Irving in Texas, with plans to expand to more cities soon.",
  },
  {
    q: "How do I sell my car on CarSkipper?",
    a: "Simply enter your car's VIN or license plate number, add photos and details, set your price, and we'll list it on our marketplace. A Skipper will handle test drives for potential buyers.",
  },
  {
    q: "Are the vehicles inspected?",
    a: "Yes, all vehicles listed on CarSkipper go through a verification process. We recommend buyers also get an independent inspection before purchase.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-6"
            >
              <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
