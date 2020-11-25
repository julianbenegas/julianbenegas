interface Props {
  src: string
  alt: string
  caption: string
  width?: string
  height?: string
}

const Screenshot = (
  {
    src,
    alt,
    caption,
    width = '100%',
    height = 'auto'
  }: Props
) => {
  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
      <style jsx>{`
        figure {
          width: ${width};
          height: ${height};
          max-height: 100vh;
          max-width: 100vh;
          margin: 1.5rem 0;
        }
        img {
          color: var(--grey-9);
          line-height: var(--lh-normal);
          width: 100%;
          height: 100%;
          object-fit: cover;
          box-shadow: var(--bs-lg);
          margin-bottom: 0.25rem;
        }
        figcaption {
          text-align: center;
          font-size: var(--fs-xs);
          color: var(--grey-6);
        }
      `}</style>
    </figure>
  )
};

export default Screenshot;
