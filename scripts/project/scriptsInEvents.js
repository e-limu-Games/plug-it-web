


const scriptsInEvents = {

	async Funtions_es_Event3_Act1(runtime, localVars)
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
					runtime.globalVars.PG_Level = obj.payload.PG_Level;
					
				}
			}
		})
	},

	async Funtions_es_Event5_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "close_app"
		},"*");
	},

	async Funtions_es_Event7_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "game_loaded",
			"payload": {
				"orientation": "landscape"
			}
		},"*");
	},

	async Funtions_es_Event9_Act1(runtime, localVars)
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

	async Funtions_es_Event11_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "open_activity",
			"payload": {
				"app_key": "cleanliness"
			}
		},"*");
		//alert("Posted")
	},

	async Funtions_es_Event13_Act1(runtime, localVars)
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

	async Funtions_es_Event15_Act1(runtime, localVars)
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

	async Funtions_es_Event17_Act1(runtime, localVars)
	{
		window.parent.postMessage(
		{
		    "action": "retrieve_user_data",
			"payload": {
				"app_key": "cleanliness"
			}
		},"*");
		//alert("Posted")
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

