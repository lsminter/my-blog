import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '@eggheadio/gatsby-theme-egghead-blog/src/components/Theming'
import ThemeToggler from '@eggheadio/gatsby-theme-egghead-blog/src/components/Header/ThemeToggler'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="/code" activeClassName="active" aria-label="View blog page">
        Code
      </Link>
      <Link to="/about" activeClassName="active" aria-label="View blog page">
        About
      </Link>
      <Link to="/thoughts" activeClassName="active" aria-label="View blog page">
        Thoughts
      </Link>
      <Link to="/irl" activeClassName="active" aria-label="View blog page">
        IRL
      </Link>


      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
