import { Dispatch, HTMLAttributes, PropsWithChildren, SetStateAction } from "react";

export interface TagState {
  filterTag: string
  setFilterTag: Dispatch<SetStateAction<string>>
}

interface TagsProps extends TagState {
  tags: string[]
}

interface BaseItemInfoProps {
  name: string
  year: number
  description: string[]
}

type ItemInfoProps = BaseItemInfoProps | (BaseItemInfoProps & TagsProps)
export const ItemInfo = ({description, name, year, ...tagState}: ItemInfoProps) => <div className="flex flex-col gap-2">
  <div className='flex justify-between items-center'>
    <p className='text-2xl'>{name}</p>
    <p className='font-sans text-white opacity-80 italic'>{year}</p>
  </div>
  <div className="flex gap-2 whitespace-nowrap overflow-auto">
    {'tags' in tagState && tagState.tags.map((tag, i) => <ProjectTag key={i} {...tagState} tag={tag}>
    </ProjectTag>)}
  </div>
  {description.map((paragraph, i) => <p className='text-white font-sans' key={i}>{paragraph}</p>)}
</div>

const ProjectTag = ({filterTag, setFilterTag, tag}: TagState & {tag: string}) => {
  const isSelected = filterTag === tag;
  const bgColor = isSelected ? 'bg-pink-400' : 'bg-pink-300';
  return <Tag className={bgColor} onClick={() => setFilterTag(isSelected ? '' : tag)}>{tag}</Tag>
}

const Tag = ({children, className, ...props}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) => (
  <div className={`text-black text-xs rounded-xl px-2 py-0.5 cursor-pointer opacity-80 hover:opacity-60 duration-300 whitespace-nowrap ${className}`} {...props}>{children}</div>
);
