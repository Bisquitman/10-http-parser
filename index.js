import { fetchData } from './modules/fetchData.js';
import { parseHTML } from './modules/parseHTML.js';

const url = 'https://methed.ru';

const init = async () => {
  try {
    const htmlContent = await fetchData(url);
    parseHTML(htmlContent);
  } catch (error) {
    console.error('Error fetching or parsing HTML:', error);
  }
};
init();
