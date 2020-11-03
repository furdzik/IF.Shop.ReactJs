export default (intl, limit) => intl.formatNumber(limit, {
  style: 'currency',
  currency: 'SEK',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  currencyDisplay: 'narrowSymbol'
});
