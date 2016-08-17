	function checkMandatoryParams(target, reference) {
		const targetParams = Object.keys(target)

		reference.forEach(key => {
			if(targetParams.includes(key) === false)
				throw Error('missing parameter: '+key)
		})
	}
