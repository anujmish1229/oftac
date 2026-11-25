export const CONTACT_EMAIL = "oftacorganization@gmail.com";

export const WHATSAPP_DISPLAY = "+256 779 948672";
export const WHATSAPP_URL = "https://wa.me/256779948672";

export const PHONE_DISPLAY = "+256 740 383436";
export const PHONE_URL = "tel:+256740383436";

export const FACEBOOK_URL = "https://www.facebook.com/OFTACORGANISATION";

export const LOCATION = "Kyangwali Refugee Settlement, Uganda";

/** WhatsApp chat link with a pre-filled opening message. */
export const whatsapp = (text: string) => `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

/** mailto link with a subject line. */
export const email = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
