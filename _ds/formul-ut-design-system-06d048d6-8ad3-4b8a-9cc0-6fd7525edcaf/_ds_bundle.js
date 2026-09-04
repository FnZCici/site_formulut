/* @ds-bundle: {"format":4,"namespace":"FormulUTDesignSystem_06d048","components":[{"name":"IconCard","sourcePath":"components/content/IconCard.jsx"},{"name":"MemberCard","sourcePath":"components/content/MemberCard.jsx"},{"name":"MonoplaceCard","sourcePath":"components/content/MonoplaceCard.jsx"},{"name":"NewsCard","sourcePath":"components/content/NewsCard.jsx"},{"name":"PerkPill","sourcePath":"components/content/PerkPill.jsx"},{"name":"PoleAccordion","sourcePath":"components/content/PoleAccordion.jsx"},{"name":"SpecList","sourcePath":"components/content/SpecList.jsx"},{"name":"SponsorLogoCard","sourcePath":"components/content/SponsorLogoCard.jsx"},{"name":"StepList","sourcePath":"components/content/StepList.jsx"},{"name":"Timeline","sourcePath":"components/content/Timeline.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"PageHero","sourcePath":"components/core/PageHero.jsx"},{"name":"PhotoFrame","sourcePath":"components/core/PhotoFrame.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"TrackRule","sourcePath":"components/core/TrackRule.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"FormStatus","sourcePath":"components/forms/FormStatus.jsx"},{"name":"FilterBar","sourcePath":"components/navigation/FilterBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/content/IconCard.jsx":"6dc29d85ff3b","components/content/MemberCard.jsx":"bff1c664fec7","components/content/MonoplaceCard.jsx":"dddfa2045346","components/content/NewsCard.jsx":"344cffeda91a","components/content/PerkPill.jsx":"748dbe2245c4","components/content/PoleAccordion.jsx":"a4e3e78d9a15","components/content/SpecList.jsx":"ef692a07ce6c","components/content/SponsorLogoCard.jsx":"f9826a7760a1","components/content/StepList.jsx":"4102e89eef8d","components/content/Timeline.jsx":"32e5fe98b9c3","components/core/Button.jsx":"1c1ce21adcf5","components/core/Eyebrow.jsx":"db8eeffa3894","components/core/Icon.jsx":"ff6ddf827ca5","components/core/PageHero.jsx":"7d7cc31a8646","components/core/PhotoFrame.jsx":"bec87f165923","components/core/SectionHeader.jsx":"b5d2b7394f53","components/core/StatCard.jsx":"a2aa0f8cabd8","components/core/Tag.jsx":"15927cd5dc58","components/core/TrackRule.jsx":"846d66a631e0","components/forms/Field.jsx":"5bb3cd0d2324","components/forms/FormStatus.jsx":"ce97b95b2fdd","components/navigation/FilterBar.jsx":"e2b6152149bd","components/navigation/SiteFooter.jsx":"425dea60131c","components/navigation/SiteHeader.jsx":"436284e99bce","ui_kits/site-vitrine/ActualitesScreen.jsx":"50fc3be6eb62","ui_kits/site-vitrine/AssociationScreen.jsx":"21e338403cdb","ui_kits/site-vitrine/EquipeScreen.jsx":"ac188426ccfc","ui_kits/site-vitrine/HomeScreen.jsx":"3a1b8f5b76cc","ui_kits/site-vitrine/Layout.jsx":"a6aab75c2287","ui_kits/site-vitrine/MonoplaceScreen.jsx":"fed31018dc8c","ui_kits/site-vitrine/SoutenirScreen.jsx":"1327d45d7d40","ui_kits/site-vitrine/data.js":"0221de46ce17"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FormulUTDesignSystem_06d048 = window.FormulUTDesignSystem_06d048 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/SpecList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fiche technique en lignes clé/valeur. Sert pour les caractéristiques de la monoplace. */
function SpecList({
  items = [],
  layout = "rows",
  onLight = false,
  style,
  ...rest
}) {
  const key = onLight ? "var(--ink-a40)" : "var(--navy-400)";
  const val = onLight ? "var(--navy-900)" : "var(--ivory)";
  const line = onLight ? "var(--ink-a06)" : "var(--navy-a12)";
  if (layout === "inline") {
    return /*#__PURE__*/React.createElement("dl", _extends({
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-9)",
        margin: 0,
        ...style
      }
    }, rest), items.map(it => /*#__PURE__*/React.createElement("div", {
      key: it.label
    }, /*#__PURE__*/React.createElement("dt", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: "var(--text-h4)",
        textTransform: "uppercase",
        color: val
      }
    }, it.value), /*#__PURE__*/React.createElement("dd", {
      style: {
        fontSize: "var(--text-micro)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: key,
        margin: 0
      }
    }, it.label))));
  }
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      padding: "var(--space-6) 0",
      borderTop: i === 0 ? "none" : `var(--border-w) solid ${line}`
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: key
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-body-md)",
      textTransform: "uppercase",
      color: val,
      margin: 0,
      textAlign: "right"
    }
  }, it.value))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/content/SponsorLogoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Case du mur des partenaires. Les logos sont rendus tels que fournis, sur une tuile blanche :
   le lot mélange des PNG détourés et des images opaques sur fond clair — le blanc accueille les deux.
   Ne jamais leur appliquer de filtre de couleur : une marque partenaire ne se recolore pas.
   `placeholder` affiche l'emplacement libre « + votre logo ». */
