interface ItemInfoProps {
  name: string
  year: number
  description: string[]
}
export const ItemInfo = ({description, name, year}: ItemInfoProps) => <>
  <div className='flex justify-between items-center'>
    <p className='text-2xl'>{name}</p>
    <p className='font-sans text-white opacity-80 italic'>{year}</p>
  </div>
  {description.map((paragraph, i) => <p className='text-white font-sans' key={i}>{paragraph}</p>)}
</>;
