import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { useHistory, useLocation, useParams } from "react-router-dom";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import {productDetailsAction,requestProdctDetails } from './store/action/productDetailsAction'


const ProductDetails = ({ classes,editProduct }) => {

    //const [singleProduct,setSingleProduct]=useState({});
    const params= useParams();
    const history=useHistory();
    const dispatch=useDispatch();
    const {currentProduct}=useSelector((store)=>store.productDetailsReducer)
    //console.log(params.id, '===param.id')
   
   
    const gridClick=()=>{
        console.log('grid clicked')
    }

    useEffect(()=>{
        dispatch(requestProdctDetails(params.id))
        // axios.get('https://fakestoreapi.com/products/'+params.id).then(
        //     response => {
        //       console.log(response.data, '===response single    ')
        //       //setSingleProduct(response.data)
        //       dispatch(productDetailsAction(response.data))
        //       //toggleLoader(false);
        //     }).catch(
        //     );
    },[currentProduct])

    console.log(currentProduct, '===selector')

    const deleteProduct = (id) => {
        axios({
            method: "delete",
            url: "https://fakestoreapi.com/products/"+id,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                console.log(response);
                if (response.status === 200) {
                    alert('Data Deleted Successfully')
                    
                    history.push('/')
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
        
    
        //console.log(id, '====productId')
    
    
      }

    return (

        <Grid container spacing={3} justify = "center">

                <Grid item xs={9} >
                    <Paper className={classes.paper}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={currentProduct?.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                      {currentProduct?.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {currentProduct?.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="success" onClick={()=>editProduct(currentProduct)}>
                                    Edit
                                </Button>
                                <Button size="small" color="danger" onClick={()=>deleteProduct(currentProduct?.id)} >
                                   Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>

        </Grid>

    );
}

export default ProductDetails

