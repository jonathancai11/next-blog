import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 py-0.5 text-sm font-medium lowercase bg-gray-200 hover:text-white hover:bg-gray-800 rounded px-2">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
