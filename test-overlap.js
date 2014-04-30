"use strict"

module.exports = testOverlap

var doubleBits = require("double-bits")
var bits = require("bit-twiddle")

function tz(e, n) {
  var f = doubleBits.fraction(n)
  if(f[0]) {
    return e - (52 - bits.countTrailingZeros(f[0]))
  } else if(f[1]) {
    return e - (20 - bits.countTrailingZeros(f[1]))
  } else {
    return e
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
  var ea = doubleBits.exponent(a)
  var fa = tz(ea, a)
  var eb = doubleBits.exponent(b)
  var fb = tz(eb, b)
  return (fb <= ea) && (fa <= eb)
}