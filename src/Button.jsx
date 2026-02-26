import React from 'react'
import { tokens } from './tokens'

// ─── Icons (paths exported directly from Figma file 68BjBAp23kbcFrNQ9bK6jP) ──

// Plus / Outline — node 2031:9617
const IconPlus = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.95218 1.0415H10.0478C11.9715 1.04149 13.479 1.04148 14.6552 1.19963C15.8592 1.36149 16.8092 1.69928 17.5549 2.44495C18.3006 3.19063 18.6383 4.14065 18.8002 5.34459C18.9583 6.52083 18.9583 8.02836 18.9583 9.95203V10.0476C18.9583 11.9713 18.9583 13.4788 18.8002 14.6551C18.6383 15.859 18.3006 16.809 17.5549 17.5547C16.8092 18.3004 15.8592 18.6382 14.6552 18.8C13.479 18.9582 11.9715 18.9582 10.0478 18.9582H9.95219C8.02852 18.9582 6.52099 18.9582 5.34475 18.8C4.14081 18.6382 3.19079 18.3004 2.44511 17.5547C1.69944 16.809 1.36165 15.859 1.19979 14.6551C1.04165 13.4788 1.04165 11.9713 1.04166 10.0477V9.95202C1.04165 8.02836 1.04165 6.52083 1.19979 5.34459C1.36165 4.14065 1.69944 3.19063 2.44511 2.44495C3.19079 1.69928 4.14081 1.36149 5.34475 1.19963C6.52099 1.04148 8.02852 1.04149 9.95218 1.0415ZM5.51131 2.43848C4.44598 2.58171 3.80371 2.85412 3.32899 3.32883C2.85428 3.80355 2.58187 4.44582 2.43864 5.51115C2.29299 6.59447 2.29166 8.01798 2.29166 9.99984C2.29166 11.9817 2.29299 13.4052 2.43864 14.4885C2.53741 15.2232 2.69762 15.7566 2.94323 16.1727L16.1729 2.94307C15.7568 2.69746 15.2233 2.53725 14.4887 2.43848C13.4054 2.29283 11.9819 2.2915 10 2.2915C8.01814 2.2915 6.59463 2.29283 5.51131 2.43848ZM17.0568 3.82696L3.82712 17.0566C4.24319 17.3022 4.77665 17.4624 5.51131 17.5612C6.59463 17.7068 8.01814 17.7082 10 17.7082C11.9819 17.7082 13.4054 17.7068 14.4887 17.5612C15.554 17.418 16.1963 17.1456 16.671 16.6708C17.1457 16.1961 17.4181 15.5539 17.5614 14.4885C17.707 13.4052 17.7083 11.9817 17.7083 9.99984C17.7083 8.01798 17.707 6.59447 17.5614 5.51115C17.4626 4.77649 17.3024 4.24303 17.0568 3.82696ZM6.66666 3.95814C7.01184 3.95814 7.29166 4.23796 7.29166 4.58314L7.29166 6.04149H8.75C9.09517 6.04149 9.375 6.32131 9.375 6.66649C9.375 7.01167 9.09517 7.29149 8.75 7.29149H7.29166L7.29166 8.7498C7.29166 9.09498 7.01184 9.3748 6.66666 9.3748C6.32149 9.3748 6.04166 9.09498 6.04166 8.7498L6.04166 7.29149L4.58333 7.29149C4.23815 7.29149 3.95833 7.01167 3.95833 6.66649C3.95833 6.32131 4.23815 6.04149 4.58333 6.04149L6.04166 6.04149L6.04166 4.58314C6.04166 4.23796 6.32149 3.95814 6.66666 3.95814ZM10.2083 14.1665C10.2083 13.8213 10.4882 13.5415 10.8333 13.5415H15C15.3452 13.5415 15.625 13.8213 15.625 14.1665C15.625 14.5117 15.3452 14.7915 15 14.7915H10.8333C10.4882 14.7915 10.2083 14.5117 10.2083 14.1665Z"
      fill="currentColor"
    />
  </svg>
)

// Arrow Right / Outline — node 2115:4960
const IconArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2247 4.55806C11.4688 4.31398 11.8645 4.31398 12.1086 4.55806L17.1086 9.55806C17.3527 9.80214 17.3527 10.1979 17.1086 10.4419L12.1086 15.4419C11.8645 15.686 11.4688 15.686 11.2247 15.4419C10.9806 15.1979 10.9806 14.8021 11.2247 14.5581L15.1578 10.625H3.33331C2.98814 10.625 2.70831 10.3452 2.70831 10C2.70831 9.65482 2.98814 9.375 3.33331 9.375H15.1578L11.2247 5.44194C10.9806 5.19786 10.9806 4.80214 11.2247 4.55806Z"
      fill="currentColor"
    />
  </svg>
)

