import React from 'react'
import ContentLoader from "react-content-loader"

const BookPlaceholder = () => {
    return (
  <ContentLoader 
    speed={2}
    width={400}
    height={635}
    viewBox="0 0 400 635"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="222" y="402" rx="0" ry="0" width="1" height="0" /> 
    <rect x="172" y="406" rx="0" ry="0" width="2" height="0" /> 
    <rect x="178" y="408" rx="0" ry="0" width="1" height="0" /> 
    <rect x="145" y="177" rx="0" ry="0" width="1" height="0" /> 
    <rect x="3" y="2" rx="0" ry="0" width="400" height="400" /> 
    <rect x="3" y="418" rx="0" ry="0" width="400" height="20" /> 
    <rect x="3" y="444" rx="0" ry="0" width="400" height="20" />
  </ContentLoader>
)

}

export default BookPlaceholder
