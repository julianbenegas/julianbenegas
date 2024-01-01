import type icon from '@radix-ui/react-icons'
import type { IconProps } from '@radix-ui/react-icons/dist/types'

const localIcons = {
  X: () => (
    <svg
      viewBox="0 0 21.57 19.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-3 h-3 flex"
    >
      <path
        d="M16.99 0h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L3.736 19.5H.426l7.73-8.835L0 0h6.826l4.713 6.231L16.99 0Zm-1.161 17.52h1.833L5.83 1.876H3.863L15.829 17.52Z"
        fill="currentColor"
      />
    </svg>
  ),
}

export const DynamicIcon = async ({
  name,
  props,
}: {
  name: keyof typeof icon | keyof typeof localIcons
  props?: IconProps
}) => {
  const icons = await import('@radix-ui/react-icons')
  const Icon =
    icons[name as keyof typeof icon] ??
    localIcons[name as keyof typeof localIcons]

  return (
    <>
      <Icon {...props} />
    </>
  )
}
