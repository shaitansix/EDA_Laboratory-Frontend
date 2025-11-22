import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import MainSidebar from '@/components/dashboard_page/MainSidebar'
import ChatBot from '@/components/dashboard_page/ChatBot'
import { PageFiltersProvider } from '@/context/PageFiltersContext'
import './styles/DashboardPage.css'

const DashboardPage = () => {
  const menu = { 
    'general-information': 'Informacion General', 
    'distribution': 'Distribución', 
    'correlations': 'Correlaciónes', 
    'feature-selection': 'Selección de características'
  }

  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <PageFiltersProvider>
      <section className = 'dashboard_page-container'>
        <div className = 'dashboard_page-sidebar-left'>
          <MainSidebar menu = {menu} />
        </div>

        <div className = 'dashboard_page-body'>
          <Outlet />
        </div>

        <div className = 'dashboard_page-chatbot'>
          <ChatBot />
        </div>
      </section>
    </PageFiltersProvider>
  )
}

export default DashboardPage