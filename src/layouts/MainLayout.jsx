import Header from '@/components/UI/Header'
import './styles/MainLayout.css'

const MainLayout = ({ children }) => {
  return (
    <section className = 'main_layout-container'>
      <div className = 'main_layout-header'>
        <Header />
      </div>
      <div className = 'main_layout-body container'>
        {children}
      </div>
    </section>
  )
}

export default MainLayout