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
  
  const langButtons = document.querySelectorAll('.lang-btn');

  // Translation Dictionary
  const translations = {
    en: {
      page_title: "The Oasis by Emaar - Dubai Properties Investment Portal",
      banner: "PRIVATE PORTFOLIO ALLOCATION &bull; VERIFICATION REQUIRED FOR INVENTORY INTAKE",
      marketed_by: "EXCLUSIVELY MARKETED BY",
      enquire_now: "ENQUIRE NOW",
      vip_badge: "VIP INVITE ONLY",
      hero_title: 'THE OASIS <br><span class="gold-text">BY EMAAR</span>',
      hero_subtitle: "WATERFRONT MANSIONS & VILLAS",
      hero_intro: "Presenting Emaar's newest, most prestigious master community in Dubai. Designed for a select few, The Oasis features palatial estates bordered by serene lagoons, white sand beaches, and championship wellness amenities.",
      alert_title: "Strict Phase I Limits",
      alert_desc: "With only a limited number of shorefront mansion plots available for the initial intake, priority is given to registered portfolio clients. Fill out the verification form to request allocation.",
      form_title: "Apply for Allocation",
      form_desc: "Enter your contact credentials to verify your profile and access private pricing sheets.",
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
      label_unit: "Preferred Mansion Class",
      unit_option_1: "4-Bedroom Shoreline Villa",
      unit_option_2: "5-Bedroom Lagoon Mansion",
      unit_option_3: "Palatial Waterfront Estate",
      unit_option_4: "Undecided / View All",
      btn_submit: "REGISTER MY INTEREST",
      success_title: "Thank You for Your Interest",
      success_desc: "Your private allocation request has been successfully registered. Our VIP Customer Care team will contact you shortly to assist you in a personalized manner.",
      seal_text: "RED DOOR PRIVATE CLIENT CARE",
      btn_reset: "Submit Another Request",
      highlights_title: "WHY INVEST IN DUBAI REAL ESTATE?",
      highlights_subtitle: "Capitalize on the world's most dynamic luxury real estate hub.",
      stat1_name: "Personal Income Tax",
      stat1_desc: "Retain 100% of your earnings, rental yield, and capital appreciation.",
      stat2_name: "Golden Visa Eligibility",
      stat2_desc: "Secure long-term residency for you and your family upon property acquisition.",
      stat3_name: "High Rental Yields",
      stat3_desc: "Emaar properties consistently outperform globally in rental occupancy and yields.",
      stat4_name: "Stable Currency",
      stat4_desc: "The UAE Dirham is pegged to the US Dollar, ensuring stable, low-risk capital preservation.",
      collection_title: "THE OASIS PRIVATE SELECTION",
      collection_subtitle: "Exquisite design details curated for the most discerning clients.",
      card1_tag: "SHORELINE",
      card1_title: "Lagoon Mansions",
      card1_desc: "Stately 6 & 7 bedroom residences offering direct shoreline paths, floor-to-ceiling glass paneling, and private infinity swimming pools.",
      card2_tag: "WATERFRONT",
      card2_title: "Shoreline Villas",
      card2_desc: "Premium 4 & 5 bedroom layouts surrounded by crystal clear swimmable waterways, curated garden lounges, and bespoke terrace decks.",
      card3_tag: "WELLNESS",
      card3_title: "Elite Residents Club",
      card3_desc: "Private concierge, state-of-the-art diagnostic wellness clinic, private sand beach access, and boutique dining options reserved for residents.",
      footer_disclaimer: "Disclaimer: This landing page is operated by an Authorized Broker Partner of Emaar Properties. Inventory availability, payment plans, and promotional allocations are subject to change.",
      footer_copyright: "&copy; 2026 Red Door Real Estate in Partnership with Emaar Properties. All rights reserved."
    },
    fr: {
      page_title: "The Oasis par Emaar - Portail d'Investissement Immobilier à Dubaï",
      banner: "ALLOCATION DE PORTEFEUILLE PRIVÉE &bull; VÉRIFICATION REQUISE POUR L'INVENTAIRE INTAKE",
      marketed_by: "COMMERCIALISÉ EN EXCLUSIVITÉ PAR",
      enquire_now: "S'INFORMER",
      vip_badge: "SUR INVITATION VIP UNIQUEMENT",
      hero_title: 'THE OASIS <br><span class="gold-text">PAR EMAAR</span>',
      hero_subtitle: "MANOIRS ET VILLAS EN BORD DE L'EAU",
      hero_intro: "Présentation de la plus récente et prestigieuse communauté d'Emaar à Dubaï. Conçu pour un cercle restreint, The Oasis propose des demeures somptueuses bordées de lagunes sereines, de plages de sable blanc et d'équipements de bien-être haut de gamme.",
      alert_title: "Limites Strictes de la Phase I",
      alert_desc: "Avec un nombre très limité de terrains pour manoirs en bord de lagune disponibles pour le lancement initial, la priorité est accordée aux clients enregistrés. Remplissez le formulaire de vérification pour postuler.",
      form_title: "Demande d'Allocation",
      form_desc: "Saisissez vos coordonnées pour vérifier votre profil et accéder aux grilles de prix privées.",
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
      unit_option_1: "Villa Bord de Lagune 4 Chambres",
      unit_option_2: "Manoir Bord de Lagune 5 Chambres",
      unit_option_3: "Domaine de Prestige en Bord de l'Eau",
      unit_option_4: "Indécis / Tout Afficher",
      btn_submit: "ENREGISTRER MON INTÉRÊT",
      success_title: "Merci de votre intérêt",
      success_desc: "Votre demande d'allocation privée a été enregistrée avec succès. Notre service clientèle VIP prendra contact avec vous dans les plus brefs délais afin de vous accompagner de manière personnalisée.",
      seal_text: "RED DOOR PRIVATE CLIENT CARE",
      btn_reset: "Soumettre une autre demande",
      highlights_title: "POURQUOI INVESTIR DANS L'IMMOBILIER À DUBAÏ ?",
      highlights_subtitle: "Profitez du marché immobilier de luxe le plus dynamique au monde.",
      stat1_name: "Impôt sur le Revenu de 0%",
      stat1_desc: "Conservez 100% de vos revenus, rendements locatifs et plus-values.",
      stat2_name: "Éligibilité au Golden Visa",
      stat2_desc: "Obtenez une résidence de longue durée pour vous et votre famille lors de l'achat.",
      stat3_name: "Rendements Locatifs Élevés",
      stat3_desc: "Les propriétés Emaar surpassent constamment les moyennes mondiales.",
      stat4_name: "Devise Stable",
      stat4_desc: "Le Dirham des EAU est indexé sur le dollar américain, assurant une préservation stable du capital.",
      collection_title: "LA SÉLECTION PRIVÉE THE OASIS",
      collection_subtitle: "Des détails de conception raffinés pour les clients les plus exigeants.",
      card1_tag: "RIVAGE",
      card1_title: "Manoirs Lagunaires",
      card1_desc: "Demeures majestueuses de 6 et 7 chambres avec accès direct au rivage, baies vitrées et piscines à débordement privées.",
      card2_tag: "BORD DE L'EAU",
      card2_title: "Villas de Rivage",
      card2_desc: "Propriétés haut de gamme de 4 et 5 chambres entourées de voies navigables cristallines, salons de jardin et terrasses sur mesure.",
      card3_tag: "BIEN-ÊTRE",
      card3_title: "Club des Résidents d'Élite",
      card3_desc: "Concierge privé, clinique de bien-être de pointe, accès à la plage de sable privée et restauration réservée aux résidents.",
      footer_disclaimer: "Avertissement: Cette page est gérée par un courtier agréé partenaire d'Emaar Properties. La disponibilité des stocks, les plans de paiement et les allocations promotionnelles sont sujets à modification.",
      footer_copyright: "&copy; 2026 Red Door Real Estate en partenariat avec Emaar Properties. Tous droits réservés."
    }
  };

  // Language Switch Logic
  function setLanguage(lang) {
    // 1. Update buttons styling
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 2. Update page title
    if (translations[lang] && translations[lang].page_title) {
      document.title = translations[lang].page_title;
    }

    // 3. Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        element.innerHTML = translations[lang][key];
      }
    });

    // 4. Update inputs placeholder with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key] !== undefined) {
        element.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // 5. Store language preference in localStorage
    localStorage.setItem('preferredLanguage', lang);
  }

  // Attach click listeners to language buttons
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Initialize page language from localStorage or browser default (fallback to French)
  const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
  setLanguage(savedLang);


  // Input Event Listeners to remove errors on typing
  firstNameInput.addEventListener('input', () => clearError(firstNameInput));
  lastNameInput.addEventListener('input', () => clearError(lastNameInput));
  emailInput.addEventListener('input', () => clearError(emailInput));
  phoneInput.addEventListener('input', () => clearError(phoneInput));

  // Active Formspree Endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzdlwwwo';

  // Handle Form Submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    
    if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPhoneValid) {
      return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    const formData = {
      first_name: firstNameInput.value.trim(),
      last_name: lastNameInput.value.trim(),
      email: emailInput.value.trim(),
      phone: countryCodeSelect.value + ' ' + phoneInput.value.trim(),
      unit: unitSelect.value
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
      // Revert button state
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
    // basic test: should be at least 6 digits without the country code
    if (value.length < 6) {
      showError(phoneInput);
      return false;
    }
    clearError(phoneInput);
    return true;
  }

  function showError(inputElement) {
    const formGroup = inputElement.closest('.form-group');
    formGroup.classList.add('has-error');
  }

  function clearError(inputElement) {
    const formGroup = inputElement.closest('.form-group');
    formGroup.classList.remove('has-error');
  }
});
