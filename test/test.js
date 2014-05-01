"use strict"

var tape = require("tape")
var testOverlap = require("../test-overlap.js")

tape("test-float-overlap", function(t) {

  t.ok(testOverlap(1.5, 0.5))
  t.ok(testOverlap(Math.pow(2, -52), 1.0 + Math.pow(2, -52)))
  t.ok(!testOverlap(1.0, 0.5))

  //Test 0
  t.ok(!testOverlap(0, 1))
  t.ok(!testOverlap(0, 0))

  //Test denormalized numbers
  t.ok(!testOverlap(Math.pow(2, -1024), Math.pow(2, -1023)))
  t.ok(!testOverlap(Math.pow(2, -1023), Math.pow(2, -1022)))
  t.ok(testOverlap(Math.pow(2, -1024) + Math.pow(2, -1040), Math.pow(2, -1030)))
  t.ok(!testOverlap(Math.pow(2, -1030) - Math.pow(2, -1031), Math.pow(2, -1030)))

  t.end()
})