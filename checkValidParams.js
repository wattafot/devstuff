	function checkValidParams(target, reference) {
		
		Object.keys(target).forEach(key => {
			if(reference.includes(key) === false)
				throw Error('invalid paramter: '+key)
		})
	}
