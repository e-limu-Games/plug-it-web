


const scriptsInEvents = {

	async Interface_es_Event2_Act1(runtime, localVars)
	{
		window.addEventListener("message", event=>{
			const obj = event.data;
			if(obj && obj.action && obj.payload)
			{
				if(obj.action === "sign_in")
				{	
					runtime.globalVars.GameAction = obj.action;
					alert(runtime.globalVars.GameAction);
					
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
					runtime.globalVars.PG_Level = obj.payload.PG_Level;
				}
						if (typeof obj.payload.PG_Level === 'undefined'){
				runtime.globalVars.PG_Level = 1;
				}
			}
		})
	},

	async Interface_es_Event4_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "close_app"
		},"*");
	},

	async Interface_es_Event6_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "game_loaded",
			"payload": {
				"orientation": "landscape"
			}
		},"*");
	},

	async Interface_es_Event8_Act1(runtime, localVars)
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

	async Interface_es_Event10_Act1(runtime, localVars)
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

	async Interface_es_Event12_Act1(runtime, localVars)
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

	async Interface_es_Event14_Act1(runtime, localVars)
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

	async Interface_es_Event16_Act1(runtime, localVars)
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

	async Interface_es_Event18_Act1(runtime, localVars)
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

