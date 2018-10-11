import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles';

type Props = {
  history: Array<any>,
  classes: any,
  stepChanged: Function,
  dec: Function,
  inc: Function,
  incAsync: Function,
  counter: { step: number, number: number }
}

function Counter({
  classes, counter, stepChanged, dec, inc, incAsync, history,
}: Props) {
  return (
    <div className={classes.counter}>
      <h1>{counter.number}</h1>
      <FormControl>
        <Input type="number" onChange={stepChanged} value={counter.step}/>
      </FormControl>
      <Button variant={'contained'} color="primary" onClick={dec}>Dec</Button>
      <Button variant={'outlined'} color="primary" onClick={inc}>Inc</Button>
      <Button variant={'outlined'} color="primary" onClick={incAsync}>Inc Async</Button>
      <div>
        <Button onClick={() => history.push('/form')} variant={'outlined'} color={'secondary'}>
          Form
        </Button>
        <Button size={'small'}>
          <SearchIcon/>
        </Button>
      </div>
    </div>
  );
}

export default withStyles(styles)(withRouter(Counter));
