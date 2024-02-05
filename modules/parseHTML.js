export const parseHTML = htmlContent => {
  const headerTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const anchorTags = ['a'];

  let headerCount = 0;
  let linkCount = 0;

  // Ищем заголовки
  console.log('\nHeaders:');
  for (const headerTag of headerTags) {
    const regex = new RegExp(`<${headerTag}.*?>(.*?)<\/${headerTag}>`, 'gi');
    const matches = htmlContent.matchAll(regex);

    for (const match of matches) {
      headerCount++;
      const headerText = match[1];
      console.log(`${headerCount}. ${headerText}`);
    }
  }

  // Ищем ссылки
  console.log('\nLinks:');
  for (const anchorTag of anchorTags) {
    const regex = new RegExp(
      `<${anchorTag}.*?href="(.*?)".*?>(.*?)<\/${anchorTag}>`,
      'gi',
    );
    const matches = htmlContent.matchAll(regex);

    for (const match of matches) {
      linkCount++;
      const linkUrl = match[1];
      const linkText = match[2];
      console.log(`${linkCount}. ${linkText} (${linkUrl})`);
    }
  }
};
