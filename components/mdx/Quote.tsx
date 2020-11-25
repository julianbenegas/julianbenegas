import { ReactNode } from 'react'

const Quote = ({ children }: { children: ReactNode }) => <blockquote>
  {children}
  <style jsx>{`
    blockquote {
      color: red;
      border-left: 4px solid var(--teal-3);
      padding-left: 20px;
      margin-left: 20px;
      margin: 30px 20px;
      font-size: var(--fs-lg);
      font-style: italic;
    }
  `}</style>
</blockquote>;

export default Quote;
