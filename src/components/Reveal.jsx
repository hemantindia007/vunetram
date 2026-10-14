import useInView from '../hooks/useInView'

/**
 * Wraps children and animates them into view on scroll.
 * props:
 *  - as: element/tag to render (default 'div')
 *  - delay: ms delay before the animation starts
 *  - y: initial vertical offset in px (default 24)
 *  - className: extra classes
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  y = 24,
  className = '',
  children,
  ...rest
}) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
