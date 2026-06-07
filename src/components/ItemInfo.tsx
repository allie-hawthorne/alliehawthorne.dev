import { PropsWithChildren } from "react";

interface ItemInfoProps {
  name: string
  year: number
  tags: string[]
  description: string[]
}
export const ItemInfo = ({description, name, year, tags}: ItemInfoProps) => <div className="flex flex-col gap-2">
  <div className='flex justify-between items-center'>
    <p className='text-2xl'>{name}</p>
    <p className='font-sans text-white opacity-80 italic'>{year}</p>
  </div>
  <div className="flex gap-2 whitespace-nowrap overflow-auto">
    {tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
  </div>
  {description.map((paragraph, i) => <p className='text-white font-sans' key={i}>{paragraph}</p>)}
</div>

const Tag = ({children}: PropsWithChildren) => <p className="bg-pink-300/80 text-black text-xs rounded-xl px-2 py-0.5">{children}</p>;
