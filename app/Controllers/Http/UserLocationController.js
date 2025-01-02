const UserLocation = use('App/Models/UserLocation');

class UserLocationController {

  async store ({ request, auth }) {
    const user = auth.user;

    const { latitude, longitude } = request.only(['latitude', 'longitude']);

    // Criando uma nova localização no banco de dados
    const location = await UserLocation.create({
      user_id: user.id,
      latitude,
      longitude
    });
    console.log('Localização salva com sucesso:');
    return location;
  }

  // Método para recuperar todas as localizações do usuário autenticado
  async index({ auth, response }) {
    try {
      // Verificando se o usuário está autenticado
      const user = auth.user;
      
      // Buscando todas as localizações do usuário no banco de dados
      const locations = await UserLocation.query().where('user_id', user.id).fetch();
      
      return response.json(locations);  // Retorna as localizações em formato JSON
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Erro ao obter localizações' });
    }
  }
}

module.exports = UserLocationController;
