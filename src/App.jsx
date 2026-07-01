import { useEffect } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import AccountDeletion from './pages/AccountDeletion.jsx'
import CancellationRefundPolicy from './pages/CancellationRefundPolicy.jsx'
import Contact from './pages/Contact.jsx'
import DeliveryPolicy from './pages/DeliveryPolicy.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function SiteLayout() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-text">
      <ScrollToTop />
      <Header />
      <main className="px-4 pb-12 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route
          path="/cancellation-refund-policy"
          element={<CancellationRefundPolicy />}
        />
        <Route path="/delivery-policy" element={<DeliveryPolicy />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  )
}

export default App
