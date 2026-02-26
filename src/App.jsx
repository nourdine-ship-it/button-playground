import React, { useState } from 'react'
import { Button } from './Button'

const VARIANTS = ['Primary', 'Secondary', 'Outline', 'Ghost', 'Destructive']
const SIZES    = ['Large', 'Medium', 'Small', 'Tiny']

// ─── Control atoms ────────────────────────────────────────

function ControlLabel({ children }) {
  return (
    <span style={{
      display: 'block',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: '#AAAAAA',
      marginBottom: 8,
      fontFamily: "'Mulish', sans-serif",
    }}>
      {children}
    </span>
  )
}

function VariantOption({ label, selected, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: '100%',
      padding: '5px 8px',
      borderRadius: 6,
      border: 'none',
      background: selected ? '#EEF2FF' : 'transparent',
      color: selected ? '#114EF7' : '#555',
      fontSize: 13,
      fontFamily: "'Mulish', sans-serif",
      fontWeight: selected ? 700 : 600,
      cursor: 'pointer',
      textAlign: 'left',
    }}>
      <span style={{
        width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
        background: selected ? '#114EF7' : '#CCCCCC',
      }} />
      {label}
    </button>
  )
}

function SizePill({ label, selected, onClick }) {
  return (
    <button onClick={onClick} style={{
      padding: '4px 10px',
      borderRadius: 99,
      border: `1.5px solid ${selected ? '#114EF7' : '#E5E7EB'}`,
      background: selected ? '#114EF7' : '#fff',
      color: selected ? '#fff' : '#555',
      fontSize: 12,
      fontFamily: "'Mulish', sans-serif",
      fontWeight: 700,
      cursor: 'pointer',
      transition: 'all 0.1s ease',
    }}>
      {label}
    </button>
  )
}

function Toggle({ label, value, onChange }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
      <div
        onClick={() => onChange(!value)}
        style={{
          width: 32, height: 18, borderRadius: 99,
          background: value ? '#114EF7' : '#D1D5DB',
          position: 'relative',
          transition: 'background 0.15s ease',
          flexShrink: 0,
        }}
      >
        <div style={{
          position: 'absolute',
          top: 2, left: value ? 16 : 2,
          width: 14, height: 14,
          borderRadius: '50%',
          background: '#fff',
          transition: 'left 0.15s ease',
          boxShadow: '0 1px 3px rgba(0,0,0,0.18)',
        }} />
      </div>
      <span style={{
        fontSize: 13, color: '#444',
        fontWeight: 600,
        fontFamily: "'Mulish', sans-serif",
        userSelect: 'none',
      }}>
        {label}
      </span>
    </label>
  )
}

// ─── App ──────────────────────────────────────────────────

export default function App() {
  const [variant,   setVariant]   = useState('Primary')
  const [size,      setSize]      = useState('Medium')
  const [leftIcon,  setLeftIcon]  = useState(false)
  const [rightIcon, setRightIcon] = useState(false)
  const [disabled,  setDisabled]  = useState(false)

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      fontFamily: "'Mulish', sans-serif",
      background: '#F7F7F9',
      overflow: 'hidden',
    }}>

      {/* Controls */}
      <div style={{
        width: 200,
        flexShrink: 0,
        background: '#fff',
        borderRight: '1px solid #EBEBEB',
        padding: '20px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        overflowY: 'auto',
      }}>

        <div>
          <ControlLabel>Variant</ControlLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {VARIANTS.map(v => (
              <VariantOption key={v} label={v} selected={variant === v} onClick={() => setVariant(v)} />
            ))}
          </div>
        </div>

        <div>
          <ControlLabel>Size</ControlLabel>
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {SIZES.map(s => (
              <SizePill key={s} label={s} selected={size === s} onClick={() => setSize(s)} />
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ControlLabel>Icons</ControlLabel>
          <Toggle label="Left icon"  value={leftIcon}  onChange={setLeftIcon}  />
          <Toggle label="Right icon" value={rightIcon} onChange={setRightIcon} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ControlLabel>State</ControlLabel>
          <Toggle label="Disabled" value={disabled} onChange={setDisabled} />
        </div>

      </div>

      {/* Preview */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F7F7F9',
      }}>
        <Button
          variant={variant}
          size={size}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          disabled={disabled}
          label="Button"
        />
      </div>

    </div>
  )
}
