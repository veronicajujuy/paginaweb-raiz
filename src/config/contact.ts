/**
 * Configuración centralizada de contacto por WhatsApp para Raíz.
 *
 * Para activar el enlace real, reemplazá el valor de `phoneNumber`
 * por el número de WhatsApp en formato internacional sin signos ni espacios
 * (por ejemplo: "549388..." para San Salvador de Jujuy, Argentina).
 */
export const WHATSAPP_CONFIG = {
  phoneNumber: '549XXXXXXXXXX',
  defaultMessage:
    'Hola Raíz, ¿cómo están? Quiero consultar por las viandas disponibles de esta semana.',
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const cleanNumber = WHATSAPP_CONFIG.phoneNumber.replace(/\s+/g, '');
  const text = encodeURIComponent(customMessage ?? WHATSAPP_CONFIG.defaultMessage);
  return `https://wa.me/${cleanNumber}?text=${text}`;
}
