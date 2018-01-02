import React, { Children } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const drawerWidth = 280

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  flex: {
    flex: 1,
  },
  title: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  }
})

const Header = ({
  title,
  open,
  fixed,
  handleDrawerOpen,
  onClick,
  children,
  classes
}) => (
  <div className={classes.root}>
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open,
      })}
      position={fixed ? 'fixed' : 'static'}
    >
      <Toolbar>
        <IconButton
          color="contrast"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          type="title"
          color="inherit"
          className={`${classes.flex} ${classes.title}`}
          onClick={onClick}
        >
          {title}
        </Typography>

        {children}
      </Toolbar>
    </AppBar>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  fixed: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
