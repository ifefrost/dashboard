import {
  AccordionList,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@tremor/react";

const Help = () => {
  return (
    <div className='mx-auto container pe-4 lg:pe-0'>
      <div>
        <p className='text-lg text-lime-600 uppercase font-semibold'>FAQ</p>
        <h1 className='lg:text-5xl text-2xl font-bold lg:leading-loose'>
          We&apos;re here to help
        </h1>
        <p className='text-lg'>
          Here&apos;s what you need to know about this Dashboard
        </p>
        <button
          className='bg-lime-600 hover:bg-lime-700 text-white py-2 px-4 mt-3 rounded-md'
          onClick={() => (window.location = "mailto:john.ladipo@hotmail.com")}
        >
          Contact
        </button>
      </div>
      <AccordionList className='mt-10 shadow-none rounded-b-none'>
        <Accordion className="border-0 border-b text-left">
          <AccordionHeader className="font-semibold">
            What is the purpose of this Dashboard?
          </AccordionHeader>
          <AccordionBody>
            <p className="text-base">
              This Dashboard is a demo of a Dashboard that I can build for you.
              It&apos;s a work in progress, since I constantly improve upon it
              with new ideas and concepts I come up with. I&apos;m always
              looking for new ways to improve the Dashboard, so if you have any
              ideas, please let me know! You can contact me by clicking the
              Contact button above.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion className="border-0 border-b text-left">
          <AccordionHeader className="font-semibold">
            How can I get a Dashboard like this?
          </AccordionHeader>
          <AccordionBody>
            <p className="text-base">
              You can contact me by clicking the Contact button above. I&apos;ll
              be happy to discuss your needs and how I can help you.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion className="border-0 border-b text-left">
          <AccordionHeader className="font-semibold">
            How much does a Dashboard like this cost?
          </AccordionHeader>
          <AccordionBody>
            <p className="text-base">
              The cost of a Dashboard like this depends on your needs. You can contact me by clicking the Contact button above. I&apos;ll be happy to discuss your needs and how I can help you.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion className="border-0 border-b text-left">
          <AccordionHeader className="font-semibold">
            How long does it take to build a Dashboard like this?
          </AccordionHeader>
          <AccordionBody>
            <p className="text-base">
              The time it takes to build a Dashboard like this depends on your needs. You can contact me by clicking the Contact button above. I&apos;ll be happy to discuss your needs and how I can help you.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion className="border-0 border-b text-left">
          <AccordionHeader className="font-semibold">
            What technologies are used to build this Dashboard?
          </AccordionHeader>
          <AccordionBody>
            <p className="text-base">
              This Dashboard is built with React, Tailwind CSS, and Tremor.
            </p>
          </AccordionBody>
        </Accordion>
      </AccordionList>
    </div>
  );
};

export default Help;
