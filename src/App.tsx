import { Router } from "./router";
import { FormProvider } from "./contexts/FormComtext";
const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
};
export default App;
