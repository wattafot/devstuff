	function checkMandatoryParams(target, referene) {
		const targetParams = Object.keys(target)

		refernce.forEach(key => {
			if(targetParams.includes(key) === false)
				throw err('missing parameter: '+key)
		})
	}