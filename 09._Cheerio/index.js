import fs from 'fs';

const htmlPageString = fs.readFileSync('proshop.html', 'utf-8');

import { load } from "cheerio";

const $ = load(htmlPageString);

$("#products [product]").each((index, element) => {
    const name = $(element).find(".site-product-link h2").text();
    const description = $(element).find(".site-product-link").text();
    const price = $(element).find(".site-currency-lg").text();
    
    console.log(name);
    console.log(price);
});

