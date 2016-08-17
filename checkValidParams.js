	function checkValidParams(target, referene) {
		
		Object.keys(target).forEach(key => {
			if(referene.includes(key) === false)
				throw err('invalid paramter: '+key)
		})
	}