


const scriptsInEvents = {

	async Loading_es_Event27_Act1(runtime, localVars)
	{
		window.addEventListener("message", event=>{
			const obj = event.data;
			if(obj && obj.action && obj.payload)
			{
				if(obj.action === "sign_in")
				{
					runtime.globalVars.GameAction = obj.action;
				//alert(runtime.globalVars.GameAction);
				
				runtime.globalVars.GameKey = obj.payload.app_key;
				//alert(runtime.globalVars.GameKey);
				
				runtime.globalVars.UserEmail = obj.payload.user.email;
				//alert(runtime.globalVars.UserEmail);
				
				runtime.globalVars.UserFirstname = obj.payload.user.firstName;
				//alert(runtime.globalVars.UserFirstname);
				
				runtime.globalVars.UserLastname = obj.payload.user.lastName;
				//alert(runtime.globalVars.UserLastname);
				
				runtime.globalVars.Username = obj.payload.user.username;
				//alert(runtime.globalVars.Username);
				}
				
				else if(obj.action === "retrieve_user_data")
				{
					runtime.globalVars.Level = obj.payload.PG_Level;
					//console.log (runtime.globalVars.PG_Level);
					
				}
			}
		})
	},

	async Loading_es_Event29_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "close_app"
		},"*");
	},

	async Loading_es_Event31_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "game_loaded",
			"payload": {
				"orientation": "landscape"
			}
		},"*");
	},

	async Loading_es_Event33_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		     "action": "open_game",
		     "payload": {
		         "app_key": localVars.GameToOpen,
		     }
		 },"*");
		//alert("Posted " + localVars.GameToOpen);
	},

	async Loading_es_Event35_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "open_activity",
			"payload": {
				"app_key": "plug-it"
			}
		},"*");
		//alert("Posted")
	},

	async Loading_es_Event37_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "open_feedback",
			"payload": {
				"app_id": runtime.globalVars.AppId
			}
		},"*");
		//alert("Posted")
	},

	async Loading_es_Event39_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "update_user_data",
			"payload": {
				"dataKey": localVars.dataKey,
				"value" : localVars.value
			}
		},"*");
		//alert("Posted")
	},

	async Loading_es_Event41_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "retrieve_user_data",
			"payload": {
				"app_key": "plug-it"
			}
		},"*");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

