	function checkMandatoryParams(target, reference) {
		const targetParams = Object.keys(target)

		reference.forEach(key => {
			if(targetParams.includes(key) === false)
				throw err('missing parameter: '+key)
		})
	}
