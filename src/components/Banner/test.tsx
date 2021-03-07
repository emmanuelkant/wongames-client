import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from './'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy Death',
  subtitle: '<p>Play the new <strong>CrasLands</strong> season</p>',
  buttonLabel: 'Buy Now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(screen.getByRole('img', { name: /Defy Death/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Defy Death/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Play the new CrasLands season/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})