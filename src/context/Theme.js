import React from 'react'

const AppTheme = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  addSavedVideos: () => {},
  savedVideosList: [],
  activeTab: 'Home',
  changeTab: () => {},
})

export default AppTheme
