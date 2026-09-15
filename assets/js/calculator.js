/**
 * Calculadora Comercial de Ahorro y Retorno de Inversión (ROI)
 * Herramienta de cierre comercial de DevCorp Solutions frente a Glovo, UberEats y JustEat
 */

export function calculateDeliverySavings(monthlyOrders, avgTicket, commissionRate = 0.30) {
  const monthlyRevenue = monthlyOrders * avgTicket;
  const platformMonthlyCommission = monthlyRevenue * commissionRate;
  const platformAnnualCommission = platformMonthlyCommission * 12;

  // En DevCorp la comisión es 0% (el restaurante es dueño de su canal)
  const annualSavings = platformAnnualCommission;
  
  // Cálculo de pedidos recapturados (clientes propios que dejan de pagar sobreprecio a las apps)
  const marginRecovered = platformMonthlyCommission;

  return {
    monthlyOrders,
    avgTicket,
    commissionPercentage: Math.round(commissionRate * 100),
    monthlyRevenue,
    platformMonthlyCommission,
    platformAnnualCommission,
    annualSavings,
    marginRecovered
  };
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(amount);
}
