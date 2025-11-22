import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import MainLayout from '@/layouts/MainLayout'
import PrivateRoute from '@/components/UI/PrivateRoute'
import HomePage from '@/pages/HomePage'
import DashboardPage from '@/pages/DashboardPage'
import InformationSection from '@/components/dashboard_page/information_section/InformationSection'
import DistributionSection from '@/components/dashboard_page/distribution_section/DistributionSection'
import CorrelationSection from '@/components/dashboard_page/correlation_section/CorrelationSection'
import FeaturesSection from '@/components/dashboard_page/features_section/FeaturesSection'
import './App.css'

function App() {
  const [fileLoaded, setFileLoaded] = useState(Boolean(sessionStorage.getItem('name')))

  return (
    <main className = 'app'>
      <MainLayout>
        <Routes>
          <Route 
            path = '/' 
            element = {<HomePage setFileLoaded = {setFileLoaded} />} />
          <Route 
            path = '/dashboard' 
            element = {
              <PrivateRoute auth = {fileLoaded}>
                <DashboardPage />
              </PrivateRoute>}>
                <Route index element = {<Navigate to = 'general-information' />} />
                <Route path = 'general-information' element = {<InformationSection />} />
                <Route path = 'distribution' element = {<DistributionSection />} />
                <Route path = 'correlations' element = {<CorrelationSection />} />
                <Route path = 'feature-selection' element = {<FeaturesSection />} />
          </Route>
        </Routes>
      </MainLayout>
    </main>
  )
}

export default App