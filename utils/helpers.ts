export const formatCurrency = (value?: number) =>
  value ? '₦' + value.toLocaleString('en', { currency: 'NGN' }).toString() : 0;
