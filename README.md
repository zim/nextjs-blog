# Carbon Intelligence: Front End Developer Technical Test

This project was bootstrapped with Next.js.

## Getting Started

```
git clone https://github.com/zim/nextjs-blog.git
cd nextjs-blog
npm i && npm run dev
```

Then browse to http://localhost:3000

## Use correct version of NODE.js

```
nvm use 13.12.
```

It is the case that this is one of my earliest Next.js implemantaions.

There is so much more that I wanted to do.... Unfortunately time constraints mean ....

My time was largely taken getting up to speed on some of the features of `Next.js`, as well as gettting `D3`, `Ant Design React` in place. And to re aquaint myself with the syntax of creating D3 visualizations. And to investigate the many great components in ant.design (having spent some time looking at/working with `Material.UI`). It was very nice to get the comparison of the 2 component libraries.

## Why the general lack of styling ( particularly responsive stying )

The General styling is very poor as I did not have time to properly structure this.... and the fact that there are many options with csss and Next.js in particular as it has built in support for CSS and SASS....

Having installed ant.design, which is a library I have not used before, and attempted to use the grid system, I came across problems so moved forward without this in place so there is a lack of responsive layout which I had hoped to have aquired from this... Also I had teething problems with Ant Design Nav components... Also as mentioned Next.js does use a library called styled-jsx.. too many options for such a short time.

## Ant Design Table

I have used the Table component and did implement some of the nice features this component has including scrolling and fixed columns... there are many many more that I had wanted to implement. Sorting and filtering of course (but again time constraints stopped me pursuing this for too long unfortunately)

## pie-chart-one.js Component

I did cheat by creating an array of data in the scheme that I needed. If I had more time I would have created some util functions similar to `string-to-number.js` and `string-to-pay.js` to extract and reduce the array that was provided..

## Next.js API routes

I had to add `polluter_data` as a hard coded array, as I has some issues when I did create API route in the Next.js fashion...

Time constraints mean I have to stop now.
