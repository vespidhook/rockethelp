import { VStack, Text as NativeBaseText } from 'native-base';
import { useRoute } from '@react-navigation/native';

import { Header } from '../components/Header';

type RouteParams = {
    orderId: string;
}

export function Details() {
  const route = useRoute();
  const { orderId } = route.params as RouteParams;

  return (
    <VStack flex={1} bg="gray.700">
        <Header title="Solicitação" />
        <NativeBaseText color="white">
          {orderId}
        </NativeBaseText>
    </VStack>
  );
}