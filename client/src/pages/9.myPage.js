import Header from '../components/Header'
import Navigation from '../components/Navigation'
import MyPageSection from './9.myPageSection'

export default function MyPage() {
  return (
    <div className='MyPage'>
      <Header />
      <Navigation />
      <MyPageSection />
    </div>
  );
}