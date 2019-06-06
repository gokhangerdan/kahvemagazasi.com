import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ItemCard from './ItemCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 50,
    alignContent: 'center',
  },
}));

export default function MatketItems() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ItemCard image={'https://media3.tchibo-content.de/newmedia/art_img/MAIN_HD/ff16971b15e86f24/barista-espresso-500g-cekirdek-kahve.jpg'}
                    name={'Barista Espresso Çekirdek Kahve 500g'}
                    description={'Bitter Aromalı & Yumuşak Gövdeli'}
                    id={'1030114'}
                    price={'64,95 TL'}
                    checkedStatus={true}/>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ItemCard image={'https://media3.tchibo-content.de/newmedia/art_img/MAIN/f1f2830aa5e86f24/barista-caffe-crema-500g-cekirdek.jpg'}
                    name={'Barista Caffè Crema, Çekirdek Kahve 500g'}
                    description={'Meyvemsi & Elegan & Fındık Notalı'}
                    id={'1030115'}
                    price={'64,95 TL'}
                    checkedStatus={false}/>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ItemCard image={'https://media2.tchibo-content.de/newmedia/art_img/MAIN-IMPORTED/541e30dd5e9de95/espresso-sicilia-500g-cekirdek-kahve.jpg'}
                    name={'Espresso Sicilia Style'}
                    description={'Güçlü & Koyu Notalı & Dolgun Gövdeli'}
                    id={'1030116'}
                    price={'32,95 TL'}
                    checkedStatus={false}/>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ItemCard image={'https://media3.tchibo-content.de/newmedia/art_img/MAIN-IMPORTED/1a5445cf0b0dca81/blackn-white-ogutulmus-filtre-kahve-2x250g.jpg'}
                    name={"Black'N White Öğütülmüş Filtre Kahve 2X250g"}
                    description={"Dolgun ve dengeli aroma"}
                    id={'1030117'}
                    price={'49,95 TL'}
                    checkedStatus={false}/>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ItemCard image={'https://media2.tchibo-content.de/newmedia/art_img/MAIN_HD/f294471aa9d9df24/privat-kaffee-brazil-mild-paket-filtre-kahve-500g.jpg'}
                    name={'Privat Kaffee Brazil Mild Öğütülmüş Filtre Kahve'}
                    description={'Çok Yumuşak İçimli & Dolgun Gövdeli (Çekirdek)'}
                    id={'1030118'}
                    price={'32,95 TL'}
                    checkedStatus={false}/>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ItemCard image={'https://media2.tchibo-content.de/newmedia/art_img/MAIN/b001406b1b032c43/guatemala-grande-paket-filtre-kahve-500g.jpg'}
                    name={'Privat Kaffee Guatemala Grande Öğütülmüş Filtre Kahve'}
                    description={'Yumuşak İçimli & Kuvvetli (Çekirdek)'}
                    id={'1030119'}
                    price={'32,95 TL'}
                    checkedStatus={false}/>
        </Grid>
      </Grid>
    </div>
  );
}