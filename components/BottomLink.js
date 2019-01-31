import Link from 'next/link'

export default ({ href, linkText }) => (
  <React.Fragment>
    <p>
      <Link href={href}>
        <a>{`${linkText}`}</a>
      </Link>
    </p>
    <style jsx>{`
      p {
        position: absolute;
        bottom: 0;
      }
    `}</style>
  </React.Fragment>
)
