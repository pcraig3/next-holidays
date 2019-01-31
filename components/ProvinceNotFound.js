import BottomLink from './BottomLink'

export default ({ errorMessage }) => (
  <React.Fragment>
    <h1>Whoops</h1>
    <p>{`${errorMessage}`}</p>
    <BottomLink href={'/'} linkText={`Pick a real province.`} />
  </React.Fragment>
)
