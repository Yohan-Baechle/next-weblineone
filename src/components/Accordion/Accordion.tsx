interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion(props: AccordionProps) {
  const { items } = props;

  return (
    <>
      {items.map((item, index) => (
        <div key={index} className='collapse collapse-plus bg-base-200'>
          <input type='checkbox' name={`my-accordion-${index}`} defaultChecked={index === 0} />
          <div className='collapse-title text-xl font-medium'>
            {item.title}
          </div>
          <div className='collapse-content'>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </>
  );
}

