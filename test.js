import test from 'ava'
import wrap from './'

test('main', t => {
	function dispatch(action) {
		return action.type
	}
	function increment() {
		return {type: 'increment'}
	}
	const actions = wrap({counter: {increment}}, dispatch)
	t.is(actions.counter.increment(), 'increment')
})