function SponsorLogoCard({
  src,
  name,
  href,
  placeholder = false,
  onLight = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tileBorder = hover ? "var(--yellow)" : placeholder ? "var(--yellow-a40)" : onLight ? "var(--ink-a06)" : "var(--navy-a12)";
  const box = {
    display: "grid",
    placeItems: "center",
    minHeight: "96px",
    padding: "var(--space-8) var(--space-9)",
    background: placeholder ? "transparent" : "#FFFFFF",
    border: `var(--border-w) ${placeholder ? "dashed" : "solid"} ${tileBorder}`,
    borderRadius: "var(--radius-lg)",
    boxShadow: placeholder ? "none" : hover ? "var(--shadow-md)" : onLight ? "var(--shadow-sm)" : "none",
    transition: "border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    transform: hover && !placeholder ? "translateY(-2px)" : "none",
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  const inner = placeholder ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-caption)",
      textTransform: "uppercase",
      color: onLight ? "var(--yellow-deep)" : "var(--yellow)"
    }
  }, "+ Votre logo") : src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      maxHeight: "44px",
      maxWidth: "150px",
      width: "auto",
      objectFit: "contain"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-body-md)",
      textTransform: "uppercase",
      color: "var(--navy-700)"
    }
  }, name);
  if (href && !placeholder) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: box
  }, handlers, rest), inner);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: box
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { SponsorLogoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SponsorLogoCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StepList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Étapes numérotées — parcours de recrutement, parcours partenaire. */
function StepList({
  steps = [],
  onLight = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)",
      margin: 0,
      padding: 0,
      ...style
    }
  }, rest), steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "var(--space-8)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "40px",
      height: "40px",
      flexShrink: 0,
      display: "grid",
      placeItems: "center",
      borderRadius: "50%",
      background: "var(--yellow)",
      color: "var(--navy-900)",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-body-md)"
    }
  }, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      textTransform: "uppercase",
      color: onLight ? "var(--navy-900)" : "var(--ivory)",
      marginBottom: "var(--space-2)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-snug)",
      color: onLight ? "var(--ink-a70)" : "var(--navy-300)"
    }
  }, s.description)))));
}
Object.assign(__ds_scope, { StepList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepList.jsx", error: String((e && e.message) || e) }); }

// components/content/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Frise chronologique verticale — jalons de la saison. */
function Timeline({
  items = [],
  onLight = false,
  style,
  ...rest
}) {
  const line = onLight ? "var(--ink-a12)" : "var(--navy-a12)";
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      position: "relative",
      listStyle: "none",
      margin: 0,
      padding: "0 0 0 var(--space-12)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "12px",
      top: 0,
      bottom: 0,
      width: "2px",
      background: line,
      borderRadius: "2px"
    }
  }), items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: "relative",
      marginBottom: i === items.length - 1 ? 0 : "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-34px",
      top: "6px",
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      background: onLight ? "#FFFFFF" : "var(--navy-900)",
      border: `3px solid ${it.current ? "var(--yellow)" : onLight ? "var(--navy-700)" : "var(--navy-400)"}`,
      boxShadow: it.current ? "0 0 0 4px var(--yellow-a15)" : "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: onLight ? "var(--ink-a40)" : "var(--navy-400)",
      marginBottom: "var(--space-2)"
    }
  }, it.date), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      textTransform: "uppercase",
      color: onLight ? "var(--navy-900)" : "var(--ivory)",
      marginBottom: "var(--space-2)"
    }
  }, it.title), it.description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-snug)",
      color: onLight ? "var(--ink-a70)" : "var(--navy-300)",
      maxWidth: "38rem"
    }
  }, it.description) : null)));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FUT_BTN_SIZES = {
  sm: {
    padding: "10px 22px",
    fontSize: "13px",
    gap: "8px",
    iconSize: 15
  },
  md: {
    padding: "15px 32px",
    fontSize: "15px",
    gap: "10px",
    iconSize: 17
  },
  lg: {
    padding: "18px 40px",
    fontSize: "17px",
    gap: "10px",
    iconSize: 19
  }
};
const FUT_BTN_VARIANTS = {
  primary: {
    background: "var(--yellow)",
    color: "var(--navy-900)",
    borderColor: "var(--yellow)"
  },
  navy: {
    background: "var(--navy-900)",
    color: "var(--ivory)",
    borderColor: "var(--navy-900)"
  },
  outline: {
    background: "transparent",
    color: "var(--navy-900)",
    borderColor: "var(--ink-a12)"
  },
  "outline-ivory": {
    background: "transparent",
    color: "var(--ivory)",
    borderColor: "var(--navy-a35)"
  },
  ghost: {
    background: "transparent",
    color: "var(--yellow)",
    borderColor: "transparent"
  }
};
const FUT_BTN_HOVER = {
  primary: {
    background: "var(--yellow-dark)",
    borderColor: "var(--yellow-dark)",
    boxShadow: "var(--shadow-accent)"
  },
  navy: {
    background: "var(--navy-700)",
    borderColor: "var(--navy-700)",
    boxShadow: "var(--shadow-md)"
  },
  outline: {
    borderColor: "var(--navy-900)",
    background: "var(--ivory-warm)"
  },
  "outline-ivory": {
    borderColor: "var(--yellow)",
    color: "var(--yellow)"
  },
  ghost: {
    color: "var(--yellow-dark)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  fullWidth = false,
  disabled = false,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = FUT_BTN_SIZES[size] || FUT_BTN_SIZES.md;
  const v = FUT_BTN_VARIANTS[variant] || FUT_BTN_VARIANTS.primary;
  const h = !disabled && hover ? FUT_BTN_HOVER[variant] || {} : {};
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    padding: s.padding,
    borderRadius: "var(--radius-full)",
    border: "var(--border-w-strong) solid transparent",
    fontFamily: "var(--font-heading)",
    fontSize: s.fontSize,
    lineHeight: 1,
    letterSpacing: "var(--tracking-heading)",
    textTransform: "uppercase",
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-spring), box-shadow var(--dur-base) var(--ease-out)",
    transform: disabled ? "none" : press ? "translateY(0) scale(0.98)" : hover ? "var(--lift)" : "none",
    ...v,
    ...h,
    ...style
  };
  const glyph = icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      opacity: 0.9
    }
  }, icon) : null;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconPosition === "left" ? glyph : null, /*#__PURE__*/React.createElement("span", null, children), iconPosition === "right" ? glyph : null);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: base
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Surtitre à pastille. Ouvre chaque section — jamais deux dans la même section. */
function Eyebrow({
  children,
  onLight = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "7px 16px",
      borderRadius: "var(--radius-full)",
      border: `var(--border-w) solid ${onLight ? "var(--yellow)" : "var(--yellow-a40)"}`,
      background: onLight ? "var(--yellow-pale)" : "var(--yellow-a15)",
      color: onLight ? "var(--navy-900)" : "var(--yellow)",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-label)",
      lineHeight: 1.3,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      background: onLight ? "var(--yellow-dark)" : "var(--yellow)",
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Jeu d'icônes Lucide (ISC) — trait fin, géométrique, cohérent avec le logo Formul'UT.
   Les SVG sources sont dans assets/icons/lucide/. Voir readme.md § ICONOGRAPHIE. */
const FUT_ICON_PATHS = {
  "wind": '<path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path> <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path> <path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path>',
  "wrench": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path>',
  "flame": '<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path>',
  "battery-charging": '<path d="m11 7-3 5h4l-3 5"></path> <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path> <path d="M22 14v-4"></path> <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path>',
  "circle-dot": '<circle cx="12" cy="12" r="1"></circle> <circle cx="12" cy="12" r="10"></circle>',
  "cpu": '<path d="M12 20v2"></path> <path d="M12 2v2"></path> <path d="M17 20v2"></path> <path d="M17 2v2"></path> <path d="M2 12h2"></path> <path d="M2 17h2"></path> <path d="M2 7h2"></path> <path d="M20 12h2"></path> <path d="M20 17h2"></path> <path d="M20 7h2"></path> <path d="M7 20v2"></path> <path d="M7 2v2"></path> <rect x="4" y="4" width="16" height="16" rx="2"></rect> <rect x="8" y="8" width="8" height="8" rx="1"></rect>',
  "box": '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path> <path d="m3.3 7 8.7 5 8.7-5"></path> <path d="M12 22V12"></path>',
  "flag": '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path>',
  "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <path d="M16 3.128a4 4 0 0 1 0 7.744"></path> <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path> <circle cx="9" cy="7" r="4"></circle>',
  "handshake": '<path d="m11 17 2 2a1 1 0 1 0 3-3"></path> <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path> <path d="m21 3 1 11h-2"></path> <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path> <path d="M3 4h8"></path>',
  "mail": '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path> <rect x="2" y="4" width="20" height="16" rx="2"></rect>',
  "file-text": '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path> <path d="M14 2v5a1 1 0 0 0 1 1h5"></path> <path d="M10 9H8"></path> <path d="M16 13H8"></path> <path d="M16 17H8"></path>',
  "phone": '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>',
  "chevron-down": '<path d="m6 9 6 6 6-6"></path>',
  "arrow-right": '<path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path>',
  "download": '<path d="M12 15V3"></path> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path> <path d="m7 10 5 5 5-5"></path>',
  "calendar": '<path d="M8 2v3"></path> <path d="M16 2v3"></path> <rect x="3" y="3" width="18" height="18" rx="2"></rect> <path d="M3 9h18"></path>',
  "leaf": '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path> <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>',
  "target": '<circle cx="12" cy="12" r="10"></circle> <circle cx="12" cy="12" r="6"></circle> <circle cx="12" cy="12" r="2"></circle>',
  "gauge": '<path d="m12 14 4-4"></path> <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>',
  "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle>',
  "megaphone": '<path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path> <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path> <path d="M8 6v8"></path>',
  "trophy": '<path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2"></path> <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2"></path> <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3"></path> <path d="M4 22h16"></path> <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path> <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3"></path>',
  "zap": '<path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"></path>',
  "menu": '<path d="M4 5h16"></path> <path d="M4 12h16"></path> <path d="M4 19h16"></path>',
  "x": '<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path>',
  "check": '<path d="M20 6 9 17l-5-5"></path>',
  "minus": '<path d="M5 12h14"></path>',
  "settings-2": '<path d="M14 17H5"></path> <path d="M19 7h-9"></path> <circle cx="17" cy="17" r="3"></circle> <circle cx="7" cy="7" r="3"></circle>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  label,
  style,
  ...rest
}) {
  const inner = FUT_ICON_PATHS[name];
  if (!inner) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: "block",
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }, rest));
}
const ICON_NAMES = Object.keys(FUT_ICON_PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/IconCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Carte à icône : un argument, une valeur, un moyen de contact. Remplace les trois
   variantes du site existant (.why-card, .valeur-card, .direct-card) par un seul bloc. */
function IconCard({
  icon,
  title,
  children,
  action,
  onLight = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      height: "100%",
      padding: "var(--card-pad-md)",
      background: onLight ? "#FFFFFF" : "var(--navy-800)",
      border: `var(--border-w) solid ${hover ? "var(--yellow-a40)" : onLight ? "var(--ink-a06)" : "var(--navy-a12)"}`,
      borderRadius: "var(--radius-lg)",
      minWidth: 0,
      boxShadow: hover && onLight ? "var(--shadow-md)" : onLight ? "var(--shadow-sm)" : "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "48px",
      height: "48px",
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-md)",
      background: onLight ? "var(--yellow-pale)" : "var(--yellow-a15)",
      border: "var(--border-w) solid var(--yellow-a40)",
      color: onLight ? "var(--yellow-deep)" : "var(--yellow)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      textTransform: "uppercase",
      overflowWrap: "break-word",
      color: onLight ? "var(--navy-900)" : "var(--ivory)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-snug)",
      color: onLight ? "var(--ink-a70)" : "var(--navy-300)",
      flex: 1
    }
  }, children), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, action) : null);
}
Object.assign(__ds_scope, { IconCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/IconCard.jsx", error: String((e && e.message) || e) }); }

// components/content/PerkPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Pastille de contrepartie. `highlight` met en avant les contreparties les plus visibles. */
function PerkPill({
  children,
  highlight = false,
  onLight = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "7px 14px",
      borderRadius: "var(--radius-full)",
      border: `var(--border-w) solid ${highlight ? "var(--yellow)" : onLight ? "var(--ink-a12)" : "var(--navy-a12)"}`,
      background: highlight ? "var(--yellow-a15)" : onLight ? "var(--ivory-warm)" : "var(--navy-a04)",
      color: highlight ? onLight ? "var(--yellow-deep)" : "var(--yellow)" : onLight ? "var(--ink-a70)" : "var(--navy-a70)",
      fontSize: "var(--text-caption)",
      lineHeight: 1.3,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13
  }), children);
}
Object.assign(__ds_scope, { PerkPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PerkPill.jsx", error: String((e && e.message) || e) }); }

// components/content/PoleAccordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Accordéon des pôles techniques. Un seul pôle ouvert à la fois. */
function PoleAccordion({
  poles = [],
  defaultOpen = null,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), poles.map((p, i) => /*#__PURE__*/React.createElement(PoleItem, {
    key: p.name,
    pole: p,
    open: open === i,
    onToggle: () => setOpen(open === i ? null : i)
  })));
}
function PoleItem({
  pole,
  open,
  onToggle
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: open ? "var(--navy-700)" : "var(--navy-800)",
      border: `var(--border-w) solid ${open || hover ? "var(--yellow-a40)" : "var(--navy-a12)"}`,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      transition: "border-color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-expanded": open,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)",
      padding: "var(--space-8) var(--space-9)",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "44px",
      height: "44px",
      flexShrink: 0,
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--radius-md)",
      background: "var(--yellow-a15)",
      border: "var(--border-w) solid var(--yellow-a40)",
      color: "var(--yellow)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: pole.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      textTransform: "uppercase",
      color: "var(--ivory)"
    }
  }, pole.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-caption)",
      color: "var(--navy-300)",
      marginTop: "2px"
    }
  }, pole.summary)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--navy-300)",
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-9) var(--space-9) calc(var(--space-9) + 44px + var(--space-8))"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--navy-a70)",
      maxWidth: "44rem"
    }
  }, pole.description)) : null);
}
Object.assign(__ds_scope, { PoleAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PoleAccordion.jsx", error: String((e && e.message) || e) }); }

// components/core/PhotoFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Cadre photo de la marque : contraste renforcé, grain fin, voile bleu nuit optionnel.
   Toute photo publiée passe par ce traitement — c'est la signature visuelle de l'imagerie. */
function PhotoFrame({
  src,
  alt = "",
  ratio = "4/3",
  radius = "var(--radius-xl)",
  scrim = false,
  grain = true,
  overlay,
  badge,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      position: "relative",
      aspectRatio: ratio,
      borderRadius: radius,
      overflow: "hidden",
      background: "var(--navy-800)",
      border: "var(--border-w) solid var(--navy-a12)",
      margin: 0,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "var(--photo-filter)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-caption)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--navy-400)",
      textAlign: "center",
      padding: "var(--space-8)"
    }
  }, alt || "Photo à fournir"), grain ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--photo-grain)",
      mixBlendMode: "overlay",
      pointerEvents: "none"
    }
  }) : null, scrim ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-navy)",
      pointerEvents: "none"
    }
  }) : null, overlay ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, overlay) : null, badge ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "absolute",
      left: "var(--space-10)",
      right: "var(--space-10)",
      bottom: "var(--space-10)",
      background: "var(--navy-900)",
      border: "var(--border-w) solid var(--navy-a12)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-8) var(--space-9)"
    }
  }, badge) : null);
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/MemberCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fiche membre du bureau : photo, nom, rôle, pôle de rattachement. */
function MemberCard({
  name,
  role,
  pole,
  photo,
  onLight = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const surface = onLight ? {
    bg: "#FFFFFF",
    border: "var(--ink-a06)",
    name: "var(--navy-900)",
    role: "var(--yellow-deep)",
    pole: "var(--ink-a40)",
    shadow: "var(--shadow-sm)",
    hoverShadow: "var(--shadow-md)"
  } : {
    bg: "var(--navy-800)",
    border: "var(--navy-a12)",
    name: "var(--ivory)",
    role: "var(--yellow)",
    pole: "var(--navy-400)",
    shadow: "none",
    hoverShadow: "var(--shadow-deep)"
  };
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: surface.bg,
      border: `var(--border-w) solid ${surface.border}`,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      transform: hover ? "translateY(-4px)" : "none",
      boxShadow: hover ? surface.hoverShadow : surface.shadow,
      transition: "transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.PhotoFrame, {
    src: photo,
    alt: photo ? name : "Photo à fournir",
    ratio: "1/1",
    radius: "0",
    style: {
      border: "none",
      background: onLight ? "var(--ivory-warm)" : "var(--navy-800)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      textTransform: "uppercase",
      color: surface.name
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-caption)",
      color: surface.role,
      marginTop: "var(--space-1)"
    }
  }, role), pole ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: surface.pole,
      marginTop: "var(--space-3)"
    }
  }, pole) : null));
}
Object.assign(__ds_scope, { MemberCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MemberCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* En-tête de section : surtitre + titre, éventuellement une action alignée à droite. */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  action,
  align = "left",
  onLight = false,
  style,
  ...rest
}) {
  const centered = align === "center";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: centered ? "center" : "flex-end",
      justifyContent: action ? "space-between" : centered ? "center" : "flex-start",
      flexDirection: centered ? "column" : "row",
      flexWrap: "wrap",
      gap: "var(--space-8)",
      marginBottom: "var(--space-13)",
      textAlign: centered ? "center" : "left",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: centered ? "42rem" : "34rem"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    onLight: onLight
  }, eyebrow)) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-display-lg)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-heading)",
      textTransform: "uppercase",
      color: onLight ? "var(--navy-900)" : "var(--ivory)",
      margin: 0
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-7)",
      fontSize: "var(--text-body-lg)",
      lineHeight: "var(--leading-body)",
      color: onLight ? "var(--ink-a70)" : "var(--navy-a70)",
      maxWidth: "34rem",
      marginLeft: centered ? "auto" : undefined,
      marginRight: centered ? "auto" : undefined
    }
  }, subtitle) : null), action);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Chiffre clé. Le compteur s'anime au premier affichage (comportement du site existant). */
