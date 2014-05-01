"use strict"

module.exports = testOverlap

var doubleBits = require("double-bits")
var bits = require("bit-twiddle")

function tz(f) {
  if(f[0]) {
    return bits.countTrailingZeros(f[0])
  } else if(f[1]) {
    return 32 + bits.countTrailingZeros(f[1])
  } else {
    return 0
  }
}

function lz(f) {
  if(f[1]) {
    return 20 - bits.log2(f[1])
  } else if(f[0]) {
    return 52 - bits.log2(f[0])
  } else {
    return 52
  }
}

function lo(n) {
  var e = doubleBits.exponent(n)
  var f = doubleBits.fraction(n)
  var z = tz(f)
  return e - (52 - z)
}

function hi(n) {
  if(doubleBits.denormalized(n)) {
    return -(1023 + lz(doubleBits.fraction(n)))
  } else {
    return doubleBits.exponent(n)
  }
}

function testOverlap(a, b) {
  if(Math.abs(b) > Math.abs(a)) {
    var t = a
    a = b
    b = t
  }
  if(a === 0 || b === 0) {
    return false
  }
  var a0 = hi(a)
  var a1 = lo(a)
  var b0 = hi(b)
  var b1 = lo(b)
  return (b1 <= a0) && (a1 <= b0)
}