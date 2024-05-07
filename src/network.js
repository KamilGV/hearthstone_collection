import axios from 'axios';

async function checkToken(token){
    const url = "https://oauth.battle.net/oauth/check_token?region=eu&token=" + token 
    // url = "https://oauth.battle.net/oauth/check_token?region=eu&token=EUc35u6xads6BSYpZY5emtwCO7agMRI"

    const result = await axios.post(url, {validateStatus: () => true})
    console.log(result)

    return result.status

    
  
    }

    export default checkToken;
    ;
