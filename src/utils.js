import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import AspectRatio from './AspectRatio';

// construct database from json files
export const database = [];
const directories = ['/technologies', '/products'];

directories.forEach(directory => {
    fs.readdirSync(`.${ directory }`).forEach(fileName => {
        // e.g.
        // fileName: joonhyublee.json
        // jsonName: joonhyublee
        const jsonName = fileName.split('.json')[0];
        database.push({
            ...JSON.parse(fs.readFileSync(`.${ directory }/${ fileName }`, 'utf8')),
            directory,
            jsonName,
            id: `${ directory }/${ jsonName }`
        });
    });
});

const belongsToDirectory = directory => doc => {
    return doc.id.split('/')[1] == directory.split('/')[1];
}

// export documents
export const allTechnologiesDocs = database.filter(belongsToDirectory(
    '/technologies'));
export const allProductsDocs = database.filter(belongsToDirectory(
    '/products'));

// prepare raw html file
const rawHtml = fs.readFileSync('./index.html', 'utf8');

// server-side react rendering
export const render = component => {
    return rawHtml
        .replace('<div id="root"></div>',
            ReactDOMServer.renderToStaticMarkup(
                <div className="container">
                    { component }
                </div>
            )
        );
}

// util for checking all item within content list is of same type
const doAllItemsSatisfy = (items, doesItemSatisfy) => {
    return items.reduce((accumulator, currentItem) => {
        return accumulator && doesItemSatisfy(currentItem);
    }, true);
}

// util used for formatting content part of json
export const formatContentItem = contentItem => {
    // a simple text
    if (typeof contentItem == 'string') {
        return contentItem;

    // a list of texts
    } else if (Array.isArray(contentItem) && doAllItemsSatisfy(contentItem,
        item => typeof item == 'string')) {

        return contentItem.map(item => [item, <br/>]);

    // a link
    } else if (contentItem.link) {
        return <h3><a href={ contentItem.link }>{ contentItem.text }</a></h3>;

    // a list of links
    } else if (Array.isArray(contentItem) && doAllItemsSatisfy(contentItem,
        item => item.hasOwnProperty('link'))) {

        return contentItem.map(item =>
            <h3><a href={ item.link }>{ item.text }</a></h3>
        );

    // an image
    } else if (contentItem.image) {
        return <img src={ contentItem.image }/>;

    // a table of images
    } else if (Array.isArray(contentItem) && doAllItemsSatisfy(contentItem,
        item => item.hasOwnProperty('image'))) {

        return (
            <table>
                { contentItem.map(item => <td><img src={ item.image }/></td>) }
            </table>
        );

    // a video (mp4 only)
    } else if (contentItem.video) {
        return (
            <video autoPlay loop muted>
                <source src={ contentItem.video } type="video/mp4"></source>
            </video>
        );

    // a youtube embed
    } else if (contentItem.youtube) {
        return (
            <AspectRatio
                aspectRatio={ contentItem.aspectRatio ? contentItem.aspectRatio : '16:9' }
            >
                <iframe
                    src={ contentItem.youtube }
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </AspectRatio>
        );

    // headings
    } else if (contentItem.h1) {
        return <h1>{ contentItem.h1 }</h1>;
    } else if (contentItem.h2) {
        return <h2>{ contentItem.h2 }</h2>;
    } else if (contentItem.h3) {
        return <h3>{ contentItem.h3 }</h3>;
    } else if (contentItem.h4) {
        return <h4>{ contentItem.h4 }</h4>;
    }
};