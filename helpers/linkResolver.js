const linkResolver = function(doc) {
  // Pretty URLs for known types
  if (doc.type === 'frontend') return '/frontend/' + doc.uid
  // Fallback for other types, in case new custom types get created
  return '/doc/' + doc.id
}

export default linkResolver
