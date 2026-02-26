// Design tokens — extracted directly from Figma file 68BjBAp23kbcFrNQ9bK6jP

export const tokens = {
  color: {
    // Primary
    primary:              '#114EF7',
    primaryHover:         '#0F46DE',
    primaryPressed:       '#0B3AC4',
    primaryFocusRing:     'rgba(17, 78, 247, 0.22)',

    // Secondary
    secondary:            '#F1F1F1',
    secondaryHover:       '#EBEBEB',
    secondaryPressed:     '#D4D4D4',
    secondaryText:        '#121212',
    secondaryFocusRing:   'rgba(18, 18, 18, 0.15)',

    // Outline
    outlineBorder:        '#F1F1F1',
    outlineBorderHover:   '#D4D4D4',
    outlineHoverBg:       '#F8F8F8',
    outlinePressedBg:     '#F0F0F0',
    outlineText:          '#121212',

    // Ghost
    ghostText:            '#114EF7',
    ghostHoverBg:         'rgba(17, 78, 247, 0.06)',
    ghostPressedBg:       'rgba(17, 78, 247, 0.12)',

    // Destructive
    destructive:          '#C41818',
    destructiveHover:     '#DE2626',
    destructivePressed:   '#A80C0C',
    destructiveFocusRing: 'rgba(196, 24, 24, 0.22)',

    // Disabled (shared across all variants)
    disabledBg:           '#EBEBEB',
    disabledText:         '#999999',

    // Text on filled buttons
    onFilled:             '#FFFFFF',
  },

  radius: { button: '12px' },

  font: {
    family: "'Mulish', sans-serif",
    weight: 700,
  },
}
