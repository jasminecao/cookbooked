import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Checkbox } from '@/components/Checkbox'
import { SubHeading } from '@/components/styles/Text'

 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Ingredients() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion className="w-1/2" open={open !== 1} icon={<Icon className="mx-0 px-0" id={1} open={open}/>}>
        <AccordionHeader className="text-black border-none py-0 my-0 flex" onClick={() => handleOpen(1)}>
            {/* <Icon className="mx-0 px-0" id={1} open={open}/> */}
            <SubHeading className="text-black mx-0 px-0">Ingredients</SubHeading>
        </AccordionHeader>
        <AccordionBody className="color-black font-normal text-base py-0 my-0">
            <div>
              <Checkbox>8-10 medium apples (thinly sliced)</Checkbox>
              <Checkbox>1 teaspoon salt</Checkbox>
              <Checkbox>4 tablespoons sugar</Checkbox>
              <Checkbox>2 sticks of butter, cut into small pieces</Checkbox>
              <Checkbox>3 cups all-purpose flour</Checkbox>
              <Checkbox>1/2 cup ice water</Checkbox>
              <Checkbox>1-2 teaspoons cinnamon</Checkbox>
              <Checkbox>1 egg white</Checkbox>
            </div>
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}