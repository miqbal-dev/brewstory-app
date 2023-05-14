import { List } from '@/app/interfaces/components'
import Link from 'next/link';

function List(props: List) {

  const { id, title, subtitle, date } = props;

  return (
    <li>
      <Link href={`/read/${id}`}>
        <h2 className='text-blue-primary dark:text-blue-secondary text-[22px] md:text-[28px] font-black hover:underline underline-offset-4'>{title}</h2>
        <time dateTime={date} className='text-sm mt-1'>{date}</time>
        <h3 className='text-base mt-2 hover:underline underline-offset-2'>{subtitle}</h3>
      </Link>
    </li>
  )
}

export default List