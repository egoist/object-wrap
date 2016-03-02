'use strict'

function is(obj, type) {
	return Object.prototype.toString.call(obj) === '[object ' + type + ']'
}

function wrapItem(item, fn) {
	return function () {
		var args = [].slice.call(arguments)
		return fn(item.apply(null, args))
	}
}

function wrapObj(obj, fn) {
	var res = {}
	var keys = Object.keys(obj)
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i]
		var item = obj[key]
		if (is(item, 'Object')) {
			res[key] = wrapObj(item, fn)
		} else if (is(item, 'Function')) {
			res[key] = wrapItem(item, fn)
		} else {
			throw new TypeError('Object item can only be either function or object')
		}
	}
	return res
}

module.exports = function (obj, fn) {
	if (!is(obj, 'Object')) {
		throw new TypeError('Expected obj to be an object')
	}
	if (!is(fn, 'Function')) {
		throw new TypeError('Expected fn to be a function')
	}
	var boundObj = wrapObj(obj, fn)
	return boundObj
}
