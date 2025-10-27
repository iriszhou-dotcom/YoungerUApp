import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import { ToastProvider } from './components/Toast'
import Navigation from './components/Navigation'
import RequireAuth from './components/RequireAuth'

// Pages
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Planner from './pages/Planner'
import Library from './pages/Library'
import LibraryDetail from './pages/LibraryDetail'
import Forecast from './pages/Forecast'
import Safety from './pages/Safety'
import Community from './pages/Community'

export default function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <div className="min-h-screen bg-[#F5F7F8]">
            
            <Routes>
              {/* Default redirect to planner */}
              <Route path="/" element={<Navigate to="/planner" replace />} />

              {/* Public routes */}
              <Route path="/auth/sign-in" element={<SignIn />} />
              <Route path="/auth/sign-up" element={<SignUp />} />

              {/* App routes */}
              <Route path="/planner" element={
                <>
                  <Navigation />
                  <Planner />
                </>
              } />

              <Route path="/library" element={
                <>
                  <Navigation />
                  <Library />
                </>
              } />
              <Route path="/library/:slug" element={
                <>
                  <Navigation />
                  <LibraryDetail />
                </>
              } />

              <Route path="/forecast" element={
                <>
                  <Navigation />
                  <Forecast />
                </>
              } />

              <Route path="/safety" element={
                <>
                  <Navigation />
                  <Safety />
                </>
              } />

              <Route path="/community" element={
                <>
                  <Navigation />
                  <Community />
                </>
              } />
            </Routes>

            {/* Footer */}
            <Routes>
              <Route path="/planner" element={
                <footer className="bg-white border-t border-gray-100 py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#174C4F] mb-2">YoungerU</h3>
                        <p className="text-lg text-gray-600">Science-based wellness guidance</p>
                      </div>
                      <p className="text-base text-gray-500 font-medium">
                        Educational, not medical advice.
                      </p>
                      <p className="text-sm text-gray-400 mt-4">
                        © 2024 YoungerU. All rights reserved.
                      </p>
                    </div>
                  </div>
                </footer>
              } />
              <Route path="/library" element={
                <footer className="bg-white border-t border-gray-100 py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#174C4F] mb-2">YoungerU</h3>
                        <p className="text-lg text-gray-600">Science-based wellness guidance</p>
                      </div>
                      <p className="text-base text-gray-500 font-medium">
                        Educational, not medical advice.
                      </p>
                      <p className="text-sm text-gray-400 mt-4">
                        © 2024 YoungerU. All rights reserved.
                      </p>
                    </div>
                  </div>
                </footer>
              } />
              <Route path="/library/:slug" element={
                <footer className="bg-white border-t border-gray-100 py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#174C4F] mb-2">YoungerU</h3>
                        <p className="text-lg text-gray-600">Science-based wellness guidance</p>
                      </div>
                      <p className="text-base text-gray-500 font-medium">
                        Educational, not medical advice.
                      </p>
                      <p className="text-sm text-gray-400 mt-4">
                        © 2024 YoungerU. All rights reserved.
                      </p>
                    </div>
                  </div>
                </footer>
              } />
              <Route path="/forecast" element={
                <footer className="bg-white border-t border-gray-100 py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#174C4F] mb-2">YoungerU</h3>
                        <p className="text-lg text-gray-600">Science-based wellness guidance</p>
                      </div>
                      <p className="text-base text-gray-500 font-medium">
                        Educational, not medical advice.
                      </p>
                      <p className="text-sm text-gray-400 mt-4">
                        © 2024 YoungerU. All rights reserved.
                      </p>
                    </div>
                  </div>
                </footer>
              } />
              <Route path="/safety" element={
                <footer className="bg-white border-t border-gray-100 py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#174C4F] mb-2">YoungerU</h3>
                        <p className="text-lg text-gray-600">Science-based wellness guidance</p>
                      </div>
                      <p className="text-base text-gray-500 font-medium">
                        Educational, not medical advice.
                      </p>
                      <p className="text-sm text-gray-400 mt-4">
                        © 2024 YoungerU. All rights reserved.
                      </p>
                    </div>
                  </div>
                </footer>
              } />
              <Route path="/community" element={
                <footer className="bg-white border-t border-gray-100 py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-[#174C4F] mb-2">YoungerU</h3>
                        <p className="text-lg text-gray-600">Science-based wellness guidance</p>
                      </div>
                      <p className="text-base text-gray-500 font-medium">
                        Educational, not medical advice.
                      </p>
                      <p className="text-sm text-gray-400 mt-4">
                        © 2024 YoungerU. All rights reserved.
                      </p>
                    </div>
                  </div>
                </footer>
              } />
            </Routes>
          </div>
        </Router>
      </ToastProvider>
    </AuthProvider>
  )
}