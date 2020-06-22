import React, { useState } from "react";
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
  root: {
    minWidth: '100%',
    marginTop: '2em',
    padding: '1em 1em',
    minHeight: '60vh',
  },
});

const useStylesCard = makeStyles({
  root: {
    maxWidth: 400,
  },
  title: {
    fontSize: 20,
    padding: '1em',
    marginbottom: '1em'
  },
  content: {
    padding: '1em',
    wordWrap: 'break-word',
  },
  pos: {
    marginBottom: 12,
  },
});



export default function Page() {
  const classes = useStyles();
  const cardClasses = useStylesCard();
  const [search, setSearch] = useState('')
  const [results, setResults] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const searchByBan = (e, search) => {
    e.preventDefault()
    setIsLoading(true)
    const customerInfo = `http://local.telus.com:4000/billing-accounts/search`
    fetch(customerInfo, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        banOrEmail: `${search}`
      })
    })
      .then(data => data.json())
      .then(async (data) => {
        setIsLoading(false)
        // const currenthistory = await JSON.parse(window.localStorage.getItem('history'))
        // console.log("searchByBan -> currenthistory", currenthistory)
        console.log("searchByBan -> window.globalState", window.globalState)
        window.globalState.push(data.data[0].billingAcctNum)
        // console.log("searchByBan -> currenthistory", currenthistory)

        // await window.localStorage.setItem('history', JSON.stringify([`${currenthistory}`]))
        setResults(data)
      })
      .catch(err => console.error(err))
  }



  return (
    <Grid container>
      <Grid item xs={3}> 
        <form noValidate autoComplete="off">
          <Paper style={{ borderRight: '1px solid black' }} item className={classes.root}>
            <TextField onChange={(e) => setSearch(e.target.value)} style={{ minWidth: '100%'}} id="outlined-basic" label="Search by BAN" variant="outlined" />
            <Button type="submit" style={{ marginTop: '2em', float: 'right' }} variant="contained" onClick={(e) => searchByBan(e, search)} color="primary">
              Search
            </Button>
          </Paper>
        </form>
      </Grid>
      <Grid item xs={9}>
          <Paper className={classes.root}>
          <Card className={cardClasses.root}>
            <Typography className={cardClasses.title} color="textSecondary" gutterBottom>
              { isLoading && 
                <Skeleton height={40} variant="text" />
              }
              {!isLoading && results && results.data[0].billingAccountName}  
            </Typography>
            <CardContent className={cardClasses.content}>
              { isLoading && 
                <Skeleton height={200} variant="rect" /> }

                { !isLoading && results && 
                  <div>
                  <Typography variant="body2" gutterBottom>
                     Status: {results.data[0].billingAcctStatus}
                 </Typography>
                 <Typography variant="body2" gutterBottom>
                     Type: {results.data[0].billingAcctType}
                 </Typography>
                 <Typography variant="body2" gutterBottom>
                  Address: {results.data[0].billingAddress}
                 </Typography>
                 <Typography variant="body2" gutterBottom>
                  Contact Email: {results.data[0].customerPrimaryContactEmail}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  Contact Phone: {results.data[0].contactCellPhone}
                 </Typography>
                  </div>
                }
            </CardContent>
          </Card>
          </Paper>
      </Grid>
    </Grid>
  );
}
