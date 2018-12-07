import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SimpleTabs from './SimpleTabs';
import PrimarySearchAppBar from './PrimarySearchAppBar';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  blueIcon: {
    backgroundColor: "#2196f3",
    width: '1.3em',
    height: '1.3em',
    padding: '6px',
  }
});

class Index extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <PrimarySearchAppBar />

        <main>
          <div className="wrapper">
            <div className="profil-edito">
              <Avatar alt="Yini LAURIOT" src="../images/Yini_Lauriot.jpg" />
              <Typography variant="h6" color="inherit" noWrap>
                Lauriot Boudoin
              </Typography>
              <SvgIcon className={classes.blueIcon}>
                <path fill="#fff" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
              </SvgIcon>
              <Typography variant="caption" gutterBottom>
                Portfolio manager
              </Typography>
              <SvgIcon className={classes.blueIcon}>
                <path fill="#fff" d="M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z" />
              </SvgIcon>
              <Typography variant="caption" gutterBottom>
                LYXOR ETF
              </Typography>
            </div>
            <SimpleTabs />
          </div>
        </main>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
