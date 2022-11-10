import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'

import { Footer } from './components'

import './index.css'

const App = document.getElementById('root')
const fragment = document.createDocumentFragment()
const Root: FC = () => {
  return (
    <div className="absolute h-full w-full flex items-center justify-center bg-primary-bg">
      <Footer />
    </div>
  )
}

createRoot(App ?? fragment).render(<Root />)
