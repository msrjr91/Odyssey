import axios from 'axios';

const apiURL = 'https://test.api.amadeus.com/v1';
const apiKey = 'HMCRcVf1IqwNWQ7fdCuVYhGSFe1owVEu';
const apiSecret = '6kA3ls1YRRwgHOfh';

export const getToken = async () => {
  const auth = `${apiKey}:${apiSecret}`;
  const encodedAuth = btoa(auth);
  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');

  try {
    const response = await axios.post(`${apiURL}/security/oauth2/token`, data, {
      headers: {
        Authorization: `Basic ${encodedAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log(response.data);
    
  } catch (error) {
    console.error(error);
  }
};