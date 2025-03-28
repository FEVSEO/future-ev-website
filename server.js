import express from 'express';
import React   from 'react';

import {
    database,
    allTechnologiesDocs,
    allProductsDocs,
    render,
} from './src/utils';

import Intro       from './src/Intro';
import CEO         from './src/CEO';
import History     from './src/History';
import Contact     from './src/Contact';

import Header      from './src/Header';
import Tile        from './src/Tile';
import Content     from './src/Content';
import Footer      from './src/Footer';

const app = express();

// static routing
app.use('/images', express.static('images'));
app.use('/videos', express.static('videos'));

// intro
app.get('/', (req, res) => {
    res.send(render([
        <Header selected="/intro"/>,
        <Intro/>,
        <Footer/>
    ]));
});

app.get('/intro', (req, res) => {
    res.send(render([
        <Header selected="/intro"/>,
        <Intro/>,
        <Footer/>
    ]));
});


});

// history
app.get('/history', (req, res) => {
    res.send(render([
        <Header selected="/history"/>,
        <History/>,
        <Footer/>
    ]));
});

// technologies
app.get('/technologies', (req, res) => {
    res.send(render([
        <Header selected="/technologies"/>,
        allTechnologiesDocs
            .map(doc => <Tile showSupertitle showSubtitle { ...doc }/>),
        <Footer/>
    ]));
});

// products
app.get('/products', (req, res) => {
    res.send(render([
        <Header selected="/products"/>,
        allProductsDocs
            .map(doc => <Tile showSupertitle showSubtitle { ...doc }/>),
        <Footer/>
    ]));
});

// contact
app.get('/contact', (req, res) => {
    res.send(render([
        <Header selected="/contact"/>,
        <Contact/>,
        <Footer/>
    ]));
});

// all content pages
app.get('/:a/:b', (req, res) => {
    const { a, b } = req.params;

    const requestedId = `/${ a }/${ b }`;
    const requestedDoc = database.find(doc => doc.id == requestedId);

    if (requestedDoc !== undefined) {
        res.send(render([
            <Header selected={ a }/>,
            <Content { ...requestedDoc }/>,
            <Footer/>
        ]));
    }

    else res.send();
});

// start website server
const port = process.env.PORT || 8888;
app.listen(port, () => {
    console.log(`Future EV website started running! (port: ${ port })`);
});