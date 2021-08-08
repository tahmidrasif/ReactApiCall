import react from 'react'

import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useParams
} from "react-router-dom";
import { useEffect } from 'react';

const ProductCreate = ({ classes, singleProduct }) => {

    console.log(singleProduct, '===singleProduct Crete form')
    const history=useHistory();
    const [product, setProduct] = useState(
        {
            id: '',
            title: '',
            price: '',
            description: '',
            image: '',
            category: ''
        }
    );
    const params = useParams();
    const addData = (e, datatype) => {
        setProduct({
            ...product,
            [datatype]: e.target.value
        })
    }

    // id:singleProduct?.id,
    // title:singleProduct?.title,
    // price:singleProduct?.id,
    // description:singleProduct?.description,
    // image:singleProduct?.image,
    // category:singleProduct?.category


    useEffect(() => {
        if (typeof params !== 'undefined') {
            console.log(params, '===useEfferct product paramaeter')
            axios.get('https://fakestoreapi.com/products/' + params.id).then(
                response => {
                    console.log(response.data, '===response single    ')
                    setProduct(response.data)
                    //toggleLoader(false);
                }).catch(
                );
        }


    }, [])

    const productInsert = () => {
        console.log(product, '===product Crete form')


        if (product.title === '' || product.price === '' || product.description === '' || product.image === '' || product.category === '') {
            alert('Please Insert Data')
            return;
        }
        axios({
            method: "post",
            url: "https://fakestoreapi.com/products",
            data: JSON.stringify(
                {
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    image: product.image,
                    category: product.category
                }),
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                console.log(response);
                if (response.status === 200) {
                    alert('Data Added Successfully')
                    setProduct({ ...product, title: '', price: '', description: '', category: '', image: '' })
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    const productUpdate = () => {
        console.log(product, '===product Crete form')


        if (product.title === '' || product.price === '' || product.description === '' || product.image === '' || product.category === '') {
            alert('Please Insert Data')
            return;
        }
        axios({
            method: "put",
            url: "https://fakestoreapi.com/products/"+params.id,
            data: JSON.stringify(
                {
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    image: product.image,
                    category: product.category
                }),
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                console.log(response);
                if (response.status === 200) {
                    alert('Data Edited Successfully')
                    setProduct({ ...product, title: '', price: '', description: '', category: '', image: '' })
                    history.push('/')
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    return (

        <Grid container spacing={3} justify="center">

            <Grid item xs={3} >
                <Paper className={classes.paper}>
                    <Card className={classes.root}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <div>
                                <TextField required id="standard-required" value={product.title} label="Title" onChange={((e) => addData(e, 'title'))} />
                            </div>
                            <div>
                                <TextField required id="standard-required" value={product.price} label="Price" type="number" onChange={((e) => addData(e, 'price'))}
                                    InputLabelProps={{
                                        shrink: true,
                                    }} />
                            </div>
                            <div>
                                <TextField required id="standard-required" value={product.description} label="Description" onChange={((e) => addData(e, 'description'))} />
                            </div>
                            <div>
                                <TextField required id="standard-required" value={product.image} label="Image" onChange={((e) => addData(e, 'image'))} />
                            </div>
                            <div>
                                <TextField required id="standard-required" value={product.category} label="Category" onChange={((e) => addData(e, 'category'))} />
                            </div>

                            <div>
                                {typeof params.id === 'undefined' ?
                                    <Button size="small" color="success" onClick={productInsert} >
                                        Save
                                    </Button> :
                                    <Button size="small" color="success" onClick={productUpdate} >
                                        Edit
                                    </Button>
                                }
                            </div>
                        </form>
                    </Card>
                </Paper>
            </Grid>
        </Grid>
    );

}

export default ProductCreate;