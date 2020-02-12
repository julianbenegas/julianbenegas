import { useRef } from 'react'
import { MdSearch } from 'react-icons/md'

export default () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => inputRef?.current?.focus()

  const handleFocus = () => containerRef.current?.classList.add('isFocused')

  const handleBlur = () => containerRef.current?.classList.remove('isFocused')

  return (
    <div onClick={handleClick} ref={containerRef}>
      <i>
        <MdSearch />
      </i>
      <input
        type="search"
        id="search"
        ref={inputRef}
        onBlur={handleBlur}
        onFocus={handleFocus}
        autoComplete="off"
        placeholder="Search"
      />
      <style jsx>{`
        div {
          padding: 8px 10px;
          background: var(--background-color);
          border-radius: 6px;
          border: 1px solid var(--grey-4);
          display: flex;
          align-items: center;
          margin: 0 0 1.5rem;
          cursor: text;
        }
        i {
          color: var(--grey-4);
          font-size: var(--fs-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 5px;
          line-height: 1;
        }
        input {
          border: none;
          color: var(--grey-9);
          font-size: var(--fs-sm);
          line-height: 1;
          width: 100%;
          background: var(--background-color);
        }
        input::placeholder {
          color: var(--grey-5);
          font-size: var(--fs-sm);
        }
        input:focus {
          outline: none;
        }
        p {
          color: var(--grey-9);
          font-size: var(--fs-sm);
          line-height: 1;
        }
        div.isFocused {
          border: 1px solid var(--grey-6);
        }
        div.isFocused i {
          color: var(--grey-6);
        }
      `}</style>
    </div>
  )
}
