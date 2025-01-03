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
    return location;
  }

  async index({ response }) {
    try {
      // Buscando todas as localizações de todos os usuários
      const locations = await UserLocation.all();
      return response.json(locations);
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao obter localizações' });
    }
  }
}

module.exports = UserLocationController;
