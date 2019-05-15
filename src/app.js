'use strict';

const FigmaApi = require('./modules/FigmaApi/FigmaApi');

const accessToken = `12721-1ee14193-c009-40b7-aa1b-af0419277391`;
const fileKey = `FegKH5usbbwIsrJYVCjzAHZf`;

FigmaApi.setAccessToken(accessToken);

FigmaApi.getFile(fileKey).then(processFile);

function processFile(file) {
  const pages = file.document.children
                    .filter(i => i.type == 'CANVAS')
                    .reduce(reducePages, {});

  console.info(JSON.stringify(pages, null, 2));

  function reducePages(pages, page) {
    pages[page.name] = getFrames(page);
    return pages;
  }
}


function getFrames(page) {
  return page.children
             .filter(i => i.type == 'FRAME')
             .reduce(reduceFrame, {});

  function reduceFrame(frames, frame) {
    frames[frame.name] = getItems(frame);
    return frames;
  }
}

function getItems(frame) {
  return frame.children
              .reduce(reduceItem, {});

  function reduceItem(items, item) {
    items[item.name] = factoryItem(item);
    return items;
  }
}

function factoryItem(item) {
  const boxSizing = item.absoluteBoundingBox || {};
  const fill = item.fills[0] || {color: {r: 0, g: 0, b: 0}};
  const font = item.style || {};
  return {
    width: boxSizing.width || null,
    height: boxSizing.height || null,
    color: parseColor(fill.color),
    fontSize: font.fontSize,
    fontWeight: font.fontWeight
  };

  function parseColor(color) {
    const r = Math.round(255 * color.r).toString(16);
    const g = Math.round(255 * color.g).toString(16);
    const b = Math.round(255 * color.b).toString(16);
    return `#${r}${g}${b}`;
  }
}