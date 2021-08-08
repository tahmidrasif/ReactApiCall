import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import gear from './Gear.gif';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React, { Component, useEffect, useState } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useParams
} from "react-router-dom";

import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import ProductCreate from './ProductCreate';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const history = useHistory();

  const [singleProduct, setSingleProduct] = useState(null);
  const [productId, setProductId] = useState(null)
  const [showLoader, setShowLoader] = useState(false);

  const selectProduct = (id) => {
    //setShowLoader(true)
    //setSingleProduct({ ...singleProduct, singleProduct: item })
    setProductId(id)
    history.push('/product-details/' + id)
    //console.log(id, '====productId')


  }


  const editProduct = (editProduct) => {
    //setShowLoader(true)
    setSingleProduct( editProduct )
    //setProductId(id)
    
    history.push('/product-edit/' + editProduct.id)
    console.log(editProduct, '====productId')


  }
  console.log(singleProduct,'===edit')

  const toggleLoader=(visible)=>{
    console.log(visible,'===toggle')
    //setShowLoader(true)
    //  visible?setShowLoader(true):setShowLoader(false)
  }
  //console.log(history)
  const showListPage = () => {
    //setShowLoader(true)
    setProductId(null)
    history.push('/')

  }

  useEffect(() => {
    console.log('in app.js useeffect')
    //setShowLoader(false)
    // setTimeout(function () { //Start the timer
    //   setShowLoader(false)
    // }.bind(this), 3000)
  }, [])

  // const [productList, setProduct] = useState([
  //   { id: 1, prodName: 'Laptop', price: 100, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
  //   { id: 2, prodName: 'Pc', price: 200, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
  //   { id: 3, prodName: 'Mobile', price: 300, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
  //   { id: 4, prodName: 'Laptop', price: 100, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
  //   { id: 5, prodName: 'Pc', price: 200, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
  //   { id: 6, prodName: 'Mobile', price: 300, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
  //   { id: 7, prodName: 'Laptop', price: 100, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
  //   { id: 8, prodName: 'Pc', price: 200, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },
  //   { id: 9, prodName: 'Mobile', price: 300, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' },

  // ]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography style={{ marginRight: 16 }}>
            {/* <Link    to='/' >Home</Link> */}
            <Button color='inherit' component={Link} to='/' >
              Home
            </Button>
          </Typography>
          <Typography style={{ marginRight: 16 }}>
            <Button color='inherit' component={Link} to='/create-product' >
              Create Product
            </Button>
          </Typography>


        </Toolbar>
      </AppBar>

      {
        <Switch>
          <Route exact path='/'>
            {
              showLoader === true ?
                <div style={{ top: '50%' }, { left: '50%' }, { position: 'absolute' }}>
                  <img src={gear} />
                </div> :

                <ProductList classes={classes} toggleLoader={toggleLoader} selectProduct={selectProduct} />
              // <ProductListFn products={productList} selectProduct={selectProduct} />
            }
          </Route>
          <Route exact path='/product-list' render={() => <Redirect exact to='/' />} />

          <Route exact path='/product-details/:id'>
            {
              showLoader === true ?
                <div style={{ top: '50%' }, { left: '50%' }, { position: 'absolute' }}>
                  <img src={gear} />
                </div> :
                <ProductDetails classes={classes} editProduct={editProduct} />
              // <ProductDetailsFn products={productList} showListPage={showListPage} />
            }
          </Route>

          <Route exact path='/product-edit/:id'>
            {
              showLoader === true ?
                <div style={{ top: '50%' }, { left: '50%' }, { position: 'absolute' }}>
                  <img src={gear} />
                </div> :
               <ProductCreate classes={classes} selectProduct={singleProduct} />
              // <ProductDetailsFn products={productList} showListPage={showListPage} />
            }
          </Route>

          <Route exact path='/create-product'>
            {
              showLoader === true ?
                <div style={{ top: '50%' }, { left: '50%' }, { position: 'absolute' }}>
                  <img src={gear} />
                </div> :
                <ProductCreate classes={classes} />
              // <ProductDetailsFn products={productList} showListPage={showListPage} />
            }
          </Route>

          <Route path='*'>
            <p>404 Not Found</p>
          </Route>
        </Switch>
      }
      {/* */}

    </div>
  );
}

export default App;


