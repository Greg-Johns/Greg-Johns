export default {
  head: ({ title, meta }) => (
    <>
      {meta.description && <meta name="description" content={meta.description} />}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: 'Read More →',
  titleSuffix: null,
  postFooter: null,
  cusdis: {
    appId: 'your_app_id',
    host: 'your_host(optional)',
    lang: 'your_lang'
  },
  darkMode: false,
  font: false,
  footer: <small>The personal site of Greg Johns</small>,
}
