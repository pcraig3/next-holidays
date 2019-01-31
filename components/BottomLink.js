export default ({ href, linkText }) => (
  <React.Fragment>
    <p>
      <a href={href}>{`${linkText}`}</a>
    </p>
    <style jsx>{`
      p {
        position: fixed;
        bottom: 0;
      }
    `}</style>
  </React.Fragment>
)
