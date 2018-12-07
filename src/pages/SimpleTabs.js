import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import SvgIcon from '@material-ui/core/SvgIcon';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  title: {
    marginRight: theme.spacing.unit * 5,
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <div position="static" className="tabs">
         <Tabs value={value} onChange={this.handleChange}>
           <Tab label="ACTIVITY" />
           <Tab label="PROFILE" />
           <Tab label="PUBLICATION" />
           <Tab label="FUNDS" />
         </Tabs>
        </div>
        {value === 0 && <TabContainer></TabContainer>}
        {value === 1 && <TabContainer></TabContainer>}
        {value === 2 && <TabContainer></TabContainer>}
        {value === 3 &&
         <TabContainer>
           <div className="tabcontent">
             <div className="tabcontent-title">
               <Typography className={classes.title} variant="body2" gutterBottom>
                 MANAGED FUNDS
               </Typography>
               <Badge badgeContent={3} color="secondary"></Badge>
             </div>
             <div className="tabcontent-items">
               <div className="tabcontent-item">
                 <span className="item-img"><img width="40" alt="LYXOR ETF" src="../images/lyxor_logo.png" /></span>
                 <div className="item-details">
                   <Typography variant="overline" gutterBottom>
                     Lyxor EUROS STOXX50 (DR)UCITIS ETF - Dist
                   </Typography>
                   <div className="synchro">
                     <SvgIcon>
                       <path fill="#2196f3" d="M2,2H11V11H2V2M9,4H4V9H9V4M22,13V22H13V13H22M15,20H20V15H15V20M16,8V11H13V8H16M11,16H8V13H11V16Z" />
                     </SvgIcon>
                     <Typography variant="caption" gutterBottom>
                       73% synchronization
                     </Typography>
                   </div>
                 </div>
                 <Typography variant="overline" gutterBottom>
                   MSE FP
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   FR0007054358
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   EUR
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   0.2%
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   6,961.0 M EUR
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   SICAV
                 </Typography>
               </div>
               <div className="tabcontent-item">
                 <span className="item-img"><img width="40" alt="LYXOR ETF" src="../images/lyxor_logo.png" /></span>
                 <div className="item-details">
                   <Typography variant="overline" gutterBottom>
                     Lyxor EUROS STOXX50 (DR)UCITIS ETF - Dist
                   </Typography>
                   <div className="synchro">
                     <SvgIcon>
                       <path fill="#2196f3" d="M2,2H11V11H2V2M9,4H4V9H9V4M22,13V22H13V13H22M15,20H20V15H15V20M16,8V11H13V8H16M11,16H8V13H11V16Z" />
                     </SvgIcon>
                     <Typography variant="caption" gutterBottom>
                       73% synchronization
                     </Typography>
                   </div>
                 </div>
                 <Typography variant="overline" gutterBottom>
                   MSE FP
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   FR0007054358
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   EUR
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   0.2%
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   6,961.0 M EUR
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   SICAV
                 </Typography>
               </div>
               <div className="tabcontent-item">
                 <span className="item-img"><img width="40" alt="LYXOR ETF" src="../images/lyxor_logo.png" /></span>
                 <div className="item-details">
                   <Typography variant="overline" gutterBottom>
                     Lyxor EUROS STOXX50 (DR)UCITIS ETF - Dist
                   </Typography>
                   <div className="synchro">
                     <SvgIcon>
                       <path fill="#2196f3" d="M2,2H11V11H2V2M9,4H4V9H9V4M22,13V22H13V13H22M15,20H20V15H15V20M16,8V11H13V8H16M11,16H8V13H11V16Z" />
                     </SvgIcon>
                     <Typography variant="caption" gutterBottom>
                       73% synchronization
                     </Typography>
                   </div>
                 </div>
                 <Typography variant="overline" gutterBottom>
                   MSE FP
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   FR0007054358
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   EUR
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   0.2%
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   6,961.0 M EUR
                 </Typography>
                 <Typography variant="overline" gutterBottom>
                   SICAV
                 </Typography>
               </div>
             </div>
           </div>
         </TabContainer>
       }
     </div>
   );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
