async function detectWallet() {
	const provider = window.phantom?.solana;
	return provider?.isPhantom
}

async function connectWallet(){
	const provider = window.phantom?.solana;
	if(!provider){
		alert("No wallet detected.")	
	} else {	
 		const res = await window.solana.connect()
 		return res.publicKey
 }
}


const scriptsInEvents = {

	async EventSheet1_Event79_Act2(runtime, localVars)
	{
		const wallet = await detectWallet()
		if(!wallet) return alert("No wallet detected")
		const address = await connectWallet()
		runtime.globalVars.defaultAddress = address
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

