import React from 'react'
import { BallTriangle, LineWave } from 'react-loader-spinner'

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
    <LineWave
        height="150"
        width="150"
        color="#126e60"
        ariaLabel="bars-loading"
        visible={true}
    />
</div>
  )
}

export default PageLoader