import Home from '@/pages/index';
import MainContainer from '@/layout/MainContainer/';

export default {
  title: 'Pages/Home Page',
  component: Home,
};

export const HomePage = {
  render: () => (
    <MainContainer>
      <Home />
    </MainContainer>
  ),
};
