import { NativeBaseProvider, extendTheme, Text } from "native-base";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const theme = extendTheme({
  config: { useSystemColorMode: false, initialColorMode: "dark" },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <Text>Hello world!</Text>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
