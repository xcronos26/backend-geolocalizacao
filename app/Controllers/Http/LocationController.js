class LocationController {
    async store({ request, auth }) {
      const user = await auth.getUser();
      const { latitude, longitude } = request.only(['latitude', 'longitude']);
  
      console.log(`Usuário: ${user.username}, Latitude: ${latitude}, Longitude: ${longitude}`);
  

      return { success: true, message: 'Localização recebida' };
    }
  }
  
  module.exports = LocationController;
  