function StatCard({
  value,
  suffix = "",
  label,
  animate = true,
  onLight = false,
  style,
  ...rest
}) {
  const numeric = typeof value === "number";
  const [shown, setShown] = React.useState(animate && numeric ? 0 : value);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!animate || !numeric) {
      setShown(value);
      return;
    }
    const node = ref.current;
    if (!node) return;
    let raf = 0;
    const run = () => {
      const start = performance.now();
      const step = now => {
        const p = Math.min((now - start) / 1600, 1);
        setShown(Math.floor((1 - Math.pow(1 - p, 3)) * value));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        run();
        obs.disconnect();
      }
    }, {
      threshold: 0.4
    });
    obs.observe(node);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, animate, numeric]);
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: onLight ? "#FFFFFF" : "var(--navy-800)",
      border: `var(--border-w) solid ${onLight ? "var(--ink-a06)" : "var(--navy-a12)"}`,
      borderRadius: "var(--radius-lg)",
      padding: "var(--card-pad-lg) var(--card-pad-md)",
      textAlign: "center",
      boxShadow: hover ? "var(--shadow-md)" : onLight ? "var(--shadow-sm)" : "none",
      transform: hover ? "translateY(-4px)" : "none",
      transition: "transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(1.75rem,3vw,2.5rem)",
      lineHeight: 1,
      color: onLight ? "var(--navy-900)" : "var(--yellow)",
      marginBottom: "var(--space-4)"
    }
  }, shown, suffix), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-caption)",
      lineHeight: "var(--leading-snug)",
      color: onLight ? "var(--ink-a70)" : "var(--navy-300)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Étiquette de catégorie. Trois familles héritées du site : thermique, électrique, information.
   Exprimées dans les quatre couleurs de charte — pas de vert ni d'orange hors palette. */
