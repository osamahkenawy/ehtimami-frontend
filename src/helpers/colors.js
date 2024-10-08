class Colors {

  constructor () {}

  // Manually adjust alpha
  changeAlpha (color, offset) {
    if (typeof color !== 'string') return color
    if (offset < -1 || offset > 1) return color
    const { r, g, b, a } = this.HexToRGBA(color.length == 9 || color.length == 5 ? color : `${color}${color.length < 5 ? 'F' : 'FF'}`)
    const alpha = a !== 0 ? a / 100 : 0
    return this.RGBAtoHex({
      r, g, b,
      a: Math.round(Math.min(1, Math.max(0, alpha + offset)) * 100) / 100
    })
  }

  // Conversion from RGBA to Hex
  RGBAtoHex({ r, g, b, a }) {
    const hex = [r, g, b]
      .map(x => {
        const hexValue = x.toString(16)
        return hexValue.length === 1 ? '0' + hexValue : hexValue
      })
      .join('')
    const alphaHex = a != null ? Math.round(a * 255).toString(16) : ''
    return `#${hex}${alphaHex}`
  }

  // Conversion from Hex to RGBA
  HexToRGBA(hex) {
    let r = 0, g = 0, b = 0, a = 1
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16)
      g = parseInt(hex[2] + hex[2], 16)
      b = parseInt(hex[3] + hex[3], 16)
    } else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16)
      g = parseInt(hex[3] + hex[4], 16)
      b = parseInt(hex[5] + hex[6], 16)
    } else if (hex.length === 9) {
      r = parseInt(hex[1] + hex[2], 16)
      g = parseInt(hex[3] + hex[4], 16)
      b = parseInt(hex[5] + hex[6], 16)
      a = parseInt(hex[7] + hex[8], 16) / 255
    }
    return { r, g, b, a }
  }

  getColorFromDot (dotted_field, colors) {
    const split = dotted_field.split('.')
    const start = split.splice(0, 1)[0]
    if (!colors[start]) return null
    if (split.length) return this.getColorFromDot(split.join('.'), colors[start])
    if (colors[start].base) return colors[start].base
    return colors[start]
  }

  translateColor (color) {
    switch (color) {
      case 'info': return 'cyan'
    }
    return color
  }

}

export default new Colors()