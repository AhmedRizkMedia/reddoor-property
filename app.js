document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('waiting-list-form');
  const formCard = document.getElementById('form-card');
  const successCard = document.getElementById('success-card');
  const submitBtn = document.getElementById('submit-btn');
  const resetBtn = document.getElementById('reset-btn');
  
  const firstNameInput = document.getElementById('client-firstname');
  const lastNameInput = document.getElementById('client-lastname');
  const emailInput = document.getElementById('client-email');
  const countryCodeSelect = document.getElementById('country-code');
  const phoneInput = document.getElementById('client-phone');
  const unitSelect = document.getElementById('client-unit');
  const consentInput = document.getElementById('client-consent');
  
  const langButtons = document.querySelectorAll('.lang-btn');

  // Translation Dictionary
  const translations = {
    en: {
      page_title: "Dubai Properties with Flexible Payment Plans | Red Door Properties",
      banner: "EXCLUSIVE OPPORTUNITIES FOR RED DOOR CLIENTS &bull; VIP ALLOCATION PORTAL",
      enquire_now: "ENQUIRE NOW",
      vip_badge: "VIP ACCESS ONLY",
      hero_title: "Own a Property in Dubai with Flexible Payment Options",
      hero_subtitle_1: "Zero Initial Down Payment on Selected Properties",
      hero_subtitle_2: "Monthly Payment Plans from 0.5%",
      hero_intro: "Discover exclusive Dubai property opportunities selected for Red Door clients, including studios, 1-bedroom, 2-bedroom and 3-bedroom apartments with flexible payment plans and selected post-handover options.",
      hero_cta_primary: "View Available Properties",
      hero_cta_secondary: "Speak to an Advisor",
      urgency_text: "Limited-Time Opportunities &bull; Limited Units Available",
      form_title: "Get Your Exclusive Property Options",
      form_desc: "Complete the form and a Red Door property advisor will send you available opportunities matching your preferences.",
      label_firstname: "First Name",
      placeholder_firstname: "First Name",
      error_firstname: "Please enter your first name.",
      label_lastname: "Last Name",
      placeholder_lastname: "Last Name",
      error_lastname: "Please enter your last name.",
      label_email: "Email Address",
      error_email: "Please enter a valid email address.",
      label_phone: "Phone / WhatsApp",
      error_phone: "Please enter a valid phone number.",
      label_unit: "Preferred Property Type",
      unit_option_1: "Studio",
      unit_option_2: "1 Bedroom",
      unit_option_3: "2 Bedrooms",
      unit_option_4: "3 Bedrooms",
      unit_option_5: "Not Sure",
      consent_text: "I consent to be contacted by phone, email, and WhatsApp regarding matching property opportunities.",
      error_consent: "Please accept the consent checkbox to proceed.",
      btn_submit: "Show Me Available Offers",
      form_disclosure: "No obligation. Availability and payment plans depend on the selected project, applicable terms and buyer eligibility.",
      success_title: "Thank You for Your Interest",
      success_desc: "Your private request has been successfully registered. Our VIP Customer Care team will contact you shortly to assist you in a personalized manner.",
      seal_text: "RED DOOR PRIVATE CLIENT CARE",
      success_whatsapp_btn: "Chat on WhatsApp",
      btn_reset: "Submit Another Request",
      highlights_title: "OFFER HIGHLIGHTS",
      highlights_subtitle: "Flexible and accessible options tailored to help you secure prime Dubai real estate.",
      stat1_name: "Zero Initial Down Payment",
      stat1_desc: "Available on selected projects and subject to eligibility.",
      stat2_name: "Monthly Plans from 0.5%",
      stat2_desc: "Flexible monthly instalment options on selected Dubai properties.",
      stat3_name: "Post-Handover Options",
      stat3_desc: "Selected developments allow buyers to continue payments after receiving the property.",
      stat4_name: "Multiple Property Types",
      stat4_desc: "Choose from studios, 1-bedroom, 2-bedroom and 3-bedroom properties.",
      compliance_note: "* Note: Available on selected projects, subject to availability, terms and buyer eligibility.",
      collection_title: "SELECTED OPPORTUNITIES",
      collection_subtitle: "Discover curated apartment profiles located in Dubai's premier residential communities.",
      card1_tag: "STUDIO",
      card1_title: "Studio Apartment",
      card1_desc: "Optimized open-plan layout featuring premium finishes, floor-to-ceiling windows, and access to world-class wellness amenities.",
      card2_tag: "1 BEDROOM",
      card2_title: "1-Bedroom Apartment",
      card2_desc: "Spacious master bedroom layout, modern open kitchen, private terrace, and stunning views of the Dubai skyline.",
      card3_tag: "2 BEDROOMS",
      card3_title: "2-Bedroom Apartment",
      card3_desc: "Generous living room space, en-suite bedrooms, walk-in closets, and expansive outdoor terrace deck overlooking waterways.",
      card4_tag: "3 BEDROOMS",
      card4_title: "3-Bedroom Apartment",
      card4_desc: "Luxury panoramic penthouse layout, premium kitchen appliances, helper quarters, and private plunge pool options.",
      card_btn: "Check Availability",
      how_it_works_title: "HOW IT WORKS",
      how_it_works_subtitle: "Our simplified process to guide you from initial inquiry to property selection.",
      step1_title: "Select Your Property Type",
      step1_desc: "Choose between a studio, 1-bedroom, 2-bedroom or 3-bedroom property.",
      step2_title: "Receive Matching Opportunities",
      step2_desc: "Our advisors identify available properties matching your budget and preferred payment structure.",
      step3_title: "Review and Reserve",
      step3_desc: "Review the project, unit, payment schedule and full terms before making a reservation.",
      footer_disclaimer: "This website is operated by Red Door Properties. Property availability, prices, payment plans, zero initial down payment promotions and post-handover options are subject to change, applicable terms, developer approval and buyer eligibility. Images may be used for illustrative purposes. This website does not constitute financial, legal or investment advice.",
      footer_copyright: "&copy; 2026 Red Door Real Estate. All rights reserved."
    },
    fr: {
      page_title: "Propriétés à Dubaï avec plans de paiement flexibles | Red Door Properties",
      banner: "OPPORTUNITÉS EXCLUSIVES POUR LES CLIENTS RED DOOR &bull; PORTAIL D'ALLOCATION VIP",
      enquire_now: "S'INFORMER",
      vip_badge: "ACCÈS VIP UNIQUEMENT",
      hero_title: "Devenez propriétaire à Dubaï avec des plans de paiement flexibles",
      hero_subtitle_1: "Zéro acompte initial sur les projets sélectionnés",
      hero_subtitle_2: "Plans de paiement mensuels à partir de 0.5%",
      hero_intro: "Découvrez des opportunités immobilières exclusives à Dubaï sélectionnées pour les clients Red Door, comprenant des studios, appartements 1, 2 et 3 chambres avec des plans de paiement flexibles et des options après remise des clés sur une sélection de projets.",
      hero_cta_primary: "Voir les propriétés",
      hero_cta_secondary: "Contacter un conseiller",
      urgency_text: "Opportunités limitées dans le temps &bull; Nombre d'unités limité",
      form_title: "Obtenez vos options exclusives",
      form_desc: "Remplissez le formulaire et un conseiller Red Door vous enverra les opportunités disponibles correspondant à vos préférences.",
      label_firstname: "Prénom",
      placeholder_firstname: "Prénom",
      error_firstname: "Veuillez saisir votre prénom.",
      label_lastname: "Nom",
      placeholder_lastname: "Nom de famille",
      error_lastname: "Veuillez saisir votre nom.",
      label_email: "Adresse E-mail",
      error_email: "Veuillez saisir une adresse e-mail valide.",
      label_phone: "Téléphone / WhatsApp",
      error_phone: "Veuillez saisir un numéro de téléphone valide.",
      label_unit: "Type de Propriété Souhaité",
      unit_option_1: "Studio",
      unit_option_2: "Appartement 1 Chambre",
      unit_option_3: "Appartement 2 Chambres",
      unit_option_4: "Appartement 3 Chambres",
      unit_option_5: "Indécis / Voir tout",
      consent_text: "Je consens à être contacté par téléphone, e-mail et WhatsApp concernant les opportunités immobilières correspondantes.",
      error_consent: "Veuillez accepter pour continuer.",
      btn_submit: "Afficher les offres disponibles",
      form_disclosure: "Sans engagement. La disponibilité et les plans de paiement dépendent du projet sélectionné, des conditions applicables et de l'éligibilité de l'acheteur.",
      success_title: "Merci de votre intérêt",
      success_desc: "Votre demande d'allocation privée a été enregistrée avec succès. Notre service clientèle VIP prendra contact avec vous dans les plus brefs délais afin de vous accompagner de manière personnalisée.",
      seal_text: "RED DOOR PRIVATE CLIENT CARE",
      success_whatsapp_btn: "Discuter sur WhatsApp",
      btn_reset: "Soumettre une autre demande",
      highlights_title: "POINTS FORTS DE L'OFFRE",
      highlights_subtitle: "Des options flexibles et accessibles conçues pour vous aider à acquérir de l'immobilier d'exception à Dubaï.",
      stat1_name: "Zéro Acompte Initial",
      stat1_desc: "Disponible sur les projets sélectionnés et sous réserve d'éligibilité.",
      stat2_name: "Mensualités dès 0.5%",
      stat2_desc: "Options d'échelonnement mensuel flexibles sur une sélection de propriétés à Dubaï.",
      stat3_name: "Options Après Remise",
      stat3_desc: "Certains projets permettent aux acheteurs de poursuivre les paiements après la remise des clés.",
      stat4_name: "Plusieurs Types de Biens",
      stat4_desc: "Faites votre choix parmi des studios et appartements de 1, 2 ou 3 chambres.",
      compliance_note: "* Note : Disponible sur une sélection de projets, sous réserve de disponibilité, des conditions et de l'éligibilité de l'acheteur.",
      collection_title: "OPPORTUNITÉS SÉLECTIONNÉES",
      collection_subtitle: "Découvrez des profils d'appartements sélectionnés dans les meilleurs quartiers résidentiels de Dubaï.",
      card1_tag: "STUDIO",
      card1_title: "Studio Moderne",
      card1_desc: "Aménagement optimisé avec des finitions haut de gamme, de grandes baies vitrées et l'accès à des installations de bien-être.",
      card2_tag: "1 CHAMBRE",
      card2_title: "Appartement 1 Chambre",
      card2_desc: "Chambre principale spacieuse, cuisine ouverte moderne, terrasse privée et vue imprenable sur la skyline de Dubaï.",
      card3_tag: "2 CHAMBRES",
      card3_title: "Appartement 2 Chambres",
      card3_desc: "Grand salon, chambres avec salles de bains attenantes, dressing et grande terrasse donnant sur les canaux.",
      card4_tag: "3 CHAMBRES",
      card4_title: "Appartement 3 Chambres",
      card4_desc: "Appartement d'angle panoramique, cuisine équipée haut de gamme, chambre de service et option de piscine privée sur terrasse.",
      card_btn: "Vérifier la disponibilité",
      how_it_works_title: "COMMENT ÇA MARCHE",
      how_it_works_subtitle: "Notre processus simplifié pour vous accompagner de la première demande à la sélection de votre propriété.",
      step1_title: "Sélectionnez le type",
      step1_desc: "Choisissez entre un studio ou un appartement de 1, 2 ou 3 chambres.",
      step2_title: "Recevez les opportunités",
      step2_desc: "Nos conseillers identifient les propriétés disponibles correspondant à votre budget et profil de paiement.",
      step3_title: "Examinez et réservez",
      step3_desc: "Validez le projet, le plan de paiement et l'ensemble des conditions avant d'effectuer votre réservation.",
      footer_disclaimer: "Ce site web est géré par Red Door Properties. La disponibilité des biens, les prix, les plans de paiement, les promotions sans acompte initial et les options après remise des clés sont sujets à modification, aux conditions applicables, à l'approbation du promoteur et à l'éligibilité de l'acheteur. Les images peuvent être utilisées à des fins illustratives. Ce site ne constitue pas un conseil financier, juridique ou d'investissement.",
      footer_copyright: "&copy; 2026 Red Door Real Estate. Tous droits réservés."
    }
  };

  // Language Switch Logic (with Arabic RTL structure support prepared)
  function setLanguage(lang) {
    // 1. Update buttons styling
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 2. Handle Arabic direction (RTL) support when added
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang;
    }

    // 3. Update page title
    if (translations[lang] && translations[lang].page_title) {
      document.title = translations[lang].page_title;
    }

    // 4. Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        element.innerHTML = translations[lang][key];
      }
    });

    // 5. Update inputs placeholder with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key] !== undefined) {
        element.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // 6. Store language preference in localStorage
    localStorage.setItem('preferredLanguage', lang);

    // 7. Update WhatsApp message links based on selected language
    const heroWhatsapp = document.getElementById('hero-whatsapp-btn');
    const successWhatsapp = document.getElementById('success-whatsapp-btn');
    const stickyWhatsapp = document.getElementById('sticky-whatsapp-btn');
    
    if (lang === 'en') {
      if (heroWhatsapp) heroWhatsapp.setAttribute('href', 'https://wa.me/971589110270?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Dubai%20property%20opportunities%20with%20flexible%20payment%20plans.');
      if (successWhatsapp) successWhatsapp.setAttribute('href', 'https://wa.me/971589110270?text=Hello%2C%20I%20just%20registered%20on%20your%20portal%20and%20would%20like%20to%20speak%20to%20an%20advisor%20right%20away.');
      if (stickyWhatsapp) stickyWhatsapp.setAttribute('href', 'https://wa.me/971589110270?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Dubai%20property%20opportunities%20with%20flexible%20payment%20plans.');
    } else {
      if (heroWhatsapp) heroWhatsapp.setAttribute('href', 'https://wa.me/971589110270?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20les%20opportunit%C3%A9s%20immobili%C3%A8res%20avec%20plan%20de%20paiement%20flexible.');
      if (successWhatsapp) successWhatsapp.setAttribute('href', 'https://wa.me/971589110270?text=Bonjour%2C%20je%20viens%20de%20remplir%20le%20formulaire%20et%20je%20souhaite%20parler%20%C3%A0%20un%20conseiller%20de%20suite.');
      if (stickyWhatsapp) stickyWhatsapp.setAttribute('href', 'https://wa.me/971589110270?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20les%20opportunit%C3%A9s%20immobili%C3%A8res%20avec%20plan%20de%20paiement%20flexible.');
    }
  }

  // Attach click listeners to language buttons
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang');
      setLanguage(lang);
      
      // Track language switch event
      trackEvent('LanguageChange', { selected_language: lang });
    });
  });

  // Initialize page language from URL parameter (?lang=en or ?lang=fr), localStorage, or default (French)
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  let savedLang = 'fr';
  if (urlLang === 'en' || urlLang === 'fr') {
    savedLang = urlLang;
  } else {
    savedLang = localStorage.getItem('preferredLanguage') || 'fr';
  }
  setLanguage(savedLang);

  // Input Event Listeners to remove errors on typing
  firstNameInput.addEventListener('input', () => clearError(firstNameInput));
  lastNameInput.addEventListener('input', () => clearError(lastNameInput));
  emailInput.addEventListener('input', () => clearError(emailInput));
  phoneInput.addEventListener('input', () => clearError(phoneInput));
  consentInput.addEventListener('change', () => clearError(consentInput));

  // Active Formspree Endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzdlwwwo';

  // State to prevent duplicate rapid submissions
  let isSubmitting = false;

  // Handle Form Submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isConsentValid = validateConsent();
    
    if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPhoneValid || !isConsentValid) {
      return;
    }
    
    // Set submitting state
    isSubmitting = true;
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Get UTM parameters
    const utmParams = getUtmParams();
    
    const formData = {
      first_name: firstNameInput.value.trim(),
      last_name: lastNameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: countryCodeSelect.value + ' ' + phoneInput.value.trim(),
      unit_type: unitSelect.value,
      consent_provided: consentInput.checked,
      language: localStorage.getItem('preferredLanguage') || 'fr',
      page_source: window.location.href,
      referrer: document.referrer,
      ...utmParams
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Track Form Submission Event (GA4 and Meta Pixel)
        trackEvent('LeadFormSubmitted', {
          property_type: formData.unit_type,
          language: formData.language,
          utm_source: formData.utm_source || 'direct',
          utm_medium: formData.utm_medium || 'none',
          utm_campaign: formData.utm_campaign || 'none'
        });

        // Trigger standard Lead event for Meta Pixel
        if (window.fbq) {
          fbq('track', 'Lead', {
            content_name: 'Dubai Property Lead Capture',
            content_category: 'Real Estate Leads',
            value: 0.00,
            currency: 'AED'
          });
        }

        // Transition cards
        formCard.classList.add('hidden');
        successCard.classList.remove('hidden');
        
        // Reset form fields
        form.reset();
      } else {
        const errorLang = localStorage.getItem('preferredLanguage') || 'fr';
        const errorAlert = errorLang === 'fr' 
          ? "Une erreur s'est produite lors de la soumission. Veuillez réessayer." 
          : "An error occurred during submission. Please try again.";
        alert(errorAlert);
      }
    } catch (error) {
      console.error('Submission error:', error);
      const errorLang = localStorage.getItem('preferredLanguage') || 'fr';
      const errorAlert = errorLang === 'fr' 
        ? "Erreur de connexion. Veuillez vérifier votre réseau et réessayer." 
        : "Connection error. Please check your network and try again.";
      alert(errorAlert);
    } finally {
      // Revert states
      isSubmitting = false;
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });

  // Handle Reset / Register Another
  resetBtn.addEventListener('click', () => {
    successCard.classList.add('hidden');
    formCard.classList.remove('hidden');
    firstNameInput.focus();
  });

  // Property Card Action Clicks (Micro-Interactions)
  const propertyActionBtns = document.querySelectorAll('.card-action-btn');
  propertyActionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedProperty = btn.getAttribute('data-property');
      if (selectedProperty) {
        unitSelect.value = selectedProperty;
        
        // Track property card click event
        trackEvent('PropertyCardClicked', { property_type: selectedProperty });
      }
    });
  });

  // Track CTA and Anchor Clicks
  const heroWhatsappBtn = document.getElementById('hero-whatsapp-btn');
  if (heroWhatsappBtn) {
    heroWhatsappBtn.addEventListener('click', () => {
      trackEvent('WhatsAppContactClicked', { placement: 'Hero' });
    });
  }

  const successWhatsappBtn = document.getElementById('success-whatsapp-btn');
  if (successWhatsappBtn) {
    successWhatsappBtn.addEventListener('click', () => {
      trackEvent('WhatsAppContactClicked', { placement: 'SuccessCard' });
    });
  }

  const stickyWhatsappBtn = document.getElementById('sticky-whatsapp-btn');
  if (stickyWhatsappBtn) {
    stickyWhatsappBtn.addEventListener('click', () => {
      trackEvent('WhatsAppContactClicked', { placement: 'StickyFloating' });
    });
  }

  const enquireCta = document.querySelector('.header-cta');
  if (enquireCta) {
    enquireCta.addEventListener('click', () => {
      trackEvent('EnquireNowClicked', { placement: 'Navbar' });
    });
  }

  // Helper validation functions
  function validateFirstName() {
    const value = firstNameInput.value.trim();
    if (value.length < 2) {
      showError(firstNameInput);
      return false;
    }
    clearError(firstNameInput);
    return true;
  }

  function validateLastName() {
    const value = lastNameInput.value.trim();
    if (value.length < 2) {
      showError(lastNameInput);
      return false;
    }
    clearError(lastNameInput);
    return true;
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showError(emailInput);
      return false;
    }
    clearError(emailInput);
    return true;
  }

  function validatePhone() {
    const value = phoneInput.value.trim();
    if (value.length < 6) {
      showError(phoneInput);
      return false;
    }
    clearError(phoneInput);
    return true;
  }

  function validateConsent() {
    if (!consentInput.checked) {
      showError(consentInput);
      return false;
    }
    clearError(consentInput);
    return true;
  }

  function showError(inputElement) {
    const formGroup = inputElement.closest('.form-group');
    if (formGroup) {
      formGroup.classList.add('has-error');
    }
  }

  function clearError(inputElement) {
    const formGroup = inputElement.closest('.form-group');
    if (formGroup) {
      formGroup.classList.remove('has-error');
    }
  }

  // Store UTM parameters in sessionStorage on load to preserve them during session
  function preserveUtmParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    utmKeys.forEach(key => {
      const val = urlParams.get(key);
      if (val) {
        sessionStorage.setItem(key, val);
      }
    });
  }
  preserveUtmParams();

  // Extract UTM parameters from URL or sessionStorage
  function getUtmParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const params = {};
    utmKeys.forEach(key => {
      params[key] = urlParams.get(key) || sessionStorage.getItem(key) || '';
    });
    return params;
  }

  // Analytics Unified Tracking Handler
  function trackEvent(eventName, eventParams) {
    // 1. Google Analytics (gtag)
    if (window.gtag) {
      gtag('event', eventName, eventParams);
    }
    // 2. Meta Pixel custom event (fbq)
    if (window.fbq) {
      fbq('trackCustom', eventName, eventParams);
    }
    console.log(`[Tracking Event] ${eventName}:`, eventParams);
  }
});