const FUT_TAG_TONES = {
  thermique: {
    background: "var(--yellow-a15)",
    color: "var(--yellow)",
    borderColor: "var(--yellow-a40)"
  },
  electrique: {
    background: "var(--navy-a08)",
    color: "var(--ivory)",
    borderColor: "var(--navy-a35)"
  },
  info: {
    background: "var(--navy-a04)",
    color: "var(--navy-300)",
    borderColor: "var(--navy-a12)"
  },
  accent: {
    background: "var(--yellow)",
    color: "var(--navy-900)",
    borderColor: "var(--yellow)"
  }
};
const FUT_TAG_TONES_LIGHT = {
  thermique: {
    background: "var(--yellow-pale)",
    color: "var(--yellow-deep)",
    borderColor: "var(--yellow-a40)"
  },
  electrique: {
    background: "var(--navy-100)",
    color: "var(--navy-700)",
    borderColor: "var(--ink-a12)"
  },
  info: {
    background: "var(--ivory-warm)",
    color: "var(--ink-a70)",
    borderColor: "var(--ink-a12)"
  },
  accent: {
    background: "var(--yellow)",
    color: "var(--navy-900)",
    borderColor: "var(--yellow)"
  }
};
function Tag({
  children,
  tone = "info",
  onLight = false,
  icon,
  style,
  ...rest
}) {
  const t = (onLight ? FUT_TAG_TONES_LIGHT : FUT_TAG_TONES)[tone] || FUT_TAG_TONES.info;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "5px 14px",
      borderRadius: "var(--radius-full)",
      border: "var(--border-w) solid transparent",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-micro)",
      lineHeight: 1.4,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      ...t,
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/NewsCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Carte d'actualité. `featured` passe la carte en format large et horizontal. */
function NewsCard({
  title,
  excerpt,
  date,
  tag,
  tagTone = "info",
  photo,
  photoAlt,
  href,
  linkLabel = "Lire la suite",
  featured = false,
  onLight = true,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const surface = onLight ? {
    background: "#FFFFFF",
    borderColor: "var(--ink-a06)",
    title: "var(--navy-900)",
    body: "var(--ink-a70)",
    meta: "var(--ink-a40)"
  } : {
    background: "var(--navy-800)",
    borderColor: "var(--navy-a12)",
    title: "var(--ivory)",
    body: "var(--navy-300)",
    meta: "var(--navy-400)"
  };
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: featured ? "row" : "column",
      background: surface.background,
      border: `var(--border-w) solid ${surface.borderColor}`,
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-md)" : onLight ? "var(--shadow-sm)" : "none",
      transform: hover ? "var(--lift-card)" : "none",
      transition: "transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      width: featured ? "45%" : "100%"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PhotoFrame, {
    src: photo,
    alt: photoAlt || title,
    ratio: featured ? "4/3" : "16/9",
    radius: "0",
    style: {
      border: "none",
      height: featured ? "100%" : undefined
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: featured ? "var(--space-13)" : "var(--space-9)",
      display: "flex",
      flexDirection: "column",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      marginBottom: "var(--space-5)",
      flexWrap: "wrap"
    }
  }, tag ? /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: tagTone,
    onLight: onLight
  }, tag) : null, date ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-label)",
      color: surface.meta
    }
  }, date) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: featured ? "var(--text-h2)" : "var(--text-h3)",
      lineHeight: "var(--leading-tight)",
      textTransform: "uppercase",
      color: surface.title,
      marginBottom: "var(--space-4)"
    }
  }, title), excerpt ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-snug)",
      color: surface.body,
      flex: 1
    }
  }, excerpt) : null, href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      marginTop: "var(--space-8)",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-caption)",
      textTransform: "uppercase",
      color: onLight ? "var(--navy-700)" : "var(--yellow)"
    }
  }, linkLabel, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 14
  })) : null));
}
Object.assign(__ds_scope, { NewsCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NewsCard.jsx", error: String((e && e.message) || e) }); }

// components/core/TrackRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Filet décoratif de piste. Le rouge #C80000 ne sert qu'à ça : jamais un état d'erreur. */
function TrackRule({
  tone = "yellow",
  thickness = 6,
  orientation = "horizontal",
  split = false,
  style,
  ...rest
}) {
  const color = tone === "red" ? "var(--red)" : tone === "hairline" ? "var(--navy-a12)" : "var(--yellow)";
  const cross = typeof thickness === "number" ? `${thickness}px` : thickness;
  const vertical = orientation === "vertical";
  const box = {
    display: "block",
    width: vertical ? cross : "100%",
    height: vertical ? "100%" : cross,
    borderRadius: "var(--radius-full)",
    flexShrink: 0,
    ...style
  };
  if (!split) return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...box,
      background: color
    }
  }, rest));
  const stops = vertical ? "linear-gradient(to bottom, var(--yellow) 0 55%, var(--red) 55% 100%)" : "linear-gradient(to right, var(--yellow) 0 55%, var(--red) 55% 100%)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...box,
      background: stops
    }
  }, rest));
}
Object.assign(__ds_scope, { TrackRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TrackRule.jsx", error: String((e && e.message) || e) }); }

// components/content/MonoplaceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Carte monoplace : la présentation d'une voiture de l'écurie (FS01, FS02…). */
function MonoplaceCard({
  name,
  tag,
  tagTone = "thermique",
  tagline,
  photo,
  photoAlt,
  specs = [],
  action,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      background: "var(--navy-800)",
      border: "var(--border-w) solid var(--navy-a12)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      transform: hover ? "var(--lift-card)" : "none",
      boxShadow: hover ? "var(--shadow-deep)" : "none",
      transition: "transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.TrackRule, {
    tone: tagTone === "electrique" ? "hairline" : "yellow",
    thickness: 6,
    style: {
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-10) var(--space-10) 0"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PhotoFrame, {
    src: photo,
    alt: photoAlt,
    ratio: "16/9",
    radius: "var(--radius-lg)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-10)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      flex: 1
    }
  }, tag ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: tagTone
  }, tag)) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.875rem",
      lineHeight: 1,
      letterSpacing: "var(--tracking-display)",
      color: "var(--ivory)",
      margin: 0
    }
  }, name), tagline ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-snug)",
      color: "var(--navy-300)"
    }
  }, tagline) : null, specs.length ? /*#__PURE__*/React.createElement("dl", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-8)",
      marginTop: "auto",
      paddingTop: "var(--space-7)"
    }
  }, specs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      color: "var(--ivory)",
      textTransform: "uppercase"
    }
  }, s.value), /*#__PURE__*/React.createElement("dd", {
    style: {
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--navy-400)",
      margin: 0
    }
  }, s.label)))) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-7)"
    }
  }, action) : null));
}
Object.assign(__ds_scope, { MonoplaceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MonoplaceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/PageHero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Bandeau de tête des pages intérieures. La page d'accueil utilise son propre hero (voir ui_kits). */
function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  actions,
  stats,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: "relative",
      background: "var(--navy-900)",
      padding: "calc(var(--nav-h) + var(--space-15)) 0 var(--space-17)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-140px",
      right: "-120px",
      width: "520px",
      height: "520px",
      background: "radial-gradient(circle, rgba(246,182,0,0.14) 0%, transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--max-w)",
      margin: "0 auto",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "44rem"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow)) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-xl)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color: "var(--ivory)",
      margin: 0
    }
  }, title, accent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--yellow)"
    }
  }, accent)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--space-9) 0",
      maxWidth: "160px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TrackRule, {
    split: true,
    thickness: 3
  })), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-lg)",
      lineHeight: "var(--leading-body)",
      color: "var(--navy-a70)",
      maxWidth: "36rem"
    }
  }, subtitle) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      marginTop: "var(--space-12)"
    }
  }, actions) : null), stats && stats.length ? /*#__PURE__*/React.createElement("dl", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, minmax(0,1fr))`,
      gap: "var(--space-9)",
      marginTop: "var(--space-15)",
      paddingTop: "var(--space-11)",
      borderTop: "var(--border-w) solid var(--navy-a12)"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.75rem",
      lineHeight: 1,
      color: "var(--yellow)",
      marginBottom: "var(--space-3)"
    }
  }, s.value), /*#__PURE__*/React.createElement("dd", {
    style: {
      fontSize: "var(--text-caption)",
      color: "var(--navy-300)",
      margin: 0
    }
  }, s.label)))) : null));
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PageHero.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Champ de formulaire. `as="textarea"` pour le message ; `as="select"` avec `options`. */
function Field({
  label,
  name,
  type = "text",
  as = "input",
  placeholder,
  required = false,
  hint,
  options = [],
  rows = 5,
  value,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const control = {
    width: "100%",
    padding: "14px 16px",
    background: "var(--navy-a04)",
    border: `var(--border-w) solid ${focus ? "var(--yellow)" : "var(--navy-a12)"}`,
    borderRadius: "var(--radius-md)",
    color: "var(--ivory)",
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-body-md)",
    lineHeight: "var(--leading-snug)",
    outline: "none",
    transition: "border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)",
    resize: as === "textarea" ? "vertical" : undefined
  };
  const shared = {
    id: name,
    name,
    placeholder,
    required,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: control
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("label", {
    htmlFor: name,
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--navy-300)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--yellow)"
    }
  }, " *") : null), as === "textarea" ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, shared)) : as === "select" ? /*#__PURE__*/React.createElement("select", shared, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o,
    style: {
      color: "var(--navy-900)"
    }
  }, o))) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, shared)), hint ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-label)",
      color: "var(--navy-400)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormStatus.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Retour d'état d'un formulaire. Le rouge est décoratif dans la charte : une erreur se
   signale par l'icône et le texte, avec un filet rouge — jamais par un fond rouge plein. */
const FUT_STATUS = {
  idle: null,
  pending: {
    icon: "settings-2",
    color: "var(--navy-300)",
    border: "var(--navy-a12)"
  },
  success: {
    icon: "check",
    color: "var(--yellow)",
    border: "var(--yellow-a40)"
  },
  error: {
    icon: "x",
    color: "var(--red)",
    border: "var(--red)"
  }
};
function FormStatus({
  state = "idle",
  children,
  style,
  ...rest
}) {
  const s = FUT_STATUS[state];
  if (!s) return null;
  return /*#__PURE__*/React.createElement("p", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-5) var(--space-7)",
      borderRadius: "var(--radius-md)",
      border: `var(--border-w) solid ${s.border}`,
      background: "var(--navy-a04)",
      color: s.color,
      fontSize: "var(--text-body-sm)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 16
  }), children);
}
Object.assign(__ds_scope, { FormStatus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormStatus.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FilterBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Barre de filtres en pastilles. Utilisée sur la page Actualités. */
function FilterBar({
  options = [],
  value,
  onChange,
  onLight = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      flexWrap: "wrap",
      ...style
    }
  }, rest), options.map(opt => {
    const val = typeof opt === "string" ? opt : opt.value;
    const label = typeof opt === "string" ? opt : opt.label;
    return /*#__PURE__*/React.createElement(FilterPill, {
      key: val,
      active: val === value,
      onLight: onLight,
      onClick: () => onChange && onChange(val)
    }, label);
  }));
}
function FilterPill({
  active,
  onLight,
  onClick,
  children
}) {
  const [hover, setHover] = React.useState(false);
  const activeStyle = {
    background: "var(--yellow)",
    color: "var(--navy-900)",
    borderColor: "var(--yellow)"
  };
  const idle = onLight ? {
    background: "#FFFFFF",
    color: "var(--ink-a70)",
    borderColor: "var(--ink-a12)"
  } : {
    background: "var(--navy-a04)",
    color: "var(--navy-a70)",
    borderColor: "var(--navy-a12)"
  };
  const hovered = {
    borderColor: "var(--yellow)",
    color: onLight ? "var(--navy-900)" : "var(--yellow)"
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: "9px 20px",
      borderRadius: "var(--radius-full)",
      border: "var(--border-w) solid transparent",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-caption)",
      letterSpacing: "var(--tracking-heading)",
      textTransform: "uppercase",
      transition: "all var(--dur-fast) var(--ease-out)",
      ...idle,
      ...(hover && !active ? hovered : {}),
      ...(active ? activeStyle : {})
    }
  }, children);
}
Object.assign(__ds_scope, { FilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Liens sociaux fournis par l'écurie. */
const FUT_SOCIALS = [{
  icon: "users",
  label: "LinkedIn",
  href: "https://www.linkedin.com/company/formul-ut/"
}, {
  icon: "zap",
  label: "Instagram",
  href: "https://www.instagram.com/formul.ut/"
}, {
  icon: "flag",
  label: "Facebook",
  href: "https://www.facebook.com/formul.ut"
}];

/* Pied de page. Marque, colonnes de liens, coordonnées, mention loi 1901. */
function SiteFooter({
  logoSrc = "assets/logos/formulut-ivory-on-navy.png",
  blurb = "Écurie Formula Student de l'Université de Technologie de Compiègne. 100 % étudiante, 100 % piste.",
  columns = [],
  socials = FUT_SOCIALS,
  email = "formulut@gmail.com",
  address = "UTC, Compiègne",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--navy-900)",
      borderTop: "var(--border-w) solid var(--navy-a12)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.TrackRule, {
    split: true,
    thickness: 3,
    style: {
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--max-w)",
      margin: "0 auto",
      padding: "var(--space-16) var(--gutter) var(--space-11)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `2fr repeat(${Math.max(columns.length, 1)}, 1fr) 1fr`,
      gap: "var(--space-13)",
      marginBottom: "var(--space-14)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Formul'UT",
    style: {
      height: "48px",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-8)",
      fontSize: "var(--text-body-sm)",
      lineHeight: "var(--leading-body)",
      color: "var(--navy-300)",
      maxWidth: "17rem"
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      marginTop: "var(--space-9)",
      flexWrap: "wrap"
    }
  }, socials.filter(s => s.href && s.href !== "#").map(s => /*#__PURE__*/React.createElement(SocialPill, _extends({
    key: s.label
  }, s))))), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--navy-400)",
      marginBottom: "var(--space-8)"
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      margin: 0,
      padding: 0
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement(FooterLink, {
    href: l.href
  }, l.label)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--navy-400)",
      marginBottom: "var(--space-8)"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      margin: 0,
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 15,
    color: "var(--navy-400)"
  }), /*#__PURE__*/React.createElement(FooterLink, {
    href: `mailto:${email}`
  }, email)), /*#__PURE__*/React.createElement("li", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center",
      fontSize: "var(--text-body-sm)",
      color: "var(--navy-300)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 15,
    color: "var(--navy-400)"
  }), address)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "var(--border-w) solid var(--navy-a12)",
      paddingTop: "var(--space-10)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "var(--space-5)",
      fontSize: "var(--text-caption)",
      color: "var(--navy-400)"
    }
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 2026 Formul'UT \u2014 Association loi 1901"), /*#__PURE__*/React.createElement("p", null, "Universit\xE9 de Technologie de Compi\xE8gne"))));
}
function FooterLink({
  href,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontSize: "var(--text-body-sm)",
      color: hover ? "var(--yellow)" : "var(--navy-300)",
      transition: "color var(--dur-fast) var(--ease-out)"
    }
  }, children);
}
function SocialPill({
  icon,
  label,
  href
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "8px 16px",
      borderRadius: "var(--radius-full)",
      border: `1px solid ${hover ? "var(--yellow)" : "var(--navy-a12)"}`,
      background: hover ? "var(--yellow)" : "var(--navy-a08)",
      color: hover ? "var(--navy-900)" : "var(--navy-a70)",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-micro)",
      textTransform: "uppercase",
      transition: "all var(--dur-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }), label);
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Barre de navigation fixe. Transparente en haut de page, voilée et floutée au défilement. */
function SiteHeader({
  logoSrc = "assets/logos/formulut-ivory-on-navy.png",
  logoSrcOnLight,
  items = [],
  currentHref,
  ctaLabel = "Nous soutenir",
  ctaHref = "#soutenir",
  solid = false,
  onLight = false,
  style,
  ...rest
}) {
  const [scrolled, setScrolled] = React.useState(solid);
  const [open, setOpen] = React.useState(false);
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 1040px)");
    const sync = () => {
      setNarrow(mq.matches);
      if (!mq.matches) setOpen(false);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  React.useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);
  const filled = solid || scrolled;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      height: "var(--nav-h)",
      display: "flex",
      alignItems: "center",
      background: filled ? "rgba(0,6,46,0.88)" : "transparent",
      backdropFilter: filled ? "var(--blur-nav)" : "none",
      borderBottom: `var(--border-w) solid ${filled ? "var(--navy-a12)" : "transparent"}`,
      transition: "background var(--dur-slow) var(--ease-out), border-color var(--dur-slow) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "var(--max-w)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: items.length ? items[0].href : "#",
    style: {
      display: "flex",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: onLight && !filled && logoSrcOnLight ? logoSrcOnLight : logoSrc,
    alt: "Formul'UT",
    style: {
      height: "40px",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: narrow ? "none" : "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      listStyle: "none",
      flex: "0 1 auto",
      margin: 0,
      padding: 0
    }
  }, items.map(it => {
    const active = it.href === currentHref;
    return /*#__PURE__*/React.createElement("li", {
      key: it.href,
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(NavLink, {
      href: it.href,
      active: active,
      onLight: onLight && !filled
    }, it.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      marginLeft: "auto",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: ctaHref,
    size: "sm",
    variant: "primary"
  }, ctaLabel), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-label": "Menu",
    style: {
      display: narrow ? "block" : "none",
      padding: "var(--space-3)",
      color: onLight && !filled ? "var(--navy-900)" : "var(--ivory)"
    },
    "data-fut-burger": true
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? "x" : "menu",
    size: 22
  }))))), open && narrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: "var(--nav-h)",
      left: "var(--space-5)",
      right: "var(--space-5)",
      zIndex: 999,
      background: "var(--navy-800)",
      border: "var(--border-w) solid var(--navy-a12)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-deep)",
      padding: "var(--space-7)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.href,
    href: it.href,
    onClick: () => setOpen(false),
    style: {
      padding: "var(--space-5) var(--space-7)",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-body-md)",
      textTransform: "uppercase",
      color: "var(--ivory)"
    }
  }, it.label))) : null);
}
function NavLink({
  href,
  active,
  onLight = false,
  children
}) {
  const [hover, setHover] = React.useState(false);
  const accent = onLight ? "var(--yellow-deep)" : "var(--yellow)";
  const idle = onLight ? "var(--ink-a70)" : "var(--navy-a70)";
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      padding: "8px 13px",
      borderRadius: "var(--radius-full)",
      fontFamily: "var(--font-heading)",
      fontSize: "13px",
      letterSpacing: "var(--tracking-heading)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      color: active || hover ? accent : idle,
      background: active ? onLight ? "var(--ink-a06)" : "var(--navy-a08)" : "transparent",
      transition: "color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)"
    }
  }, children);
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/ActualitesScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  PageHero,
  SectionHeader,
  FilterBar,
  NewsCard,
  Timeline
} = window.FormulUTDesignSystem_06d048;

/* Actualités — filtres, cartes, frise de la saison. */
function ActualitesScreen({
  go
}) {
  const D = window.FUT_DATA;
  const [filtre, setFiltre] = React.useState("Tout");
  const options = ["Tout", ...Array.from(new Set(D.actualites.map(a => a.tag)))];
  const liste = filtre === "Tout" ? D.actualites : D.actualites.filter(a => a.tag === filtre);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Actualit\xE9s",
    title: "L'\xE9curie",
    accent: "en direct.",
    subtitle: "Roulages, comp\xE9titions, avanc\xE9es \xE0 l'atelier. Deux publications sont en ligne \u2014 les suivantes sont \xE0 fournir par l'\xE9curie."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: "var(--nav-h)",
      zIndex: 100,
      background: "rgba(0,6,46,0.9)",
      backdropFilter: "var(--blur-nav)",
      borderBottom: "var(--border-w) solid var(--navy-a12)",
      padding: "var(--space-11) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(FilterBar, {
    options: options,
    value: filtre,
    onChange: setFiltre
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, liste.length ? /*#__PURE__*/React.createElement(Grid, {
    cols: liste.length === 1 ? 1 : 2
  }, liste.map(a => /*#__PURE__*/React.createElement(NewsCard, _extends({
    key: a.title
  }, a, {
    onLight: true
  })))) : /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-a70)"
    }
  }, "Aucune publication dans cette rubrique pour l'instant.")), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "var(--section-y-tight)",
    style: {
      borderTop: "var(--border-w) solid var(--ink-a06)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    onLight: true,
    eyebrow: "La saison",
    title: "Les jalons"
  }), /*#__PURE__*/React.createElement(Timeline, {
    onLight: true,
    items: D.jalons
  })), /*#__PURE__*/React.createElement(CtaBand, {
    eyebrow: "Partenariat",
    title: "Suivre l'\xE9curie, c'est bien. La soutenir, c'est mieux.",
    text: "Les dons de tous les niveaux sont bienvenus, du particulier \xE0 l'entreprise.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => go("soutenir")
    }, "Nous soutenir")
  }));
}
Object.assign(window, {
  ActualitesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/ActualitesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/AssociationScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  PageHero,
  SectionHeader,
  PhotoFrame,
  IconCard,
  StepList,
  Timeline
} = window.FormulUTDesignSystem_06d048;

/* L'association — ce qu'est Formul'UT, ce qu'est la Formula Student, comment l'écurie fonctionne. */
function AssociationScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "L'association",
    title: "Une \xE9curie",
    accent: "\xE9tudiante.",
    subtitle: "Formul'UT est une association loi 1901 de l'Universit\xE9 de Technologie de Compi\xE8gne. Sa mission : construire une monoplace de Formula Student et la faire courir contre les autres \xE9coles d'ing\xE9nieurs.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => go("equipe")
    }, "L'\xE9quipe"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline-ivory",
      onClick: () => go("monoplace")
    }, "La monoplace")),
    stats: [{
      value: "20",
      label: "Membres actifs"
    }, {
      value: "7",
      label: "Pôles techniques"
    }, {
      value: "1901",
      label: "Association loi"
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-17)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/equipe-valeo.jpg",
    alt: "L'\xE9quipe et la FS01 devant le si\xE8ge Val\xE9o",
    ratio: "4/3",
    style: {
      borderColor: "var(--ink-a12)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    onLight: true,
    eyebrow: "La comp\xE9tition",
    title: "Qu'est-ce que la Formula Student ?",
    style: {
      marginBottom: "var(--space-9)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-body)",
      color: "var(--ink-a70)",
      marginBottom: "var(--space-7)"
    }
  }, "La Formula Student est une comp\xE9tition internationale d'ing\xE9nierie. Chaque \xE9cole con\xE7oit et fabrique une monoplace de course, puis la pr\xE9sente devant un jury d'ing\xE9nieurs de l'industrie automobile avant de l'engager dans des \xE9preuves en piste."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-md)",
      lineHeight: "var(--leading-body)",
      color: "var(--ink-a70)"
    }
  }, "La voiture n'est qu'une partie de l'\xE9valuation : la conception, les co\xFBts de production et la pr\xE9sentation du projet comptent autant que le chronom\xE8tre.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Comment on travaille",
    title: "Tout est fait par les \xE9tudiants",
    align: "center"
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 3
  }, /*#__PURE__*/React.createElement(IconCard, {
    icon: "wrench",
    title: "Conception et fabrication"
  }, "A\xE9ro, ch\xE2ssis, motorisation, \xE9lectronique, liaison au sol : toute la voiture est dessin\xE9e et fabriqu\xE9e par l'\xE9quipe, \xE0 l'atelier de l'UTC."), /*#__PURE__*/React.createElement(IconCard, {
    icon: "users",
    title: "Sept p\xF4les techniques"
  }, "Chaque membre rejoint un p\xF4le et prend en charge un sous-syst\xE8me, du dessin \xE0 la pi\xE8ce mont\xE9e."), /*#__PURE__*/React.createElement(IconCard, {
    icon: "flag",
    title: "Une saison, une voiture"
  }, "Le calendrier de l'\xE9curie est celui de la comp\xE9tition : conception, fabrication, roulages, \xE9preuves."))), /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: "var(--space-17)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "La saison",
    title: "Le rythme d'une ann\xE9e",
    style: {
      marginBottom: 0
    },
    subtitle: "Les jalons pass\xE9s et les prochaines sorties de l'\xE9curie."
  }), /*#__PURE__*/React.createElement(Timeline, {
    items: window.FUT_DATA.jalons
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    onLight: true,
    eyebrow: "Nous rejoindre",
    title: "Entrer dans l'\xE9curie",
    subtitle: "Ouvert \xE0 tous les \xE9tudiants de l'UTC, sans pr\xE9requis technique."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "var(--space-17)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(StepList, {
    onLight: true,
    steps: [{
      title: "Vous nous écrivez",
      description: "Un message à formulut@gmail.com en précisant les pôles qui vous intéressent."
    }, {
      title: "Vous venez à l'atelier",
      description: "Découverte des projets et de la voiture avec l'équipe."
    }, {
      title: "Vous rejoignez un pôle",
      description: "Vous prenez en main un sous-système de la monoplace."
    }]
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/equipe-3.jpg",
    alt: "L'\xE9quipe \xE0 l'atelier",
    ratio: "4/3",
    radius: "var(--radius-lg)",
    style: {
      borderColor: "var(--ink-a12)"
    }
  }))));
}
Object.assign(window, {
  AssociationScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/AssociationScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/EquipeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Icon,
  PageHero,
  SectionHeader,
  PoleAccordion,
  MemberCard,
  PhotoFrame,
  StepList
} = window.FormulUTDesignSystem_06d048;

/* L'équipe — bureau, sept pôles techniques, recrutement. */
function EquipeScreen({
  go
}) {
  const D = window.FUT_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "L'\xE9quipe",
    title: "Vingt \xE9tudiants.",
    accent: "Une \xE9curie.",
    subtitle: "Des ing\xE9nieurs en devenir issus de toutes les fili\xE8res de l'UTC, r\xE9partis en sept p\xF4les techniques autour d'une m\xEAme voiture.",
    stats: [{
      value: "20",
      label: "Membres actifs"
    }, {
      value: "7",
      label: "Pôles techniques"
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Organisation technique",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Sept p\xF4les.", /*#__PURE__*/React.createElement("br", null), "Une voiture.")
  }), /*#__PURE__*/React.createElement(PoleAccordion, {
    poles: D.poles,
    defaultOpen: 0
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    style: {
      borderTop: "var(--border-w) solid var(--ink-a06)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    onLight: true,
    eyebrow: "Bureau",
    title: "Le noyau dur",
    subtitle: "Noms et photos \xE0 fournir par l'\xE9curie \u2014 les cadres indiquent le plan attendu."
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 4
  }, D.bureau.map((m, i) => /*#__PURE__*/React.createElement(MemberCard, _extends({
    key: i
  }, m, {
    onLight: true
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: "var(--space-17)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/equipe-2.jpg",
    alt: "L'\xE9quipe au complet",
    ratio: "4/5"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Recrutement",
    title: "Rejoindre l'\xE9curie",
    style: {
      marginBottom: "var(--space-11)"
    },
    subtitle: "Aucun pr\xE9requis : seulement l'envie de mettre les mains dans la voiture."
  }), /*#__PURE__*/React.createElement(StepList, {
    steps: [{
      title: "Vous nous écrivez",
      description: "Un message à formulut@gmail.com, en précisant les pôles qui vous intéressent."
    }, {
      title: "Vous venez à l'atelier",
      description: "On vous montre la monoplace et les projets en cours."
    }, {
      title: "Vous rejoignez un pôle",
      description: "Vous prenez en charge un sous-système, du dessin à la pièce montée."
    }, {
      title: "Vous allez en piste",
      description: "En fin de saison, vous participez aux roulages et à la compétition."
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "mailto:formulut@gmail.com",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 17
    })
  }, "Candidater"))))), /*#__PURE__*/React.createElement(CtaBand, {
    eyebrow: "Partenariat",
    title: "Vous voulez nous aider ?",
    text: "Les entreprises comme les particuliers peuvent soutenir l'\xE9curie. Les dons de tous les niveaux sont bienvenus.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => go("soutenir")
    }, "Nous soutenir")
  }));
}
Object.assign(window, {
  EquipeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/EquipeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Icon,
  Tag,
  SectionHeader,
  StatCard,
  PhotoFrame,
  MonoplaceCard,
  NewsCard,
  SponsorLogoCard,
  TrackRule
} = window.FormulUTDesignSystem_06d048;

/* Accueil — titre centré sur ivoire, photo pleine largeur dessous (parti pris retenu). */
function HomeScreen({
  go
}) {
  const D = window.FUT_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    "data-surface": "light",
    style: {
      background: "var(--ivory)",
      paddingTop: "calc(var(--nav-h) + var(--space-17))",
      paddingBottom: "var(--space-15)"
    }
  }, /*#__PURE__*/React.createElement(TrackRule, {
    split: true,
    thickness: 3,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-label)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--yellow-deep)",
      marginBottom: "var(--space-9)"
    }
  }, "\xC9curie Formula Student \u2014 UTC Compi\xE8gne"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-xl)",
      lineHeight: "var(--leading-display)",
      textTransform: "uppercase",
      color: "var(--navy-900)",
      margin: "0 auto",
      maxWidth: "22ch"
    }
  }, "On con\xE7oit,", /*#__PURE__*/React.createElement("br", null), "on fabrique,", /*#__PURE__*/React.createElement("br", null), "on court."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "40rem",
      margin: "var(--space-11) auto 0",
      fontSize: "var(--text-body-lg)",
      lineHeight: "var(--leading-body)",
      color: "var(--ink-a70)"
    }
  }, "Formul'UT est l'\xE9curie de course des \xE9tudiants de l'UTC Compi\xE8gne. Nous construisons nos monoplaces pour concourir contre les autres \xE9coles d'ing\xE9nieurs, en France et \xE0 l'\xE9tranger."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go("soutenir"),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Nous soutenir"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go("monoplace")
  }, "La monoplace"))), /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: "var(--space-15)"
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/fs01-piste-pluie.jpg",
    alt: "La FS01 en piste \xE0 Magny-Cours",
    ratio: "21/9",
    scrim: true,
    badge: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-8)",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: "var(--text-h4)",
        textTransform: "uppercase",
        color: "var(--ivory)"
      }
    }, "FS01 \xB7 #86"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-caption)",
        color: "var(--navy-300)"
      }
    }, "Magny-Cours \u2014 f\xE9vrier 2026"))
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement(Grid, {
    cols: 4
  }, D.stats.map(s => /*#__PURE__*/React.createElement(StatCard, {
    key: s.label,
    value: s.value,
    label: s.label,
    onLight: true
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Nos monoplaces",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Deux voitures.", /*#__PURE__*/React.createElement("br", null), "Une \xE9curie.")
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 2
  }, D.monoplaces.map(m => /*#__PURE__*/React.createElement(MonoplaceCard, _extends({
    key: m.name
  }, m, {
    action: /*#__PURE__*/React.createElement(Button, {
      variant: m.tagTone === "electrique" ? "outline-ivory" : "primary",
      size: "sm",
      onClick: () => go("monoplace")
    }, m.tagTone === "electrique" ? "Suivre le projet" : "La fiche technique")
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "var(--section-y-tight)",
    style: {
      borderTop: "var(--border-w) solid var(--ink-a06)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--ink-a40)",
      marginBottom: "var(--space-11)"
    }
  }, "Ils nous font confiance"), /*#__PURE__*/React.createElement(Grid, {
    cols: 4,
    gap: "var(--space-5)"
  }, D.partenaires.map(p => /*#__PURE__*/React.createElement(SponsorLogoCard, _extends({
    key: p.name
  }, p, {
    onLight: true
  }))), /*#__PURE__*/React.createElement(SponsorLogoCard, {
    name: "Votre entreprise",
    placeholder: true,
    onLight: true
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    onLight: true,
    eyebrow: "Actualit\xE9s",
    title: "L'\xE9curie en direct",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => go("actualites"),
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })
    }, "Toutes les actus")
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 2
  }, D.actualites.map(a => /*#__PURE__*/React.createElement(NewsCard, _extends({
    key: a.title
  }, a, {
    onLight: true,
    href: "#actualites",
    linkLabel: "Voir l'actualit\xE9"
  }))))), /*#__PURE__*/React.createElement(CtaBand, {
    eyebrow: "Partenariat",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Votre logo.", /*#__PURE__*/React.createElement("br", null), "Notre piste."),
    text: "Chaque euro et chaque pi\xE8ce donn\xE9s partent dans la voiture. Les dons de tous les niveaux sont bienvenus \u2014 l'emplacement de votre logo sur la monoplace suit votre engagement.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => go("soutenir")
    }, "Nous soutenir"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline-ivory",
      size: "lg",
      href: "../../assets/dossier-partenariat-P26.pdf",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 18
      })
    }, "Dossier de partenariat"))
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/Layout.jsx
try { (() => {
const {
  TrackRule
} = window.FormulUTDesignSystem_06d048;
function Container({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--max-w)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      ...style
    }
  }, children);
}
function Section({
  children,
  tone = "navy",
  pad = "var(--section-y)",
  id,
  style
}) {
  const bg = tone === "light" ? "var(--ivory)" : tone === "raised" ? "var(--navy-800)" : "var(--navy-900)";
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    "data-surface": tone === "light" ? "light" : undefined,
    style: {
      background: bg,
      padding: `${pad} 0`,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Container, null, children));
}

/* Grille responsive : `cols` est le maximum souhaité, chaque colonne a une largeur plancher pour que
   les titres Horizon (très larges en capitales) ne soient jamais comprimés. En dessous, la grille
   retombe d'elle-même sur moins de colonnes. */
const FUT_GRID_MIN = {
  1: "0",
  2: "320px",
  3: "272px",
  4: "240px"
};
function Grid({
  cols = 3,
  gap = "var(--space-9)",
  align = "stretch",
  children,
  style
}) {
  const min = FUT_GRID_MIN[cols];
  const cssCols = cols === 1 || !min ? `repeat(${cols}, minmax(0,1fr))` : `repeat(auto-fit, minmax(min(${min}, 100%), 1fr))`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: cssCols,
      gap,
      alignItems: align,
      ...style
    }
  }, children);
}
function CtaBand({
  eyebrow,
  title,
  text,
  actions,
  id
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      position: "relative",
      background: "var(--navy-800)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(TrackRule, {
    split: true,
    thickness: 3,
    style: {
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-160px",
      right: "-140px",
      width: "520px",
      height: "520px",
      background: "radial-gradient(circle, rgba(246,182,0,0.12) 0%, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: "relative",
      padding: "var(--space-17) var(--gutter)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "40rem",
      margin: "0 auto"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-label)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--yellow)",
      marginBottom: "var(--space-8)"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-lg)",
      lineHeight: "var(--leading-display)",
      textTransform: "uppercase",
      color: "var(--ivory)",
      marginBottom: "var(--space-8)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-lg)",
      lineHeight: "var(--leading-body)",
      color: "var(--navy-a70)",
      marginBottom: "var(--space-12)"
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, actions))));
}
Object.assign(window, {
  Container,
  Section,
  Grid,
  CtaBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/Layout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/MonoplaceScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Tag,
  PageHero,
  SectionHeader,
  PhotoFrame,
  SpecList,
  IconCard
} = window.FormulUTDesignSystem_06d048;

/* La monoplace — fiche technique de la FS01, projet FS02, galerie. */
function MonoplaceScreen({
  go
}) {
  const D = window.FUT_DATA;
  const [fs01, fs02] = D.monoplaces;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "La monoplace",
    title: "FS01",
    accent: "#86",
    subtitle: "Notre monoplace thermique, en piste. Moteur de Honda CBR600RR, 117 chevaux, six rapports.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      href: "#fiche"
    }, "La fiche technique"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline-ivory",
      onClick: () => go("soutenir")
    }, "Nous soutenir"))
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "navy",
    pad: "var(--section-y-tight)"
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/fs01-avant-gauche-soleil.png",
    alt: "La FS01 trois-quarts avant gauche",
    ratio: "21/9"
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    id: "fiche"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-17)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    onLight: true,
    eyebrow: "Fiche technique",
    title: "FS01",
    style: {
      marginBottom: "var(--space-9)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "thermique",
    onLight: true
  }, "Thermique")), /*#__PURE__*/React.createElement(SpecList, {
    onLight: true,
    items: fs01.fiche
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-9)",
      fontSize: "var(--text-caption)",
      color: "var(--ink-a40)"
    }
  }, "Les lignes marqu\xE9es \xAB \xE0 compl\xE9ter \xBB attendent les valeurs mesur\xE9es par l'\xE9curie.")), /*#__PURE__*/React.createElement(Grid, {
    cols: 1,
    gap: "var(--space-5)"
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/fs01-arriere-droit.png",
    alt: "La FS01 trois-quarts arri\xE8re droit",
    ratio: "16/9",
    radius: "var(--radius-lg)",
    style: {
      borderColor: "var(--ink-a12)"
    }
  }), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/fs01-bas-avant.jpg",
    alt: "D\xE9tail avant de la FS01",
    ratio: "16/9",
    radius: "var(--radius-lg)",
    style: {
      borderColor: "var(--ink-a12)"
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Conception",
    title: "Ce que l'\xE9quipe fabrique",
    align: "center"
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 4
  }, /*#__PURE__*/React.createElement(IconCard, {
    icon: "wind",
    title: "A\xE9ro"
  }, "Ailerons, diffuseur et carrosserie dessin\xE9s et fabriqu\xE9s \xE0 l'atelier."), /*#__PURE__*/React.createElement(IconCard, {
    icon: "box",
    title: "Ch\xE2ssis"
  }, "Structure tubulaire et int\xE9gration de tous les sous-syst\xE8mes."), /*#__PURE__*/React.createElement(IconCard, {
    icon: "flame",
    title: "GMP Thermique"
  }, "Moteur de Honda CBR600RR : admission, \xE9chappement, transmission."), /*#__PURE__*/React.createElement(IconCard, {
    icon: "circle-dot",
    title: "LAS"
  }, "Suspensions, g\xE9om\xE9trie, freinage et pneumatiques."))), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: "var(--space-17)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "electrique",
    onLight: true
  }, "\xC9lectrique")), /*#__PURE__*/React.createElement(SectionHeader, {
    onLight: true,
    eyebrow: "Prochain projet",
    title: "FS02 \u2014 la monoplace \xE9lectrique",
    style: {
      marginBottom: "var(--space-9)"
    },
    subtitle: "Notre premi\xE8re monoplace \xE9lectrique est en d\xE9veloppement \xE0 l'atelier : cha\xEEne de traction, \xE9lectronique de puissance et pack batterie."
  }), /*#__PURE__*/React.createElement(SpecList, {
    onLight: true,
    items: fs02.fiche
  })), /*#__PURE__*/React.createElement(PhotoFrame, {
    src: null,
    alt: "Rendu 3D ou photo d'atelier de la FS02 \xE0 fournir",
    ratio: "4/3",
    style: {
      background: "var(--ivory-warm)",
      borderColor: "var(--ink-a12)"
    }
  }))), /*#__PURE__*/React.createElement(CtaBand, {
    eyebrow: "Partenariat",
    title: "Cette voiture roule gr\xE2ce \xE0 ses partenaires",
    text: "Pi\xE8ces, mat\xE9riaux, logiciels ou soutien financier : tout part directement dans la monoplace.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      onClick: () => go("soutenir")
    }, "Nous soutenir"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline-ivory",
      size: "lg",
      href: "../../assets/dossier-partenariat-P26.pdf",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 18
      })
    }, "Dossier de partenariat"))
  }));
}
Object.assign(window, {
  MonoplaceScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/MonoplaceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/SoutenirScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Icon,
  PageHero,
  SectionHeader,
  PhotoFrame,
  IconCard,
  PerkPill,
  SponsorLogoCard,
  StepList,
  Field,
  FormStatus,
  TrackRule
} = window.FormulUTDesignSystem_06d048;

/* Nous soutenir — la page la plus importante du site : dossier, formulaire, mur des partenaires. */
function SoutenirScreen() {
  const D = window.FUT_DATA;
  const [state, setState] = React.useState("idle");
  const [form, setForm] = React.useState({
    nom: "",
    email: "",
    message: ""
  });
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  function envoyer(e) {
    e.preventDefault();
    setState("pending");
    window.setTimeout(() => setState("success"), 900);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: "Nous soutenir",
    title: "Votre logo.",
    accent: "Notre piste.",
    subtitle: "Formul'UT roule gr\xE2ce \xE0 ses partenaires. Les dons de tous les niveaux sont bienvenus : l'emplacement de votre logo sur la monoplace suit votre engagement.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      href: "#formulaire",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      })
    }, "Nous \xE9crire"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline-ivory",
      size: "lg",
      href: "../../assets/dossier-partenariat-P26.pdf",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 18
      })
    }, "Dossier de partenariat")),
    stats: [{
      value: "20",
      label: "Membres actifs"
    }, {
      value: "7",
      label: "Pôles techniques"
    }, {
      value: "2",
      label: "Monoplaces menées en parallèle"
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    onLight: true,
    eyebrow: "Pourquoi nous soutenir",
    title: "Ce que votre soutien apporte",
    align: "center",
    subtitle: "\xC0 l'\xE9curie, tout part dans la voiture. \xC0 vous, une visibilit\xE9 aupr\xE8s des futurs ing\xE9nieurs et sur les circuits."
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 3
  }, /*#__PURE__*/React.createElement(IconCard, {
    onLight: true,
    icon: "target",
    title: "Visibilit\xE9 en piste"
  }, "Votre logo sur la monoplace, pr\xE9sente en comp\xE9tition face aux autres \xE9coles d'ing\xE9nieurs."), /*#__PURE__*/React.createElement(IconCard, {
    onLight: true,
    icon: "users",
    title: "Aupr\xE8s des futurs ing\xE9nieurs"
  }, "Une association directe avec les \xE9tudiants de l'UTC \u2014 utile en notori\xE9t\xE9 comme en recrutement."), /*#__PURE__*/React.createElement(IconCard, {
    onLight: true,
    icon: "wrench",
    title: "Un soutien concret"
  }, "Financement, pi\xE8ces, mat\xE9riaux, logiciels ou usinage : chaque apport se retrouve sur la voiture."))), /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-17)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PhotoFrame, {
    src: "../../assets/photos/equipe-valeo.jpg",
    alt: "La FS01 et ses logos partenaires, roulage \xE0 Val\xE9o",
    ratio: "4/3"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Emplacement du logo",
    title: "Votre logo sur la voiture",
    style: {
      marginBottom: "var(--space-9)"
    },
    subtitle: "Il n'y a pas de grille tarifaire. L'emplacement et la taille de votre logo sur la monoplace sont fonction de votre engagement \u2014 on en discute ensemble."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(PerkPill, {
    highlight: true
  }, "Logo sur la monoplace"), /*#__PURE__*/React.createElement(PerkPill, {
    highlight: true
  }, "Logo sur les combinaisons"), /*#__PURE__*/React.createElement(PerkPill, null, "Mention sur le site"), /*#__PURE__*/React.createElement(PerkPill, null, "Publications r\xE9seaux sociaux"), /*#__PURE__*/React.createElement(PerkPill, null, "Visite de l'atelier"), /*#__PURE__*/React.createElement(PerkPill, null, "Invitation aux roulages")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-9)",
      fontSize: "var(--text-caption)",
      color: "var(--navy-400)"
    }
  }, "Apport en nature (pi\xE8ces, mat\xE9riaux, logiciels, usinage) accept\xE9 au m\xEAme titre qu'un don financier.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: "var(--section-y-tight)",
    style: {
      borderTop: "var(--border-w) solid var(--ink-a06)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    onLight: true,
    eyebrow: "Partenaires actuels",
    title: "Ils nous font d\xE9j\xE0 confiance",
    align: "center"
  }), /*#__PURE__*/React.createElement(Grid, {
    cols: 4,
    gap: "var(--space-5)"
  }, D.partenaires.map(p => /*#__PURE__*/React.createElement(SponsorLogoCard, _extends({
    key: p.name
  }, p, {
    onLight: true
  }))), /*#__PURE__*/React.createElement(SponsorLogoCard, {
    name: "Votre entreprise",
    placeholder: true,
    onLight: true
  }))), /*#__PURE__*/React.createElement("section", {
    id: "formulaire",
    style: {
      background: "var(--navy-800)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(TrackRule, {
    split: true,
    thickness: 3,
    style: {
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      padding: "var(--section-y) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: "var(--space-17)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Nous \xE9crire",
    title: "Parlons de votre partenariat",
    style: {
      marginBottom: "var(--space-11)"
    },
    subtitle: "Une r\xE9ponse sous 48 h, en fran\xE7ais ou en anglais."
  }), /*#__PURE__*/React.createElement(StepList, {
    steps: [{
      title: "Vous nous écrivez",
      description: "Le formulaire ou un e-mail direct, comme vous préférez."
    }, {
      title: "On en discute",
      description: "Trente minutes suffisent pour cadrer ce que vous cherchez."
    }, {
      title: "Votre logo roule",
      description: "Sur la monoplace, dès la saison suivante."
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)",
      paddingTop: "var(--space-11)",
      borderTop: "var(--border-w) solid var(--navy-a12)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `mailto:${D.contact.email}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  }), " ", D.contact.email), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      fontSize: "var(--text-caption)",
      color: "var(--navy-300)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--navy-400)"
  }), " ", D.contact.address), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      color: "var(--navy-400)",
      display: "flex",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: D.contact.instagram,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Instagram"), /*#__PURE__*/React.createElement("a", {
    href: D.contact.linkedin,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: D.contact.facebook,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Facebook")))), /*#__PURE__*/React.createElement("form", {
    onSubmit: envoyer,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)",
      background: "var(--navy-900)",
      border: "var(--border-w) solid var(--navy-a12)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--card-pad-lg)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nom / entreprise",
    name: "nom",
    placeholder: "Votre nom ou votre soci\xE9t\xE9",
    required: true,
    value: form.nom,
    onChange: set("nom")
  }), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    name: "email",
    type: "email",
    placeholder: "vous@entreprise.fr",
    required: true,
    value: form.email,
    onChange: set("email")
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Votre message",
    name: "message",
    as: "textarea",
    rows: 5,
    placeholder: "Dites-nous ce que vous cherchez et ce que vous pouvez apporter.",
    required: true,
    value: form.message,
    onChange: set("message")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    disabled: state === "pending",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "Envoyer"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-ivory",
    href: "../../assets/dossier-partenariat-P26.pdf",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 17
    })
  }, "Le dossier")), /*#__PURE__*/React.createElement(FormStatus, {
    state: state
  }, state === "pending" ? "Envoi en cours…" : state === "success" ? "Message envoyé. On vous répond sous 48 h." : null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-label)",
      color: "var(--navy-400)"
    }
  }, "Maquette : l'envoi est simul\xE9. Le site en production enregistre les demandes c\xF4t\xE9 serveur."))))));
}
Object.assign(window, {
  SoutenirScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/SoutenirScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/data.js
try { (() => {
/* Contenus réels fournis par l'écurie. Tout ce qui reste à vérifier est marqué « à compléter ». */
window.FUT_DATA = {
  pages: [{
    key: "accueil",
    label: "Accueil"
  }, {
    key: "association",
    label: "Association"
  }, {
    key: "equipe",
    label: "Équipe"
  }, {
    key: "monoplace",
    label: "Monoplace"
  }, {
    key: "actualites",
    label: "Actualités"
  }, {
    key: "soutenir",
    label: "Nous soutenir",
    cta: true
  }],
  contact: {
    email: "formulut@gmail.com",
    instagram: "https://www.instagram.com/formul.ut/",
    linkedin: "https://www.linkedin.com/company/formul-ut/",
    facebook: "https://www.facebook.com/formul.ut",
    address: "UTC, Compiègne"
  },
  stats: [{
    value: 20,
    label: "Membres actifs"
  }, {
    value: 7,
    label: "Pôles techniques"
  }, {
    value: 1,
    label: "Monoplace thermique en piste"
  }, {
    value: 1,
    label: "Monoplace électrique en développement"
  }],
  monoplaces: [{
    name: "FS01",
    tag: "Thermique",
    tagTone: "thermique",
    tagline: "Notre monoplace de course, en piste. Moteur de Honda CBR600RR, châssis tubulaire acier.",
    photo: "../../assets/photos/fs01-avant-gauche-soleil.png",
    photoAlt: "FS01 trois-quarts avant",
    specs: [{
      label: "Moteur",
      value: "Honda CBR600RR"
    }, {
      label: "Puissance",
      value: "117 ch"
    }, {
      label: "Numéro",
      value: "#86"
    }],
    fiche: [{
      label: "Moteur",
      value: "Honda CBR600RR"
    }, {
      label: "Puissance",
      value: "117 ch"
    }, {
      label: "Régime maximal",
      value: "15 000 tr/min"
    }, {
      label: "Couple",
      value: "66 Nm"
    }, {
      label: "Boîte de vitesses",
      value: "6 rapports"
    }, {
      label: "Masse",
      value: "À compléter"
    }, {
      label: "Châssis",
      value: "À compléter"
    }]
  }, {
    name: "FS02",
    tag: "Électrique",
    tagTone: "electrique",
    tagline: "Notre monoplace électrique, en développement à l'atelier de l'UTC.",
    photo: null,
    photoAlt: "Rendu 3D ou photo d'atelier à fournir",
    specs: [{
      label: "Propulsion",
      value: "Électrique"
    }, {
      label: "État",
      value: "En développement"
    }],
    fiche: [{
      label: "Propulsion",
      value: "Électrique"
    }, {
      label: "État du projet",
      value: "En développement"
    }, {
      label: "Motorisation",
      value: "À compléter"
    }, {
      label: "Pack batterie",
      value: "À compléter"
    }]
  }],
  poles: [{
    name: "Aéro",
    icon: "wind",
    summary: "Aérodynamique — ailerons, diffuseur, carrosserie",
    description: "Conception et fabrication des éléments aérodynamiques de la monoplace : aileron avant, aileron arrière, diffuseur et carrosserie."
  }, {
    name: "Châssis",
    icon: "box",
    summary: "Structure tubulaire et intégration",
    description: "Conception du châssis, calculs de résistance et intégration de tous les sous-systèmes de la voiture."
  }, {
    name: "ELEC",
    icon: "cpu",
    summary: "Électronique embarquée et faisceau",
    description: "Électronique de la monoplace : faisceau, capteurs, acquisition de données et tableau de bord pilote."
  }, {
    name: "Fabrication",
    icon: "wrench",
    summary: "Usinage, soudure, assemblage à l'atelier",
    description: "Réalisation des pièces à l'atelier de l'UTC : usinage, soudure, montage et maintenance de la voiture entre les roulages."
  }, {
    name: "GMP Thermique",
    icon: "flame",
    summary: "Groupe motopropulseur thermique",
    description: "Moteur de Honda CBR600RR : admission, échappement, refroidissement, transmission et mise au point."
  }, {
    name: "GMP Électrique",
    icon: "battery-charging",
    summary: "Groupe motopropulseur électrique",
    description: "Chaîne de traction électrique de la FS02 : moteur, électronique de puissance et pack batterie."
  }, {
    name: "LAS",
    icon: "circle-dot",
    summary: "Liaison au sol — suspensions, freins, pneus",
    description: "Suspensions, géométrie, système de freinage et choix des pneumatiques."
  }],
  bureau: [{
    name: "À compléter",
    role: "Président",
    pole: "LAS"
  }, {
    name: "À compléter",
    role: "Directeur technique",
    pole: "Châssis"
  }, {
    name: "À compléter",
    role: "Responsable partenariats",
    pole: "LAS"
  }, {
    name: "À compléter",
    role: "Trésorier",
    pole: "LAS"
  }],
  jalons: [{
    date: "Août 2027",
    title: "Formula Student Italie",
    description: "Compétition internationale — notre prochain grand rendez-vous."
  }, {
    date: "Février 2027",
    title: "Magny-Cours",
    description: "Session d'entraînement avec les autres écuries françaises.",
    current: true
  }, {
    date: "Juin 2026",
    title: "Roulage à Valéo",
    description: "Roulage et test de la monoplace sur l'anneau de Valéo."
  }, {
    date: "Février 2026",
    title: "Magny-Cours",
    description: "Session d'entraînement de Formula Student avec les écuries françaises."
  }],
  actualites: [{
    date: "Juin 2026",
    tag: "Roulage",
    tagTone: "thermique",
    title: "Roulage à Valéo",
    excerpt: "Roulage et test de la monoplace sur l'anneau de Valéo.",
    photo: "../../assets/photos/equipe-valeo.jpg",
    photoAlt: "L'équipe et la FS01 devant le siège Valéo"
  }, {
    date: "Février 2026",
    tag: "Compétition",
    tagTone: "info",
    title: "Magny-Cours",
    excerpt: "Session d'entraînement de Formula Student avec les autres écuries françaises.",
    photo: "../../assets/photos/fs01-piste-pluie.jpg",
    photoAlt: "La FS01 en piste sous la pluie à Magny-Cours"
  }],
  partenaires: [{
    name: "SKF",
    src: "../../assets/partenaires/skf.png"
  }, {
    name: "Poclain Hydraulics",
    src: "../../assets/partenaires/poclain-hydraulics.png"
  }, {
    name: "Société Générale",
    src: "../../assets/partenaires/societe-generale.png"
  }, {
    name: "norelem",
    src: "../../assets/partenaires/norelem.png"
  }, {
    name: "Honda",
    src: "../../assets/partenaires/honda.png"
  }, {
    name: "Dassault Systèmes",
    src: "../../assets/partenaires/dassault-systemes.png"
  }, {
    name: "CVEC",
    src: "../../assets/partenaires/cvec.png"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/data.js", error: String((e && e.message) || e) }); }

__ds_ns.IconCard = __ds_scope.IconCard;

__ds_ns.MemberCard = __ds_scope.MemberCard;

__ds_ns.MonoplaceCard = __ds_scope.MonoplaceCard;

__ds_ns.NewsCard = __ds_scope.NewsCard;

__ds_ns.PerkPill = __ds_scope.PerkPill;

__ds_ns.PoleAccordion = __ds_scope.PoleAccordion;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.SponsorLogoCard = __ds_scope.SponsorLogoCard;

__ds_ns.StepList = __ds_scope.StepList;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.PageHero = __ds_scope.PageHero;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TrackRule = __ds_scope.TrackRule;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.FormStatus = __ds_scope.FormStatus;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
