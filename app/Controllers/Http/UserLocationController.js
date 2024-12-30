const UserLocation = use('App/Models/UserLocation');

class UserLocationController {

  async store ({ request, auth }) {
    const user = auth.user; 

    const { latitude, longitude } = request.only(['latitude', 'longitude']);

    const location = await UserLocation.create({
      user_id: user.id,
      latitude,
      longitude
    });
    console.log('Localização salva com sucesso:');
    return location;
  }
}

module.exports = UserLocationController;
