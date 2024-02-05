import https from 'https';
import http from 'http';
import url from 'url';

export const fetchData = urlString => {
  const parsedUrl = url.parse(urlString);
  const httpModule = parsedUrl.protocol === 'https:' ? https : http;

  return new Promise((resolve, reject) => {
    httpModule
      .get(parsedUrl, response => {
        let data = '';
        response.on('data', chunk => {
          data += chunk;
        });
        response.on('end', () => {
          resolve(data);
        });
      })
      .on('error', error => {
        reject(error);
      });
  });
};
