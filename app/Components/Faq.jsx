import { list } from "../util/staticData";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle
} from "flowbite-react";

function Faq() {
  return (
    <div className="max-w-5xl px-3 mx-auto">
      <Accordion collapseAll>
        {list.map((item, index) => (
          <AccordionPanel key={index}>
            <AccordionTitle className="focus:ring-0">
              <p className="text-black">{item.title}</p>
            </AccordionTitle>
            <AccordionContent className="transition-all duration-300 ease-out">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                {item.body}
              </p>
            </AccordionContent>
          </AccordionPanel>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;
