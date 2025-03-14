import { cn } from '@/utils/cn'

const TopBar = ({ sticky }) => {
  return (
    <div
      className={cn(
        'top-nav fixed left-0 top-0 z-10 w-full origin-top bg-primary py-2 text-center transition-all duration-500',
        sticky ? ' scale-y-0' : 'scale-y-100',
      )}>
      <p className="font-medium text-white dark:text-paragraph max-lg:text-sm">WINNER - Best SEO Agency Award 2021</p>
    </div>
  )
}

export default TopBar