// ─── Size scale ───────────────────────────────────────────
const SIZES = {
  Large:  { height: 48, paddingX: 20, fontSize: 15, iconSize: 20, gap: 8 },
  Medium: { height: 40, paddingX: 16, fontSize: 14, iconSize: 18, gap: 6 },
  Small:  { height: 32, paddingX: 12, fontSize: 13, iconSize: 16, gap: 6 },
  Tiny:   { height: 24, paddingX: 8,  fontSize: 11, iconSize: 14, gap: 4 },
}

// ─── Variant styles per state ─────────────────────────────
function getStyles(variant, isHovered, isActive, isFocused) {
  const t = tokens.color
  const focusRing = isFocused
    ? `0 0 0 3px ${variant === 'Destructive' ? t.destructiveFocusRing : variant === 'Secondary' ? t.secondaryFocusRing : t.primaryFocusRing}`
    : 'none'

  switch (variant) {
    case 'Primary':
      return {
        background: isActive ? t.primaryPressed : isHovered ? t.primaryHover : t.primary,
        color: t.onFilled,
        border: `1.5px solid ${isActive ? t.primaryPressed : isHovered ? t.primaryHover : t.primary}`,
        boxShadow: focusRing,
      }
    case 'Secondary':
      return {
        background: isActive ? t.secondaryPressed : isHovered ? t.secondaryHover : t.secondary,
        color: t.secondaryText,
        border: `1.5px solid ${isActive ? t.secondaryPressed : isHovered ? t.secondaryHover : t.secondary}`,
        boxShadow: focusRing,
      }
    case 'Outline':
      return {
        background: isActive ? t.outlinePressedBg : isHovered ? t.outlineHoverBg : 'transparent',
        color: t.outlineText,
        border: `1.5px solid ${isHovered || isActive ? t.outlineBorderHover : t.outlineBorder}`,
        boxShadow: focusRing,
      }
    case 'Ghost':
      return {
        background: isActive ? t.ghostPressedBg : isHovered ? t.ghostHoverBg : 'transparent',
        color: t.ghostText,
        border: '1.5px solid transparent',
        boxShadow: focusRing,
      }
    case 'Destructive':
      return {
        background: isActive ? t.destructivePressed : isHovered ? t.destructiveHover : t.destructive,
        color: t.onFilled,
        border: `1.5px solid ${isActive ? t.destructivePressed : isHovered ? t.destructiveHover : t.destructive}`,
        boxShadow: focusRing,
      }
    default:
      return {}
  }
}

// ─── Button ───────────────────────────────────────────────
export function Button({
  variant = 'Primary',
  size = 'Medium',
  leftIcon = false,
  rightIcon = false,
  label = 'Button',
  disabled = false,
}) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isActive,  setIsActive]  = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)

  const sz = SIZES[size]

  const disabledStyle = {
    background:  tokens.color.disabledBg,
    color:       tokens.color.disabledText,
    border:      `1.5px solid ${tokens.color.disabledBg}`,
    boxShadow:   'none',
    cursor:      'not-allowed',
  }

  const variantStyle = disabled
    ? disabledStyle
    : getStyles(variant, isHovered, isActive, isFocused)

  const style = {
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            `${sz.gap}px`,
    height:         `${sz.height}px`,
    padding:        `0 ${sz.paddingX}px`,
    fontSize:       `${sz.fontSize}px`,
    fontFamily:     tokens.font.family,
    fontWeight:     tokens.font.weight,
    borderRadius:   tokens.radius.button,
    outline:        'none',
    transition:     'background 0.12s ease, box-shadow 0.12s ease, border-color 0.12s ease',
    whiteSpace:     'nowrap',
    lineHeight:     1,
    userSelect:     'none',
    ...variantStyle,
  }

  return (
    <button
      style={style}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsActive(false) }}
      onMouseDown={() =>  setIsActive(true)}
      onMouseUp={() =>    setIsActive(false)}
      onFocus={() =>      setIsFocused(true)}
      onBlur={() =>       setIsFocused(false)}
    >
      {leftIcon  && <IconPlus       size={sz.iconSize} />}
      <span>{label}</span>
      {rightIcon && <IconArrowRight size={sz.iconSize} />}
    </button>
  )
}
