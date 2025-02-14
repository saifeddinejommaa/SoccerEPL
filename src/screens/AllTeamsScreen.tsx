import {View, FlatList} from 'react-native';
import {GetAllTeams} from '../domain/useCases/getAllTeams';
import TYPES from '../di/Types';
import {useInjection} from 'inversify-react';

const AllTeamsScreen: React.FC = () => {
  const getAllTeams: GetAllTeams = useInjection<GetAllTeams>(TYPES.GetAllTeams);
  return <View></View>;
};

export default AllTeamsScreen;
