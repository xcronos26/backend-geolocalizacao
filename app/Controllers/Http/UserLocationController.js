const UserLocation = use('App/Models/UserLocation');
const User = use('App/Models/User');

class UserLocationController {

  async store({ request, auth }) {
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
      // Buscando todas as localizações de todos os usuários, incluindo o nome do usuário e created_at
      const locations = await UserLocation
        .query()
        .innerJoin('users', 'users.id', 'user_locations.user_id')  // Realizando o INNER JOIN
        .select('user_locations.latitude', 'user_locations.longitude', 'user_locations.created_at', 'users.username')  // Selecionando os campos
        .fetch();
      
      return response.json(locations);  // Retorna as localizações com as informações do usuário
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao obter localizações' });
    }
  }
  
}

module.exports = UserLocationController;
