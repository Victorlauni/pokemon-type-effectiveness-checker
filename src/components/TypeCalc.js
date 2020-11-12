import { Button, Container, Grid, SvgIcon, makeStyles } from '@material-ui/core'
import typeChart from '../json/type'
import React, { Component, useEffect, useState } from 'react'

const useStyle = makeStyles((theme) => ({
  gridCon: {
    display: 'flex',
    flexDirection: 'column'
  },
  typeIcon: {
    height: '20px'
  },
  typeButton: {
    margin: '5px',
    boxSizing: 'border-box',
    border: '1px solid #0006',
    [theme.breakpoints.down('sm')]: {
      margin: "2px",
      padding: "1px"
    }
  },
  typeField: {
    margin: '5px',
    color: '#000 !important',
    [theme.breakpoints.down('sm')]: {
      margin: "2px",
      padding: "1px"
    }
  },
  defendEff: {
    position: 'relative',
    borderColor: 'red !important',
    "&:after": {
      content: '"2x"',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      backgroundColor: '#F005',
      opacity: 0.6,
      textAlign: 'right',
      paddingRight: '5px',
      boxSizing: 'border-box'
    },
  },
  defendSuperEff: {
    position: 'relative',
    borderColor: 'red !important',
    "&:after": {
      content: '"4x"',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      backgroundColor: '#F00A',
      opacity: 0.6,
      textAlign: 'right',
      paddingRight: '5px',
      boxSizing: 'border-box'
    },
  },
  defendNoEff: {
    position: 'relative',
    borderColor: 'black !important',
    "&:after": {
      content: '"0x"',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      backgroundColor: '#0005',
      opacity: 0.6,
      textAlign: 'right',
      paddingRight: '5px',
      boxSizing: 'border-box'
    },
  },
  defendWeak: {
    position: 'relative',
    borderColor: 'green !important',
    "&:after": {
      content: '"0.5x"',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      backgroundColor: '#0F05',
      opacity: 0.6,
      textAlign: 'right',
      paddingRight: '5px',
      boxSizing: 'border-box'
    },
  },
  defendSuperWeak: {
    position: 'relative',
    borderColor: 'green !important',
    "&:after": {
      content: '"0.25x"',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      backgroundColor: '#0F0A',
      opacity: 0.6,
      textAlign: 'right',
      paddingRight: '5px',
      boxSizing: 'border-box'
    },
  },
  attackEff: {
    position: 'relative',
    borderColor: 'green !important',
    "&:after": {
      content: '"2x"',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      backgroundColor: '#0F05',
      opacity: 0.6,
      textAlign: 'left',
      paddingLeft: '5px',
      boxSizing: 'border-box'
    },
  },
  attackSuperEff: {
    position: 'relative',
    borderColor: 'green !important',
    "&:after": {
      content: '"4x"',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      backgroundColor: '#0F0A',
      opacity: 0.6,
      textAlign: 'left',
      paddingLeft: '5px',
      boxSizing: 'border-box'
    },
  },
  attackNoEff: {
    position: 'relative',
    borderColor: 'black !important',
    "&:after": {
      content: '"0x"',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      backgroundColor: '#0005',
      opacity: 0.6,
      textAlign: 'left',
      paddingLeft: '5px',
      boxSizing: 'border-box'
    },
  },
  attackWeak: {
    position: 'relative',
    borderColor: 'red !important',
    "&:after": {
      content: '"0.5x"',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      backgroundColor: '#F005',
      opacity: 0.6,
      textAlign: 'left',
      paddingLeft: '5px',
      boxSizing: 'border-box'
    },
  },
  attackSuperWeak: {
    position: 'relative',
    borderColor: 'red !important',
    "&:after": {
      content: '"0.25x"',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      fontSize: '1.5em',
      backgroundColor: '#0F0A',
      opacity: 0.6,
      textAlign: 'left',
      paddingLeft: '5px',
      boxSizing: 'border-box'
    },
  },
  activeButton: {
    borderLeft: '5px solid',
    borderRight: '5px solid',

  }
}))

export default function TypeCalc(props) {
  const { mode } = props;
  const classes = useStyle();
  const [selectedType, setSelectedType] = useState(new Set([]));

  useEffect(() => {
    setSelectedType(new Set([]));
  },[mode])

  const defendLevelToClass = (level) => {
    if (level <= 0) return classes.defendNoEff;
    if (level >= 4) return classes.defendSuperEff;
    if (level >= 2) return classes.defendEff;
    if (level <= 0.25) return classes.defendSuperWeak;
    if (level <= 0.5) return classes.defendWeak;
  }

  const getDefendEff = (type) => {
    let eff = 1;
    Object.entries(typeChart).filter(val => selectedType.has(val[0])).forEach(val => {
      if (val[1].defend.effective.includes(type)) {
        eff /= 2;
      }
      if (val[1].defend.weakness.includes(type)) {
        eff *= 2
      }
      if (val[1].defend.no_effect.includes(type)) {
        eff *= 0;
      }
    })
    return eff;
  }

  const attackLevelToClass = (level) => {
    if (level <= 0) return classes.attackNoEff;
    if (level >= 4) return classes.attackSuperEff;
    if (level >= 2) return classes.attackEff;
    if (level <= 0.25) return classes.attackSuperWeak;
    if (level <= 0.5) return classes.attackWeak;
  }

  const getAttackEff = (type) => {
    let eff = 1;
    Object.entries(typeChart).filter(val => selectedType.has(val[0])).forEach(val => {
      if (val[1].attack.effective.includes(type)) {
        eff *= 2;
      }
      if (val[1].attack.weakness.includes(type)) {
        eff /= 2
      }
      if (val[1].attack.no_effect.includes(type)) {
        eff *= 0;
      }
    })
    return eff;
  }

  const handleTypeSelect = (type) => (event) => {
    if (selectedType.has(type)) {
      const newSelectedType = new Set(selectedType);
      newSelectedType.delete(type);
      setSelectedType(newSelectedType);
    }
    else {
      if (selectedType.size > 1) return
      if (selectedType.size > 0 && mode==0) {
        setSelectedType(new Set([type]))
        return
      }
      const newSelectedType = new Set(selectedType);
      newSelectedType.add(type);
      setSelectedType(newSelectedType)
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} className={classes.gridCon}>
        {Object.entries(typeChart).map(val => (
          <Button disableRipple={mode==1} disabled={mode==1}
            key={val[0]}
            variant='outlined'
            className={mode==1 ?`${classes.typeField} ${defendLevelToClass(getDefendEff(val[0]))}`: `${classes.typeButton} ${selectedType.has(val[0])? classes.activeButton: ""}`}
            onClick={handleTypeSelect(val[0])}
            startIcon={<img className={classes.typeIcon} 
            src={val[1].icon.default}/>}
          >
            {val[1].ch_name}
          </Button>))}
      </Grid>
      <Grid item xs={6} className={classes.gridCon}>
        {Object.entries(typeChart).map((val) => (
          <Button disableRipple={mode==0} disabled={mode==0}
            key={val[0]}
            variant='outlined' 
            className={mode==0 ?`${classes.typeField} ${attackLevelToClass(getAttackEff(val[0]))}`: `${classes.typeButton} ${selectedType.has(val[0])? classes.activeButton: ""}`}
            onClick={handleTypeSelect(val[0])} 
            startIcon={<img className={classes.typeIcon} 
            src={val[1].icon.default}/>}>
            {val[1].ch_name}
          </Button>))}
      </Grid>
    </Grid>
  )
}
